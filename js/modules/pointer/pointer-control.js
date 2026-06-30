// File: js/pointer/pointer-control.js
//
//
document.addEventListener("DOMContentLoaded", () => {
  // 1. Khởi tạo Renderer và ráp nó vào Controller
  const renderer = new PointerRenderer();
  const controller = new VisualizerController(renderer);

  // 2. Nạp bài học đầu tiên mặc định
  controller.loadLesson(lessons.pointer);

  // 3. Xử lý UI Sidebar Menu (sổ trang)
  document.querySelectorAll(".menu-header").forEach((header) => {
    header.addEventListener("click", () => {
      const menuItem = header.closest(".menu-item");
      const arrow = header.querySelector(".arrow");
      menuItem.classList.toggle("open");
      arrow.classList.toggle("rotate");
    });
  });

  // 4. Mapping (Kết nối nút bấm sidebar với dữ liệu bài học)
  const lessonMapping = {
    "btn-pointer": lessons.pointer,
    "btn-AddressOperator": lessons.AddressOperator,
    "btn-Dereference": lessons.Dereference,
    "btn-PointerAssignment": lessons.PointerAssignment,
    "btn-NullPointer": lessons.NullPointer,
    "btn-PointertoPointer": lessons.PointertoPointer,
    "btn-new": lessons.new,
    "btn-delete": lessons.delete,
    "btn-MemoryLeak": lessons.MemoryLeak,
    "btn-DanglingPointer": lessons.DanglingPointer,
  };

  // sử lí xoá và thêm active vào nav-bar
  function setActiveButton(button) {
    document.querySelectorAll(".lesson-btn").forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
  }

  Object.keys(lessonMapping).forEach((btnId) => {
    const btnElement = document.getElementById(btnId);
    if (btnElement) {
      btnElement.addEventListener("click", (e) => {
        e.preventDefault(); // Ngăn chặn trang bị cuộn hoặc nhảy khi click thẻ <a>
        setActiveButton(btnElement);

        // Gọi thẳng controller để nạp bài mới, nó sẽ tự lo việc dừng, reset step, update UI...
        controller.loadLesson(lessonMapping[btnId]);
      });
    }
  });
});
