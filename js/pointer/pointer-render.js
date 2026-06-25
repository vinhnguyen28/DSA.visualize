// =======================================
// POINTER RENDER LOGIC
// =======================================

class PointerRenderer {
  constructor() {
    this.codeContainer = document.getElementById("code-container");
    this.vizContainer = document.getElementById("viz-container");
    this.explainContainer = document.getElementById("explanation-container");
  }

  // Render phần code với highlight và đánh dấu dòng hiện tại
  renderCode(codeLines, activeIndex) {
    this.codeContainer.innerHTML = codeLines
      .map((line, index) => {
        // kiểm tra chỗ nào index = với chỗ cần tô sáng thì gáng class là active vào
        const isActive = index === activeIndex ? "active" : "";

        // Sử dụng thư viện ngoài để hightlight code có mầu
        const highlighted = hljs.highlight(line, { language: "cpp" }).value;

        return `
                <div class="code-line ${isActive}">
                    <span class="line-number">${index + 1}</span>
                    <span class="line-content">${highlighted}</span>
                </div>
            `;
      })
      .join("");
  }

  // Render Phần mô phỏng bộ nhớ
  /**
   * kiểm tra xem bài học hiện tại có vùng nhớ Heap nào xuất hiện không để quyết định có hiển thị phần Heap hay không
   * @param {Object} memoryState - Trạng thái bộ nhớ hiện tại, bao gồm các biến thường, con trỏ và vùng nhớ động (heap)
   * @returns {void}
   * @description
   * Hàm này sẽ xây dựng giao diện mô phỏng bộ nhớ dựa trên trạng thái bộ nhớ hiện tại. Nó sẽ gom các biến thường và con trỏ vào phần Stack, trong khi các vùng nhớ động sẽ được gom vào phần Heap.
   * Nếu bài học hiện tại không có bất kỳ vùng nhớ động nào, phần Heap sẽ không được hiển thị để giữ cho giao diện gọn gàng hơn.
   * Hàm này cũng sẽ gọi phương thức drawPointers để vẽ các mũi tên thể hiện mối quan hệ giữa con trỏ và biến mà nó trỏ tới.
   * @example
   * renderVisualization(currentStepData.memoryState);
   * // Cập nhật giao diện mô phỏng bộ nhớ
   */
  renderVisualization(memoryState, hasHeap) {
    let stackHtml = "";
    let heapHtml = "";

    // Gom các biến thường vào Stack
    memoryState.variables.forEach((v) => {
      // const updateClass = v.isUpdated ? "memory-updated" : "";
      stackHtml += `
        <div 
          class="memory-block" 
          id="var-${v.name}"
          style="
            grid-row:${v.row};
            grid-column:${v.col};
            "
        >
            <div style="color: #9CDCFE">${v.type} ${v.name}</div>
            <div style="font-size: 24px; font-weight: bold; margin: 10px 0;">${v.value}</div>
            <div class="memory-address">Addr: ${v.address}</div>
        </div>
      `;
    });

    // Gom các con trỏ vào Stack
    memoryState.pointers.forEach((p) => {
      stackHtml += `
        <div 
          class="memory-block ${p.center ? "pointer-center" : ""}"
          id="ptr-${p.name}"
          style="
            border-color: #C586C0;
            grid-row:${p.row};
            grid-column:${p.col};
            "
        >
            <div style="color: #C586C0">int* ${p.name}</div>
            <div style="font-size: 16px; margin: 10px 0;">${p.value}</div>
            <div class="memory-address">Addr: ${p.address}</div>
        </div>
      `;
    });

    // Gom vùng nhớ động vào Heap
    memoryState.heap.forEach((cell) => {
      heapHtml += `
        <div 
          class="memory-block heap-block" 
          id="heap-${cell.name}" 
          style="
          grid-row:${cell.row};
          grid-column:${cell.col};
          "
        >
            <div style="color:#FFB74D">${cell.type}</div>
            <div style="font-size:24px">${cell.value}</div>
            <div class="memory-address">Addr: ${cell.address}</div>
        </div>
      `;
    });

    // Ráp HTML với điều kiện hiển thị Heap
    let html = `
        <svg id="arrow-layer"></svg>
        <div class="memory-layout">
            <div class="stack-area">
                <div class="memory-title">STACK MEMORY</div>
                <div id="stack-content" class="memory-container">${stackHtml}</div>
            </div>
    `;

    if (hasHeap) {
      html += `
            <div class="heap-area">
                <div class="memory-title">HEAP MEMORY</div>
                <div id="heap-content" class="memory-container">${heapHtml}</div>
            </div>
      `;
    }

    html += `</div>`;

    this.vizContainer.innerHTML = html;

    const stackArea = document.querySelector(".stack-area");
    const heapArea = document.querySelector(".heap-area");
    if (hasHeap) {
      stackArea.style.flex = "none";
      heapArea.style.flex = "1";
    } else {
      stackArea.style.flex = "1";
    }

    // tính toán chia ô stack và heap
    const heap = document.getElementById("heap-content");
    const stack = document.getElementById("stack-content");
    // chia stack
    if (stack) {
      const totalRows = Math.max(
        1,
        ...memoryState.variables.map((v) => v.row || 1),
        ...memoryState.pointers.map((p) => p.row || 1),
      );

      stack.style.gridTemplateRows = `repeat(${totalRows}, 116px)`;
    }
    // chia heap
    if (heap) {
      const heapRows = Math.max(
        1,
        ...memoryState.heap.map((cell) => cell.row || 1),
      );

      heap.style.gridTemplateRows = `repeat(${heapRows},116px)`;
    }

    requestAnimationFrame(() => {
      this.drawPointers(memoryState);
    });
  }

  // Render Phần giải thích
  renderExplanation(steps, currentStepId) {
    const visibleSteps = steps
      .slice(0, currentStepId + 1)
      .filter((step) => step.explanation !== null);

    this.explainContainer.innerHTML = visibleSteps
      .map((step, index) => {
        const latest = index === visibleSteps.length - 1 ? "latest-step" : "";

        return `
                <div class="step-card ${latest}">
                    <div class="step-header">
                        Step ${index + 1}
                    </div>

                    <div class="step-content">
                        ${step.explanation}
                    </div>
                </div>
            `;
      })
      .join("");
  }

  // Update the whole UI based on current step data
  updateUI(lessonData, currentStepIndex) {
    const currentStepData = lessonData.steps[currentStepIndex];

    // Kiểm tra xem bài học hiện tại có vùng nhớ Heap nào xuất hiện không
    const hasHeap = lessonData.steps.some(
      (step) => step.memoryState.heap && step.memoryState.heap.length > 0,
    );

    // Cấu hình code
    this.renderCode(lessonData.codeLines, currentStepData.activeCodeLine);

    // hiển thị vị trí CURRENT LINE
    const currentLineInfo = document.getElementById("current-line-info");
    currentLineInfo.textContent = `Current Line: ${currentStepData.activeCodeLine + 1} / ${lessonData.codeLines.length - 1}`;

    // LỖI 1 ĐÃ SỬA Ở ĐÂY: Truyền thêm hasHeap vào hàm
    this.renderVisualization(currentStepData.memoryState, hasHeap);

    // Dùng requestAnimationFrame để đợi DOM update xong mới vẽ mũi tên
    requestAnimationFrame(() => {
      this.drawPointers(currentStepData.memoryState);
    });

    // Cấu hình giải thích
    this.renderExplanation(lessonData.steps, currentStepIndex);
  }

  // vẽ mũi tên giữa 2 box với nhau
  drawPointers(memoryState) {
    const svg = document.getElementById("arrow-layer");

    if (!svg) return;
    svg.innerHTML = "";
    svg.innerHTML += `
        <defs>
            <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#C586C0"/>
            </marker>
        </defs>`;
    // Lấy toạ độ tuyệt đối của thẻ SVG để tính toán chính xác
    const svgRect = svg.getBoundingClientRect();

    memoryState.pointers.forEach((pointer) => {
      if (pointer.value === "???") {
        return;
      }

      const from = document.getElementById(`ptr-${pointer.name}`);

      // Đích đên của mũi tên
      let to = document.getElementById(`var-${pointer.pointsTo}`);

      if (!to) {
        to = document.getElementById(`ptr-${pointer.pointsTo}`);
      }

      if (!to) {
        to = document.getElementById(`heap-${pointer.pointsTo}`);
      }

      if (!from || !to) {
        return;
      }

      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      let x1, y1, x2, y2;

      // KIỂM TRA VỊ TRÍ TƯƠNG ĐỐI ĐỂ NỐI MŨI TÊN CHÍNH XÁC
      if (fromRect.bottom <= toRect.top) {
        // TRƯỜNG HỢP 1: Từ Stack xuống Heap (Xếp dọc - Con trỏ ở TRÊN ô nhớ Heap)
        x1 = fromRect.left - svgRect.left + fromRect.width / 2;
        y1 = fromRect.bottom - svgRect.top;
        x2 = toRect.left - svgRect.left + toRect.width / 2;
        y2 = toRect.top - svgRect.top - 5; // Chừa 5px cho đầu mũi tên tiếp đất đẹp mắt
      } else if (fromRect.top >= toRect.bottom) {
        // TRƯỜNG HỢP 2: Con trỏ nằm ở DƯỚI ô nhớ được trỏ
        x1 = fromRect.left - svgRect.left + fromRect.width / 2;
        y1 = fromRect.top - svgRect.top;
        x2 = toRect.left - svgRect.left + toRect.width / 2;
        y2 = toRect.bottom - svgRect.top + 5;
      } else if (fromRect.left > toRect.left) {
        // TRƯỜNG HỢP 3: Xếp ngang (Con trỏ nằm bên PHẢI biến - Giống bài cơ bản p và x)
        x1 = fromRect.left - svgRect.left;
        y1 = fromRect.top - svgRect.top + fromRect.height / 2;
        x2 = toRect.right - svgRect.left + 5;
        y2 = toRect.top - svgRect.top + toRect.height / 2;
      } else {
        // TRƯỜNG HỢP 4: Xếp ngang (Con trỏ nằm bên TRÁI biến)
        x1 = fromRect.right - svgRect.left;
        y1 = fromRect.top - svgRect.top + fromRect.height / 2;
        x2 = toRect.left - svgRect.left - 5;
        y2 = toRect.top - svgRect.top + toRect.height / 2;
      }

      svg.innerHTML += `
        <line
            class="animated-arrow"
            x1="${x1}"
            y1="${y1}"
            x2="${x2}"
            y2="${y2}"
            stroke="#C586C0"
            stroke-width="2.5"
            marker-end="url(#arrowhead)"
        />
        `;
    });
  }
}
