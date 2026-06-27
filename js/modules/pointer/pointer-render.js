// File: js/pointer/pointer-render.js

// Từ khóa "extends BaseRenderer" giúp class này sở hữu toàn bộ
// các hàm renderCode, renderExplanation, updateUI từ class Cha
class PointerRenderer extends BaseRenderer {
  // Chúng ta chỉ cần Ghi đè (Override) duy nhất hàm vẽ giao diện vùng nhớ này
  // vì mỗi cấu trúc dữ liệu (Pointer, Tree, Linked List) sẽ có cách vẽ khác nhau
  renderVisualization(memoryState, hasHeap) {
    let stackHtml = "";
    let heapHtml = "";

    // Gom các biến thường vào Stack
    memoryState.variables.forEach((v) => {
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

    // Gom các con trỏ vào Stack
    memoryState.pointers.forEach((p) => {
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

    // Gom vùng nhớ động vào Heap
    memoryState.heap.forEach((cell) => {
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

    const heap = document.getElementById("heap-content");
    const stack = document.getElementById("stack-content");
    if (stack) {
      const totalRows = Math.max(
        1,
        ...memoryState.variables.map((v) => v.row || 1),
        ...memoryState.pointers.map((p) => p.row || 1),
      );
      stack.style.gridTemplateRows = `repeat(${totalRows}, 116px)`;
    }
    if (heap) {
      const heapRows = Math.max(
        1,
        ...memoryState.heap.map((cell) => cell.row || 1),
      );
      heap.style.gridTemplateRows = `repeat(${heapRows},116px)`;
    }

    // Dùng setTimeout(50ms) để chắc chắn 100% các khối hộp đã đứng im
    // trên màn hình trước khi tính toán toạ độ vẽ mũi tên
    setTimeout(() => {
      ArrowRenderer.draw(memoryState);
    }, 50);
  }
}
