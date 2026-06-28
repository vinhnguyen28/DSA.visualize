// File: js/linkedlist/singly-linked-list-render.js

class SinglyListRenderer extends BaseRenderer {
  renderVisualization(memoryState, hasHeap = true) {
    let stackHtml = "";
    let heapHtml = "";

    // ==========================================
    // 1. RENDER POINTERS (VÙNG NHỚ STACK)
    // ==========================================
    if (memoryState.pointers) {
      memoryState.pointers.forEach((p) => {
        const updateClass = p.isUpdated ? "memory-updated" : "";
        const focusClass = p.isFocused ? "memory-focused" : "";

        let valClass = "";
        if (p.value === "???") valClass = "val-garbage";
        else if (p.value === "NULL" || p.value === "nullptr")
          valClass = "val-null";

        stackHtml += `
          <div 
            class="memory-block memory-ptr ${updateClass} ${focusClass}" 
            id="ptr-${p.name}"
            title="Pointer: ${p.name}&#10;Type: Node*&#10;Address: ${p.address}&#10;Points to: ${p.pointsTo || "None"}"
            style="grid-row:${p.row}; grid-column:${p.col};"
          >
              <div class="ptr-type">Node* ${p.name}</div>
              <div class="ptr-value ${valClass}">${p.value}</div>
              <div class="memory-address">Addr: ${p.address}</div>
          </div>
        `;
      });
    }

    // ==========================================
    // 2. RENDER NODES (VÙNG NHỚ HEAP)
    // ==========================================
    if (memoryState.nodes) {
      memoryState.nodes.forEach((n) => {
        const updateClass = n.isUpdated ? "memory-updated" : "";
        const focusClass = n.isFocused ? "memory-focused" : "";

        let nextClass =
          n.nextValue === "NULL" || n.nextValue === "nullptr" ? "val-null" : "";

        heapHtml += `
          <div 
            class="memory-block memory-node heap-block ${updateClass} ${focusClass}" 
            id="heap-${n.id}" 
            title="Dynamic Node (Heap)&#10;Address: ${n.address}"
            style="grid-row:${n.row}; grid-column:${n.col};"
          >
              <div class="heap-type">struct Node</div>
              
              <div class="node-compartments">
                  <div class="node-data">
                      <div class="node-label">data</div>
                      <div class="var-value">${n.data}</div>
                  </div>
                  <div class="node-next" id="ptr-${n.id}-next">
                      <div class="node-label">next</div>
                      <div class="var-value ${nextClass}">${n.nextValue}</div>
                  </div>
              </div>

              <div class="node-address">Addr: ${n.address}</div>
          </div>
        `;
      });
    }

    // ==========================================
    // 3. RÁP HTML VÀO CONTAINER (DOM DIFFING - CHỐNG NHÁY)
    // ==========================================
    let arrowLayer = document.getElementById("arrow-layer");
    if (!arrowLayer) {
      // ĐƯA <svg> VÀO TRONG <div class="memory-layout">
      let layoutHtml = `
          <div class="memory-layout">
              <svg id="arrow-layer">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
                      <polygon points="0 1, 10 5, 0 9" fill="#C586C0"/>
                  </marker>
                  <marker id="arrowhead-green" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto">
                    <polygon points="0 1, 10 5, 0 9" fill="#4CAF50"/>
                  </marker>
                </defs>
              </svg>

              <div class="stack-area">
                  <div class="memory-title">STACK MEMORY (Pointers)</div>
                  <div id="stack-content" class="memory-container"></div>
              </div>
              <div class="heap-area" style="flex: 2;"> 
                  <div class="memory-title">HEAP MEMORY (Nodes)</div>
                  <div id="heap-content" class="memory-container"></div>
              </div>
          </div>
      `;
      this.vizContainer.innerHTML = layoutHtml;
    }

    // Chỉ thay lõi, giữ nguyên SVG mũi tên
    const stack = document.getElementById("stack-content");
    const heap = document.getElementById("heap-content");
    stack.innerHTML = stackHtml;
    heap.innerHTML = heapHtml;

    // Cấu hình Grid tự động
    if (stack && memoryState.pointers && memoryState.pointers.length > 0) {
      const totalRows = Math.max(
        1,
        ...memoryState.pointers.map((p) => p.row || 1),
      );
      const totalCols = Math.max(
        1,
        ...memoryState.pointers.map((p) => p.col || 1),
      );
      stack.style.gridTemplateRows = `repeat(${totalRows}, 130px)`;
      stack.style.gridTemplateColumns = `repeat(${totalCols}, 145px)`;
    }

    if (heap && memoryState.nodes && memoryState.nodes.length > 0) {
      const heapRows = Math.max(1, ...memoryState.nodes.map((n) => n.row || 1));
      const heapCols = Math.max(1, ...memoryState.nodes.map((n) => n.col || 1));
      heap.style.gridTemplateRows = `repeat(${heapRows}, 160px)`;
      heap.style.gridTemplateColumns = `repeat(${heapCols}, 170px)`;
    }

    // ==========================================
    // 4. KÍCH HOẠT VẼ MŨI TÊN (Đã giảm độ trễ xuống 50ms)
    // ==========================================
    setTimeout(() => {
      if (typeof ArrowRenderer !== "undefined") {
        ArrowRenderer.draw(memoryState);
      }
      this.drawNodeToNodeArrows(memoryState);
    }, 50);
  }

  // ==========================================
  // HÀM BỔ TRỢ: VẼ MŨI TÊN NODE -> NODE (SMART ROUTING)
  // ==========================================
  drawNodeToNodeArrows(memoryState) {
    const svg = document.getElementById("arrow-layer");
    if (!svg || !memoryState.nodes) return;

    const activeArrowIds = new Set();

    memoryState.nodes.forEach((node) => {
      if (!node.pointsTo || node.pointsTo === "") return;

      const fromEl = document.getElementById(`ptr-${node.id}-next`);
      const toEl = document.getElementById(`heap-${node.pointsTo}`);

      // Chỉ cần 1 dòng gọi Core!
      ArrowRenderer.drawSmartConnection(
        fromEl,
        toEl,
        `arrow-heap-${node.id}-to-${node.pointsTo}`,
        activeArrowIds,
        { startAnchor: "right", color: "#4CAF50" },
      );
    });

    // Dọn rác
    svg.querySelectorAll(".heap-arrow").forEach((arrow) => {
      if (!activeArrowIds.has(arrow.id)) arrow.remove();
    });
  }
}
