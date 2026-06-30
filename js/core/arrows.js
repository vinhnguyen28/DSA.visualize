// File: js/core/arrows.js
//
//
class ArrowRenderer {
  // * ========================================================
  // * KHỞI TẠO MARKER & GRADIENT (SVG Defs)
  // * ========================================================
  static initDefs(svg) {
    if (document.getElementById("dsa-svg-defs")) return;

    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.id = "dsa-svg-defs";

    defs.innerHTML = `
      <linearGradient id="grad-purple" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#C586C0" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#C586C0" stop-opacity="1"/>
      </linearGradient>

      <marker id="chevron-purple" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
        <path d="M 2 2 L 8 5 L 2 8" fill="none" stroke="#C586C0" stroke-width="2.5" stroke-linecap="round"/>
      </marker>
      <marker id="dot-src-purple" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <circle cx="4" cy="4" r="2.5" fill="#C586C0" />
      </marker>

      <marker id="chevron-green" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
        <path d="M 2 2 L 8 5 L 2 8" fill="none" stroke="#007acc" stroke-width="2.5" stroke-linecap="round"/>
      </marker>
      <marker id="dot-src-green" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <circle cx="4" cy="4" r="2.5" fill="#007acc" />
      </marker>

      <marker id="chevron-red" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
        <path d="M 2 2 L 8 5 L 2 8" fill="none" stroke="#f44336" stroke-width="2.5" stroke-linecap="round"/>
      </marker>
      <marker id="dot-src-red" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
        <circle cx="4" cy="4" r="2.5" fill="#f44336" />
      </marker>
    `;
    svg.prepend(defs);
  }

  // * ========================================================
  // * THUẬT TOÁN HYBRID RECT (Sửa lỗi đâm xuyên viền)
  // * Lấy lề ngoài cùng của Box, nhưng giữ vị trí của ô Next
  // * ========================================================
  static getHybridRect(el) {
    const inner = el.getBoundingClientRect();
    // Tìm thẻ bọc ngoài cùng (class .memory-block)
    const outerEl = el.closest(".memory-block") || el;
    const outer = outerEl.getBoundingClientRect();

    return {
      top: inner.top,
      bottom: outer.bottom, // Ép lấy viền dưới cùng của Box
      left: outer.left, // Ép lấy viền trái ngoài cùng
      right: outer.right, // Ép lấy viền phải ngoài cùng
      width: outer.width,
      height: inner.height, // Giữ chiều cao của ô Next để canh giữa mượt mà
    };
  }

  // * ========================================================
  // * ENGINE TOÁN HỌC DÙNG CHUNG (Unified Smart Routing)
  // * ========================================================
  static computeSmartPath(
    fromRect,
    toRect,
    svgRect,
    startOffset = 0,
    endOffset = 0,
  ) {
    const dx = toRect.left - fromRect.right;
    const dy = toRect.top - fromRect.top;

    const dist = Math.hypot(
      toRect.left - fromRect.right,
      toRect.top - fromRect.top,
    );
    const dynamicCurve = Math.min(Math.max(dist * 0.35, 30), 120);

    let startX, startY, endX, endY, cp1x, cp1y, cp2x, cp2y;
    const offsetArrow = 8;

    const isBackEdge = toRect.right < fromRect.left;
    const isSameRow = Math.abs(dy) < 40;

    if (isBackEdge) {
      // TRỎ NGƯỢC: Xuất phát từ đáy Box ngoài cùng
      startX =
        fromRect.left - svgRect.left + fromRect.width * 0.25 + startOffset;
      startY = fromRect.bottom - svgRect.top;
      endX = toRect.right - svgRect.left - toRect.width * 0.25 + endOffset;
      endY = toRect.bottom - svgRect.top + offsetArrow;

      cp1x = startX;
      cp1y = startY + dynamicCurve;
      cp2x = endX;
      cp2y = endY + dynamicCurve;
    } else if (isSameRow) {
      // TRỎ NGANG
      startX = fromRect.right - svgRect.left;
      startY = fromRect.top - svgRect.top + fromRect.height / 2 + startOffset;
      endX = toRect.left - svgRect.left - offsetArrow;
      endY = toRect.top - svgRect.top + toRect.height / 2 + endOffset;

      cp1x = startX + dynamicCurve;
      cp1y = startY;
      cp2x = endX - dynamicCurve;
      cp2y = endY;
    } else if (dy > 0) {
      // TRỎ XUỐNG DƯỚI
      startX =
        fromRect.right - svgRect.left - fromRect.width * 0.2 + startOffset;
      startY = fromRect.bottom - svgRect.top;
      endX = toRect.left - svgRect.left + toRect.width / 2 + endOffset;
      endY = toRect.top - svgRect.top - offsetArrow;

      cp1x = startX;
      cp1y = startY + dynamicCurve;
      cp2x = endX;
      cp2y = endY - dynamicCurve;
    } else {
      // TRỎ LÊN TRÊN
      startX = fromRect.right - svgRect.left + startOffset;
      startY = fromRect.top - svgRect.top + fromRect.height / 2;
      endX = toRect.left - svgRect.left + toRect.width / 2 + endOffset;
      endY = toRect.bottom - svgRect.top + offsetArrow;

      cp1x = startX + dynamicCurve;
      cp1y = startY;
      cp2x = endX;
      cp2y = endY + dynamicCurve;
    }

    return `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
  }

  // * ========================================================
  // * HELPER: VẼ MŨI TÊN (Có Animation)
  // * ========================================================
  static applyPathToDOM(svg, arrowId, pathD, options) {
    let pathEl = document.getElementById(arrowId);
    let isNewlyCreated = false;

    if (!pathEl) {
      isNewlyCreated = true;
      pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathEl.setAttribute("id", arrowId);
      pathEl.setAttribute("fill", "transparent");
      pathEl.setAttribute("stroke-width", "2.5");
      svg.appendChild(pathEl);
    }

    pathEl.setAttribute("stroke", options.stroke || "#4CAF50");
    pathEl.setAttribute("marker-start", options.markerStart);
    pathEl.setAttribute("marker-end", options.markerEnd);
    pathEl.setAttribute("class", `animated-arrow ${options.extraClass || ""}`);
    pathEl.setAttribute("d", pathD);

    if (isNewlyCreated) {
      const len = pathEl.getTotalLength() || 500;
      pathEl.style.strokeDasharray = len;
      pathEl.style.strokeDashoffset = len;

      requestAnimationFrame(() => {
        pathEl.style.transition = "stroke-dashoffset 0.5s ease-out";
        pathEl.style.strokeDashoffset = "0";
        setTimeout(() => {
          pathEl.style.strokeDasharray = "none";
          pathEl.style.transition =
            "d 0.4s cubic-bezier(0.4, 0, 0.2, 1), stroke 0.3s";
        }, 500);
      });
    }
  }

  // * ========================================================
  // * HÀM CHÍNH 1: VẼ STACK -> HEAP
  // * ========================================================
  static draw(memoryState) {
    const svg = document.getElementById("arrow-layer");
    if (!svg) return;

    this.initDefs(svg);
    const svgRect = svg.getBoundingClientRect();
    const activeArrowIds = new Set();

    const rectCache = new Map();
    const getRect = (el) => {
      // SỬ DỤNG HYBRID RECT Ở ĐÂY
      if (!rectCache.has(el)) rectCache.set(el, this.getHybridRect(el));
      return rectCache.get(el);
    };

    const targetMap = {};
    if (memoryState.pointers) {
      memoryState.pointers.forEach((pointer) => {
        if (pointer.value === "???" || pointer.pointsTo === "") return;
        if (!targetMap[pointer.pointsTo]) targetMap[pointer.pointsTo] = [];
        targetMap[pointer.pointsTo].push(pointer);
      });
    }

    Object.keys(targetMap).forEach((targetId) => {
      const pointers = targetMap[targetId];
      const totalPointers = pointers.length;

      pointers.forEach((pointer, index) => {
        const fromEl = document.getElementById(`ptr-${pointer.name}`);
        let toEl =
          document.getElementById(`var-${pointer.pointsTo}`) ||
          document.getElementById(`ptr-${pointer.pointsTo}`) ||
          document.getElementById(`heap-${pointer.pointsTo}`);

        let isDangling = false;
        if (!toEl && pointer.pointsTo === "deleted_memory") {
          isDangling = true;
          toEl = {
            getBoundingClientRect: () => ({
              top: svgRect.bottom + 100,
              left: fromEl.getBoundingClientRect().left,
              right: fromEl.getBoundingClientRect().right,
              width: 50,
              height: 50,
            }),
          };
        }

        if (!fromEl || !toEl) return;

        const fromRect = getRect(fromEl);
        const toRect =
          toEl instanceof Element
            ? getRect(toEl)
            : toEl.getBoundingClientRect();

        const spacing = 24;
        const endOffset = (index - (totalPointers - 1) / 2) * spacing;
        const startOffset = (index - (totalPointers - 1) / 2) * 8;

        const pathD = this.computeSmartPath(
          fromRect,
          toRect,
          svgRect,
          startOffset,
          endOffset,
        );
        const arrowId = `arrow-stack-${pointer.name}-to-${pointer.pointsTo}`;

        activeArrowIds.add(arrowId);

        this.applyPathToDOM(svg, arrowId, pathD, {
          stroke: isDangling ? "#f44336" : "url(#grad-purple)",
          markerStart: isDangling
            ? "url(#dot-src-red)"
            : "url(#dot-src-purple)",
          markerEnd: isDangling ? "url(#chevron-red)" : "url(#chevron-purple)",
          extraClass: isDangling ? "arrow-dangling" : "stack-arrow",
        });
      });
    });

    svg.querySelectorAll(".stack-arrow, .arrow-dangling").forEach((arrow) => {
      if (!activeArrowIds.has(arrow.id)) arrow.remove();
    });
  }

  // * ========================================================
  // * HÀM CHÍNH 2: VẼ NODE -> NODE
  // * ========================================================
  static drawSmartConnection(
    fromEl,
    toEl,
    arrowId,
    activeArrowIds,
    options = {},
  ) {
    const svg = document.getElementById("arrow-layer");
    if (!svg || !fromEl || !toEl) return;

    this.initDefs(svg);
    activeArrowIds.add(arrowId);

    const svgRect = svg.getBoundingClientRect();

    // SỬ DỤNG HYBRID RECT ĐỂ SỬA LỖI ĐÂM XUYÊN VIỀN
    const fromRect = this.getHybridRect(fromEl);
    const toRect = this.getHybridRect(toEl);

    const pathD = this.computeSmartPath(fromRect, toRect, svgRect, 0, 0);

    this.applyPathToDOM(svg, arrowId, pathD, {
      stroke: options.color || "#4CAF50",
      markerStart: options.markerStart || "url(#dot-src-green)",
      markerEnd: options.markerEnd || "url(#chevron-green)",
      extraClass: "heap-arrow",
    });
  }
}
