// File: js/core/arrows.js
class ArrowRenderer {
  // ========================================================
  // 1. VẼ MŨI TÊN TỪ STACK -> HEAP (Mũi tên màu tím)
  // ========================================================
  static draw(memoryState) {
    const svg = document.getElementById("arrow-layer");
    if (!svg) return;

    const svgRect = svg.getBoundingClientRect();
    const activeArrowIds = new Set(); // Bộ nhớ đánh dấu để chống nháy

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
        const from = document.getElementById(`ptr-${pointer.name}`);
        let to =
          document.getElementById(`var-${pointer.pointsTo}`) ||
          document.getElementById(`ptr-${pointer.pointsTo}`) ||
          document.getElementById(`heap-${pointer.pointsTo}`);

        if (!from || !to) return;

        const fromRect = from.getBoundingClientRect();
        const toRect = to.getBoundingClientRect();

        let x1, y1, x2, y2, cp1x, cp1y, cp2x, cp2y;
        const offsetArrow = 8;
        const spacing = 24;
        // Tính toán để tản các mũi tên ra nếu có nhiều con trỏ cùng trỏ vào 1 Node
        const offsetPosition = (index - (totalPointers - 1) / 2) * spacing;

        if (fromRect.bottom <= toRect.top) {
          x1 = fromRect.left - svgRect.left + fromRect.width / 2;
          y1 = fromRect.bottom - svgRect.top;
          x2 = toRect.left - svgRect.left + toRect.width / 2 + offsetPosition;
          y2 = toRect.top - svgRect.top - offsetArrow;
          cp1x = x1;
          cp1y = y1 + 45;
          cp2x = x2;
          cp2y = y2 - 45;
        } else if (fromRect.top >= toRect.bottom) {
          x1 = fromRect.left - svgRect.left + fromRect.width / 2;
          y1 = fromRect.top - svgRect.top;
          x2 = toRect.left - svgRect.left + toRect.width / 2 + offsetPosition;
          y2 = toRect.bottom - svgRect.top + offsetArrow;
          cp1x = x1;
          cp1y = y1 - 45;
          cp2x = x2;
          cp2y = y2 + 45;
        } else if (fromRect.left > toRect.left) {
          x1 = fromRect.left - svgRect.left;
          y1 = fromRect.top - svgRect.top + fromRect.height / 2;
          x2 = toRect.right - svgRect.left + offsetArrow;
          y2 = toRect.top - svgRect.top + toRect.height / 2 + offsetPosition;
          cp1x = x1 - 45;
          cp1y = y1;
          cp2x = x2 + 45;
          cp2y = y2;
        } else {
          x1 = fromRect.right - svgRect.left;
          y1 = fromRect.top - svgRect.top + fromRect.height / 2;
          x2 = toRect.left - svgRect.left - offsetArrow;
          y2 = toRect.top - svgRect.top + toRect.height / 2 + offsetPosition;
          cp1x = x1 + 45;
          cp1y = y1;
          cp2x = x2 - 45;
          cp2y = y2;
        }

        // DOM DIFFING: Quản lý ID mũi tên tím
        const arrowId = `arrow-stack-${pointer.name}-to-${pointer.pointsTo}`;
        activeArrowIds.add(arrowId);
        const pathD = `M ${x1} ${y1} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x2} ${y2}`;

        let pathEl = document.getElementById(arrowId);

        if (!pathEl) {
          pathEl = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "path",
          );
          pathEl.setAttribute("id", arrowId);
          pathEl.setAttribute("fill", "transparent");
          pathEl.setAttribute("stroke", "#C586C0"); // Màu tím
          pathEl.setAttribute("stroke-width", "2.5");
          pathEl.setAttribute("marker-end", "url(#arrowhead)");
          pathEl.setAttribute("class", "animated-arrow stack-arrow");
          svg.appendChild(pathEl);
        }

        pathEl.setAttribute("d", pathD);
      });
    });

    // Dọn dẹp các mũi tên tím cũ (không còn sử dụng ở Step hiện tại)
    const currentStackArrows = svg.querySelectorAll(".stack-arrow");
    currentStackArrows.forEach((arrow) => {
      if (!activeArrowIds.has(arrow.id)) {
        arrow.remove();
      }
    });
  }

  // ========================================================
  // 2. VẼ MŨI TÊN GIỮA 2 NODE (SMART ROUTING - Dùng cho toàn dự án)
  // ========================================================
  static drawSmartConnection(
    fromEl,
    toEl,
    arrowId,
    activeArrowIds,
    options = {},
  ) {
    const svg = document.getElementById("arrow-layer");
    if (!svg || !fromEl || !toEl) return;

    activeArrowIds.add(arrowId);

    const svgRect = svg.getBoundingClientRect();
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    const color = options.color || "#4CAF50";
    const markerEnd = options.markerEnd || "url(#arrowhead-green)";
    const startAnchor = options.startAnchor || "right";
    const offset = 8;

    let startX, startY;
    let endX, endY, cp1x, cp1y, cp2x, cp2y;

    // --- Xác định điểm xuất phát dựa vào tùy chọn ---
    if (startAnchor === "bottom") {
      startX = fromRect.left - svgRect.left + fromRect.width / 2;
      startY = fromRect.bottom - svgRect.top;
    } else if (startAnchor === "left") {
      startX = fromRect.left - svgRect.left;
      startY = fromRect.top - svgRect.top + fromRect.height / 2;
    } else {
      startX = fromRect.right - svgRect.left;
      startY = fromRect.top - svgRect.top + fromRect.height / 2;
    }

    const dx = toRect.left - fromRect.right;
    const dy = toRect.top - fromRect.top;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);

    // --- Cỗ máy định tuyến (S-Curve, uốn lượn) ---
    if (startAnchor === "bottom") {
      endX = toRect.left - svgRect.left + toRect.width / 2;
      endY = toRect.top - svgRect.top - offset;
      cp1x = startX;
      cp1y = startY + absDy * 0.5;
      cp2x = endX;
      cp2y = endY - absDy * 0.5;
    } else if (startAnchor === "left") {
      endX = toRect.right - svgRect.left + offset;
      endY = toRect.top - svgRect.top + toRect.height / 2;
      const curve = Math.max(40, absDx * 0.5);
      cp1x = startX - curve;
      cp1y = startY;
      cp2x = endX + curve;
      cp2y = endY;
    } else {
      if (dx > 20 && absDy < 40) {
        endX = toRect.left - svgRect.left - offset;
        endY = toRect.top - svgRect.top + toRect.height / 2;
        const curve = Math.max(30, absDx * 0.4);
        cp1x = startX + curve;
        cp1y = startY;
        cp2x = endX - curve;
        cp2y = endY;
      } else if (toRect.right < fromRect.left + 50) {
        endX = toRect.left - svgRect.left - offset;
        endY = toRect.top - svgRect.top + toRect.height / 2;
        const curveX = Math.max(80, absDx * 0.4 + absDy * 0.2);
        cp1x = startX + curveX;
        cp1y = startY;
        cp2x = endX - curveX;
        cp2y = endY;
      } else if (dy > 0) {
        endX = toRect.left - svgRect.left + toRect.width / 2;
        endY = toRect.top - svgRect.top - offset;
        cp1x = startX + Math.max(40, absDx * 0.6);
        cp1y = startY;
        cp2x = endX;
        cp2y = endY - Math.max(40, absDy * 0.5);
      } else {
        endX = toRect.left - svgRect.left + toRect.width / 2;
        endY = toRect.bottom - svgRect.top + offset;
        cp1x = startX + Math.max(40, absDx * 0.6);
        cp1y = startY;
        cp2x = endX;
        cp2y = endY + Math.max(40, absDy * 0.5);
      }
    }

    // --- Cập nhật lên màn hình ---
    const pathD = `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`;
    let pathEl = document.getElementById(arrowId);

    if (!pathEl) {
      pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathEl.setAttribute("id", arrowId);
      pathEl.setAttribute("fill", "transparent");
      pathEl.setAttribute("stroke", color);
      pathEl.setAttribute("stroke-width", "2.5");
      pathEl.setAttribute("marker-end", markerEnd);
      pathEl.setAttribute("class", "animated-arrow heap-arrow");
      svg.appendChild(pathEl);
    }

    pathEl.setAttribute("d", pathD);
  }
}
