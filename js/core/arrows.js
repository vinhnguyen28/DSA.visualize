// File: js/core/arrows.js
class ArrowRenderer {
  static draw(memoryState) {
    const svg = document.getElementById("arrow-layer");
    if (!svg) return;

    const svgRect = svg.getBoundingClientRect();
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

      // Xử lý mũi tên cấp 2
      if (Math.abs(fromRect.left - toRect.left) < 10) {
        x1 = fromRect.right - svgRect.left;
        y1 = fromRect.top - svgRect.top + fromRect.height / 2;
        x2 = toRect.right - svgRect.left;
        y2 = toRect.top - svgRect.top + toRect.height / 2;

        svgContent += `
        <path class="animated-arrow" 
              d="M ${x1} ${y1} C ${x1 + 75} ${y1}, ${x2 + 75} ${y2}, ${x2 + 25} ${y2} L ${x2 + 14} ${y2}" 
              fill="transparent" stroke="#C586C0" stroke-width="2.5" marker-end="url(#arrowhead)"/>`;
        return;
      }

      // TRẢ LẠI KHOẢNG CÁCH 5PX ĐỂ MŨI TÊN CHẠM SÁT HỘP
      if (fromRect.bottom <= toRect.top) {
        x1 = fromRect.left - svgRect.left + fromRect.width / 2;
        y1 = fromRect.bottom - svgRect.top;
        x2 = toRect.left - svgRect.left + toRect.width / 2;
        y2 = toRect.top - svgRect.top - 5;
      } else if (fromRect.top >= toRect.bottom) {
        x1 = fromRect.left - svgRect.left + fromRect.width / 2;
        y1 = fromRect.top - svgRect.top;
        x2 = toRect.left - svgRect.left + toRect.width / 2;
        y2 = toRect.bottom - svgRect.top + 5;
      } else if (fromRect.left > toRect.left) {
        x1 = fromRect.left - svgRect.left;
        y1 = fromRect.top - svgRect.top + fromRect.height / 2;
        x2 = toRect.right - svgRect.left + 5;
        y2 = toRect.top - svgRect.top + toRect.height / 2;
      } else {
        x1 = fromRect.right - svgRect.left;
        y1 = fromRect.top - svgRect.top + fromRect.height / 2;
        x2 = toRect.left - svgRect.left - 5;
        y2 = toRect.top - svgRect.top + toRect.height / 2;
      }

      svgContent += `<line class="animated-arrow" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#C586C0" stroke-width="2.5" marker-end="url(#arrowhead)"/>`;
    });

    // 1. Nhúng nội dung vào SVG
    svg.innerHTML = svgContent;

    // 2. ÉP TRÌNH DUYỆT REFLOW ĐỂ KÍCH HOẠT LẠI ANIMATION
    svg.style.display = "none";
    void svg.offsetWidth; // Dòng này ép trình duyệt phải tính toán lại khung hình
    svg.style.display = "block";
  }
}
