// File: js/core/BaseRenderer.js
class BaseRenderer {
  constructor() {
    this.codeContainer = document.getElementById("code-container");
    this.vizContainer = document.getElementById("viz-container");
    this.explainContainer = document.getElementById("explanation-container");
  }

  // 1. Render phần code (DÙNG CHUNG)
  renderCode(codeLines, activeIndex) {
    this.codeContainer.innerHTML = codeLines
      .map((line, index) => {
        const isActive = index === activeIndex ? "active" : "";
        const highlighted = hljs.highlight(line, { language: "cpp" }).value;
        return `
            <div class="code-line ${isActive}">
                <span class="line-number">${index + 1}</span>
                <span class="line-content">${highlighted}</span>
            </div>
        `;
      })
      .join("");

    requestAnimationFrame(() => {
      const activeLine = this.codeContainer.querySelector(".code-line.active");
      if (activeLine)
        activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  // 2. Render phần giải thích (DÙNG CHUNG)
  renderExplanation(steps, currentStepId) {
    const visibleSteps = steps
      .slice(0, currentStepId + 1)
      .filter((step) => step.explanation !== null);

    this.explainContainer.innerHTML = visibleSteps
      .map((step, index) => {
        const latest = index === visibleSteps.length - 1 ? "latest-step" : "";
        return `
            <div class="step-card ${latest}">
                <div class="step-header">Step ${index + 1}</div>
                <div class="step-content">${step.explanation}</div>
            </div>
        `;
      })
      .join("");

    requestAnimationFrame(() => {
      const latestStep = this.explainContainer.querySelector(
        ".step-card.latest-step",
      );
      if (latestStep) {
        latestStep.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

  // 3. Hàm này Lớp con (Pointer, Tree, List) SẼ PHẢI TỰ ĐỊNH NGHĨA
  renderVisualization(memoryState, hasHeap) {
    console.warn("Lớp con chưa ghi đè hàm renderVisualization!");
  }

  // ==========================================
  // HÀM VẼ GIAO DIỆN KHÓA (CÓ NÚT UPGRADE)
  // ==========================================
  renderLockedUI() {
    // Dùng clamp để UI tự động to nhỏ tỉ lệ theo kích thước màn hình
    const lockHtml = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%; min-height: 250px; padding: 20px;">
        <i class="fa-solid fa-lock" style="font-size: clamp(80px, 12vw, 160px); color: rgb(133, 133, 133); margin-bottom: 25px; opacity: 0.6;"></i>
        
        <div style="font-size: clamp(20px, 2.5vw, 28px); font-weight: bold; color: rgb(133, 133, 133); letter-spacing: 6px; margin-bottom: 30px; opacity: 0.6;">
          UPGRADE
        </div>
        
        <a href="#" 
           style="display: inline-flex; align-items: center; justify-content: center; padding: 12px 32px; font-size: 16px; font-weight: bold; font-family: var(--font-main); color: #1e1e1e; background-color: var(--accent-orange); text-decoration: none; border-radius: var(--radius-pill); box-shadow: 0 4px 15px var(--orange-25); transition: all 0.3s ease; cursor: pointer;"
           onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 20px rgba(255, 183, 77, 0.4)';" 
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px var(--orange-25)';">
           <i class="fa-solid fa-crown" style="margin-right: 8px;"></i> Unlock Premium
        </a>
      </div>
    `;

    // Nhét UI ổ khóa và nút bấm vào cả 3 panel
    if (this.codeContainer) this.codeContainer.innerHTML = lockHtml;
    if (this.vizContainer) this.vizContainer.innerHTML = lockHtml;
    if (this.explainContainer) this.explainContainer.innerHTML = lockHtml;

    // Đổi text dòng hiển thị Line
    const currentLineInfo = document.getElementById("current-line-info");
    if (currentLineInfo) {
      currentLineInfo.textContent = "PREMIUM FEATURE";
    }
  }
  // 4. Update UI tổng thể (DÙNG CHUNG luồng chạy)
  updateUI(lessonData, currentStepIndex) {
    // KIỂM TRA NẾU BÀI HỌC BỊ KHÓA THÌ VẼ Ổ KHÓA RỒI DỪNG LUÔN
    if (lessonData.isLocked) {
      this.renderLockedUI();
      return;
    }

    // Đề phòng trường hợp quên gắn cờ isLocked nhưng data bị rỗng
    if (!lessonData.steps || lessonData.steps.length === 0) return;

    const currentStepData = lessonData.steps[currentStepIndex];
    const hasHeap = lessonData.steps.some(
      (step) => step.memoryState.heap && step.memoryState.heap.length > 0,
    );

    // Vẽ code
    this.renderCode(lessonData.codeLines, currentStepData.activeCodeLine);

    // Cập nhật text Line Info
    const currentLineInfo = document.getElementById("current-line-info");
    if (currentLineInfo) {
      currentLineInfo.textContent = `Current Line: ${currentStepData.activeCodeLine + 1} / ${lessonData.codeLines.length - 1}`;
    }

    // Gọi hàm vẽ Visualization
    this.renderVisualization(currentStepData.memoryState, hasHeap);

    // Vẽ giải thích
    this.renderExplanation(lessonData.steps, currentStepIndex);
  }
}
