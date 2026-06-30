// File: js/pointer/pointer-render.js

class PointerRenderer extends BaseRenderer {
  renderVisualization(memoryState, hasHeap) {
    let stackHtml = "";
    let heapHtml = "";

    const variables = memoryState.variables || [];
    const pointers = memoryState.pointers || [];
    const heap = memoryState.heap || [];

    // ==========================================
    // 1. Gom các biến thường vào Stack
    // ==========================================
    variables.forEach((v) => {
      const updateClass = v.isUpdated ? "memory-updated" : "";
      const valClass = v.value === "???" ? "val-garbage" : "";
      const animStyle = v.isUpdated
        ? ""
        : "animation: popIn var(--transition-normal) forwards;";

      stackHtml += `
        <div
          class="memory-block memory-var ${updateClass}"
          id="var-${v.name}"
          title="Variable: ${v.name}&#10;Type: ${v.type}&#10;Address: ${v.address}"
          style="grid-row:${v.row}; grid-column:${v.col}; ${animStyle}"
        >
            <div class="var-type">${v.type} ${v.name}</div>
            <div class="var-value ${valClass}">${v.value}</div>
            <div class="memory-address">Addr: ${v.address}</div>
        </div>
      `;
    });

    // ==========================================
    // 2. Gom các con trỏ vào Stack
    // ==========================================
    pointers.forEach((p) => {
      const updateClass = p.isUpdated ? "memory-updated" : "";
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
          style="grid-row:${p.row}; grid-column:${p.col}; ${animStyle}"
        >
            <div class="ptr-type">int* ${p.name}</div>
            <div class="ptr-value ${valClass}">${p.value}</div>
            <div class="memory-address">Addr: ${p.address}</div>
        </div>
      `;
    });

    // ==========================================
    // 3. Gom vùng nhớ động vào Heap
    // ==========================================
    heap.forEach((cell) => {
      const updateClass = cell.isUpdated ? "memory-updated" : "";
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
          style="grid-row:${cell.row}; grid-column:${cell.col}; ${animStyle}"
        >
            <div class="heap-type">${cell.type || "unknown"}</div>
            <div class="var-value ${valClass}">${cell.value}</div>
            <div class="memory-address">Addr: ${cell.address}</div>
        </div>
      `;
    });

    // ==========================================
    // 4. RÁP HTML VÀO CONTAINER (DOM DIFFING - Chống nháy)
    // ==========================================
    let arrowLayer = document.getElementById("arrow-layer");
    if (!arrowLayer) {
      // Bơm khung sườn 1 lần duy nhất (Có chứa <defs> cho đầu mũi tên tím)
      let layoutHtml = `
          <svg id="arrow-layer">
              <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
                      <polygon points="0 1, 10 5, 0 9" fill="#C586C0"/>
                  </marker>
              </defs>
          </svg>
          <div class="memory-layout">
              <div class="stack-area">
                  <div class="memory-title">STACK MEMORY</div>
                  <div id="stack-content" class="memory-container"></div>
              </div>
              <div class="heap-area">
                  <div class="memory-title">HEAP MEMORY</div>
                  <div id="heap-content" class="memory-container"></div>
              </div>
          </div>
      `;
      this.vizContainer.innerHTML = layoutHtml;
    }

    // Chỉ thay đổi lõi nội dung, giữ nguyên khung SVG
    const stackContent = document.getElementById("stack-content");
    const heapContent = document.getElementById("heap-content");
    stackContent.innerHTML = stackHtml;
    heapContent.innerHTML = heapHtml;

    // Xử lý Layout linh hoạt (Ẩn/Hiện Heap)
    const stackArea = document.querySelector(".stack-area");
    const heapArea = document.querySelector(".heap-area");
    if (hasHeap) {
      heapArea.style.display = "block";
      stackArea.style.flex = "none";
      heapArea.style.flex = "1";
    } else {
      heapArea.style.display = "none";
      stackArea.style.flex = "1";
    }

    // Tính toán lại hệ thống lưới (Grid)
    if (stackContent) {
      let totalRows = 1;
      if (variables.length > 0)
        totalRows = Math.max(totalRows, ...variables.map((v) => v.row || 1));
      if (pointers.length > 0)
        totalRows = Math.max(totalRows, ...pointers.map((p) => p.row || 1));
      stackContent.style.gridTemplateRows = `repeat(${totalRows}, 116px)`;
    }

    if (heapContent && heap.length > 0) {
      const heapRows = Math.max(1, ...heap.map((cell) => cell.row || 1));
      heapContent.style.gridTemplateRows = `repeat(${heapRows}, 116px)`;
    }

    // ==========================================
    // 5. KÍCH HOẠT VẼ MŨI TÊN (Giảm độ trễ)
    // ==========================================
    setTimeout(() => {
      if (typeof ArrowRenderer !== "undefined") {
        ArrowRenderer.draw(memoryState);
      }
    }, 400);
  }
}
