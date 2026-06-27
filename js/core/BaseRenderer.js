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
      this.explainContainer.scrollTop = this.explainContainer.scrollHeight;
    });
  }

  // 3. Hàm này Lớp con (Pointer, Tree, List) SẼ PHẢI TỰ ĐỊNH NGHĨA
  renderVisualization(memoryState, hasHeap) {
    console.warn("Lớp con chưa ghi đè hàm renderVisualization!");
  }

  // 4. Update UI tổng thể (DÙNG CHUNG luồng chạy)
  updateUI(lessonData, currentStepIndex) {
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

    // Gọi hàm vẽ Visualization (tùy thuộc vào việc đang dùng Pointer, Tree hay List)
    this.renderVisualization(currentStepData.memoryState, hasHeap);

    // Vẽ giải thích
    this.renderExplanation(lessonData.steps, currentStepIndex);
  }
}
