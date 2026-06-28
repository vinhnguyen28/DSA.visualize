// File: js/linkedlist/singly-linked-list-control.js

document.addEventListener("DOMContentLoaded", () => {
  // 1. Khởi tạo Renderer của Linked List và ráp vào Controller chung
  // Chú ý: SinglyListRenderer sẽ được viết ở file render,
  // kế thừa từ BaseRenderer giống như PointerRenderer
  const renderer = new SinglyListRenderer();
  const controller = new VisualizerController(renderer);

  // 2. Nạp bài học đầu tiên mặc định
  // Chú ý: listLessons sẽ được định nghĩa ở file data
  if (listLessons && listLessons.createNode) {
    controller.loadLesson(listLessons.createNode);
  }

  // 3. Xử lý UI Sidebar Menu (sổ trang) - Logic dùng chung
  document.querySelectorAll(".menu-header").forEach((header) => {
    header.addEventListener("click", () => {
      const menuItem = header.closest(".menu-item");
      const arrow = header.querySelector(".arrow");
      menuItem.classList.toggle("open");
      arrow.classList.toggle("rotate");
    });
  });

  // 4. Mapping (Kết nối nút bấm sidebar với dữ liệu bài học Linked List)
  // Các ID này (ví dụ: btn-create-node) phải khớp với id của thẻ <a> hoặc <button> trên file HTML
  const lessonMapping = {
    // 1. List Creation
    "btn-create-node": listLessons.createNode,
    "btn-link-nodes": listLessons.linkNodes,
    "btn-create-list": listLessons.createList,
    // 2. List Traversal
    "btn-traverse": listLessons.traverse,
    "btn-search": listLessons.search,
    "btn-count": listLessons.count,
    // 3. List Insertion
    "btn-insert-head": listLessons.insertHead,
    "btn-insert-Tail": listLessons.insertTail,
    "btn-insert-middle": listLessons.insertMiddle,
    // 4. List Deletion
    "btn-delete-head": listLessons.deleteHead,
    "btn-delete-tail": listLessons.deleteTail,
    "btn-delete-Middle": listLessons.deleteMiddle,
    // 5. Advanced Operations
    "btn-reverse-list": listLessons.reverseList,
    "btn-clear-list": listLessons.clearList,
  };

  function setActiveButton(button) {
    document.querySelectorAll(".lesson-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  }

  // 5. Gắn sự kiện click cho các nút
  Object.keys(lessonMapping).forEach((btnId) => {
    const btnElement = document.getElementById(btnId);
    if (btnElement) {
      btnElement.addEventListener("click", (e) => {
        e.preventDefault();
        setActiveButton(btnElement);
        // Chuyển bài học
        controller.loadLesson(lessonMapping[btnId]);
      });
    }
  });
});
