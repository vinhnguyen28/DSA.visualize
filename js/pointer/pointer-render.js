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

    requestAnimationFrame(() => {
      const activeLine = this.codeContainer.querySelector(".code-line.active");
      if (activeLine) {
        activeLine.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
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
      const updateClass = v.isUpdated ? "memory-updated" : "";
      const valClass = v.value === "???" ? "val-garbage" : "";

      // THÊM DÒNG NÀY: Chỉ dùng popIn nếu không có update
      const animStyle = v.isUpdated
        ? ""
        : "animation: popIn var(--transition-normal) forwards;";

      stackHtml += `
        <div 
          class="memory-block memory-var ${updateClass}" 
          id="var-${v.name}"
          title="Variable: ${v.name}&#10;Type: ${v.type}&#10;Address: ${v.address}"
          style="
            grid-row:${v.row};
            grid-column:${v.col};
            ${animStyle} /* THAY THẾ CHỖ NÀY */
            "
        >
            <div class="var-type">${v.type} ${v.name}</div>
            <div class="var-value ${valClass}">${v.value}</div>
            <div class="memory-address">Addr: ${v.address}</div>
        </div>
      `;
    });

    // Gom các con trỏ vào Stack
    memoryState.pointers.forEach((p) => {
      const updateClass = p.isUpdated ? "memory-updated" : "";

      // THÊM DÒNG NÀY
      const animStyle = p.isUpdated
        ? ""
        : "animation: popIn var(--transition-normal) forwards;";

      let valClass = "";
      if (p.value === "???") valClass = "val-garbage";
      else if (
        p.value === "NULL" ||
        p.value === "0x000" ||
        p.value === "nullptr"
      )
        valClass = "val-null";

      stackHtml += `
        <div 
          class="memory-block memory-ptr ${p.center ? "pointer-center" : ""} ${updateClass}"
          id="ptr-${p.name}"
          title="Pointer: ${p.name}&#10;Type: int*&#10;Address: ${p.address}&#10;Points to: ${p.pointsTo || "None"}"
          style="
            grid-row:${p.row};
            grid-column:${p.col};
            ${animStyle} /* THAY THẾ CHỖ NÀY */
            "
        >
            <div class="ptr-type">int* ${p.name}</div>
            <div class="ptr-value ${valClass}">${p.value}</div>
            <div class="memory-address">Addr: ${p.address}</div>
        </div>
      `;
    });

    // Gom vùng nhớ động vào Heap
    memoryState.heap.forEach((cell) => {
      const updateClass = cell.isUpdated ? "memory-updated" : ""; // Dự phòng cho tương lai
      const animStyle = cell.isUpdated
        ? ""
        : "animation: popIn 0.4s ease forwards;";

      let valClass = "";
      if (cell.value === "???") valClass = "val-garbage";
      else if (cell.value === "Released Memory") valClass = "val-null";

      heapHtml += `
        <div 
          class="memory-block memory-heap heap-block ${updateClass}" 
          id="heap-${cell.name}" 
          title="Dynamic Memory (Heap)&#10;Address: ${cell.address}"
          style="
          grid-row:${cell.row};
          grid-column:${cell.col};
          ${animStyle} /* THAY THẾ CHỖ NÀY */
          "
        >
            <div class="heap-type">${cell.type || "unknown"}</div>
            <div class="var-value ${valClass}">${cell.value}</div>
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

    // tạo scroll cho explanation
    requestAnimationFrame(() => {
      this.explainContainer.scrollTop = this.explainContainer.scrollHeight;
    });
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
    // requestAnimationFrame(() => {
    //   this.drawPointers(currentStepData.memoryState);
    // });
    // Cấu hình giải thích
    this.renderExplanation(lessonData.steps, currentStepIndex);
  }

  // vẽ mũi tên giữa 2 box với nhau
  drawPointers(memoryState) {
    const svg = document.getElementById("arrow-layer");
    if (!svg) return;

    // Lấy toạ độ tuyệt đối 1 lần để tối ưu reflow
    const svgRect = svg.getBoundingClientRect();

    // Khởi tạo markup cơ bản
    let svgContent = `
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <polygon points="0 0, 10 3, 0 6" fill="#C586C0"/>
        </marker>
    </defs>`;

    memoryState.pointers.forEach((pointer) => {
      if (pointer.value === "???" || pointer.pointsTo === "") return;

      const from = document.getElementById(`ptr-${pointer.name}`);
      let to =
        document.getElementById(`var-${pointer.pointsTo}`) ||
        document.getElementById(`ptr-${pointer.pointsTo}`) ||
        document.getElementById(`heap-${pointer.pointsTo}`);

      if (!from || !to) return;

      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      let x1, y1, x2, y2;

      // Fix Bug-04: Xử lý khi 2 phần tử nằm cùng cột (trường hợp int** hoặc cùng nằm trên 1 trục dọc)
      if (Math.abs(fromRect.left - toRect.left) < 10) {
        // Lệch X ra một chút để mũi tên đi vòng bên ngoài
        x1 = fromRect.right - svgRect.left;
        y1 = fromRect.top - svgRect.top + fromRect.height / 2;
        x2 = toRect.right - svgRect.left;
        y2 = toRect.top - svgRect.top + toRect.height / 2;

        // CÁCH SỬA MỚI (CHỐNG BUG TRÌNH DUYỆT):
        // C: Uốn cong mượt mà đến vị trí x2 + 25
        // L: Đâm thẳng ngang 11px vào vị trí x2 + 14
        // Việc chốt hạ bằng đoạn thẳng L sẽ ép đầu mũi tên xoay ngang tuyệt đối.
        svgContent += `
        <path class="animated-arrow" 
              d="M ${x1} ${y1} C ${x1 + 75} ${y1}, ${x2 + 75} ${y2}, ${x2 + 25} ${y2} L ${x2 + 14} ${y2}" 
              fill="transparent" stroke="#C586C0" stroke-width="2.5" marker-end="url(#arrowhead)"/>`;
        return;
      }

      if (fromRect.bottom <= toRect.top) {
        x1 = fromRect.left - svgRect.left + fromRect.width / 2;
        y1 = fromRect.bottom - svgRect.top;
        x2 = toRect.left - svgRect.left + toRect.width / 2;
        y2 = toRect.top - svgRect.top - 14; /* Tăng từ 5 lên 14 */
      } else if (fromRect.top >= toRect.bottom) {
        x1 = fromRect.left - svgRect.left + fromRect.width / 2;
        y1 = fromRect.top - svgRect.top;
        x2 = toRect.left - svgRect.left + toRect.width / 2;
        y2 = toRect.bottom - svgRect.top + 14; /* Tăng từ 5 lên 14 */
      } else if (fromRect.left > toRect.left) {
        x1 = fromRect.left - svgRect.left;
        y1 = fromRect.top - svgRect.top + fromRect.height / 2;
        x2 = toRect.right - svgRect.left + 14; /* Tăng từ 5 lên 14 */
        y2 = toRect.top - svgRect.top + toRect.height / 2;
      } else {
        x1 = fromRect.right - svgRect.left;
        y1 = fromRect.top - svgRect.top + fromRect.height / 2;
        x2 = toRect.left - svgRect.left - 14; /* Tăng từ 5 lên 14 */
        y2 = toRect.top - svgRect.top + toRect.height / 2;
      }

      svgContent += `<line class="animated-arrow" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#C586C0" stroke-width="2.5" marker-end="url(#arrowhead)"/>`;
    });

    // Ghi DOM 1 lần duy nhất để tối ưu hiệu năng
    svg.innerHTML = svgContent;
  }
}
