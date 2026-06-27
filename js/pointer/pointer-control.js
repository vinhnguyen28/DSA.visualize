// =======================================
// POINTER CONTROL LOGIC
// =======================================

document.addEventListener("DOMContentLoaded", () => {
  // Khởi tạo các module
  const renderer = new PointerRenderer();
  let currentLesson = lessons.pointer;

  // icon sổ trang
  document.querySelectorAll(".menu-header").forEach((header) => {
    header.addEventListener("click", () => {
      const menuItem = header.closest(".menu-item");
      const arrow = header.querySelector(".arrow");

      menuItem.classList.toggle("open");
      arrow.classList.toggle("rotate");
    });
  });

  // Khởi tạo State
  let currentStep = 0; // Khởi tạo state hiện tại, bắt đầu từ bước 0
  let maxSteps = currentLesson.steps.length - 1; // Cập nhật maxSteps dựa trên bài học hiện tại
  let isPlaying = false; // Trạng thái play/pause
  let playInterval = null; // Biến lưu trữ interval khi đang play

  // Các DOM elements điều khiển
  const btnNext = document.getElementById("btn-next");
  const btnPrev = document.getElementById("btn-prev");
  const btnReset = document.getElementById("btn-reset");
  const btnPlayPause = document.getElementById("btn-play-pause");

  // Nút chuyển bài học
  const btnPointer = document.getElementById("btn-pointer"); // 1.1
  const btnAddressOperator = document.getElementById("btn-AddressOperator"); // 1.2
  const btnDereference = document.getElementById("btn-Dereference"); // 1.3
  const btnPointerAssignment = document.getElementById("btn-PointerAssignment"); // 1.4
  const btnNullPointer = document.getElementById("btn-NullPointer"); // 1.5
  const btnPointertoPointer = document.getElementById("btn-PointertoPointer"); // 1.6

  const btnDynamic = document.getElementById("btn-new"); // 2.1
  const btndelete = document.getElementById("btn-delete"); // 2.2
  const btnMemoryLeak = document.getElementById("btn-MemoryLeak"); //2.3
  const btnDanglingPointer = document.getElementById("btn-DanglingPointer"); //2.4

  /**
   * Cập nhật giao diện dựa trên bước hiện tại và dữ liệu bài học
   * @param {Object} lessonData - Dữ liệu bài học hiện tại
   * @param {number} currentStepIndex - Chỉ số bước hiện tại
   * @returns {void}
   * @description
   * Hàm này sẽ gọi các phương thức render của PointerRenderer để cập nhật giao diện người dùng dựa trên dữ liệu bài học và bước hiện tại.
   * Nó sẽ hiển thị mã nguồn, trạng thái bộ nhớ và giải thích tương ứng với bước hiện tại.
   * Hàm này được gọi mỗi khi người dùng chuyển bước hoặc thay đổi bài học.
   * @example
   * renderCurrentState(lessons.pointer, 2);
   * // Cập nhật giao diện để hiển thị bước thứ 3 của bài học về con trỏ.
   */
  const renderCurrentState = () => {
    renderer.updateUI(currentLesson, currentStep);

    // tiến độ thực hiện
    const stepIndicator = document.getElementById("step-indicator");
    if (stepIndicator) {
      stepIndicator.textContent = `${currentStep + 1} / ${maxSteps + 1}`;
    }
  };

  // Events
  btnNext.addEventListener("click", () => {
    if (currentStep < maxSteps) {
      currentStep++;
      renderCurrentState();
    }
    // updateButtonStates();
  });

  btnPrev.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
      renderCurrentState();
    }
  });

  btnReset.addEventListener("click", () => {
    currentStep = 0;

    // Nếu đang chạy auto thì dừng lại luôn
    if (isPlaying) togglePlay();
    renderCurrentState();
  });

  const togglePlay = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      btnPlayPause.textContent = "Pause";
      btnPlayPause.classList.remove("btn-primary");
      btnPlayPause.style.backgroundColor = "#ff0000";

      playInterval = setInterval(() => {
        if (currentStep < maxSteps) {
          currentStep++;
          renderCurrentState();
        } else {
          togglePlay(); // Auto pause at end
        }
      }, 1500); // 1.5s per step
    } else {
      btnPlayPause.textContent = "Play";
      btnPlayPause.classList.add("btn-primary");
      btnPlayPause.style.backgroundColor = "";
      clearInterval(playInterval);
    }
  };

  // Lắng nghe sự kiện thay đổi kích thước cửa sổ để vẽ lại mũi tên
  // Lắng nghe sự kiện thay đổi kích thước cửa sổ với Debounce (chống spam trigger)
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      renderCurrentState();
    }, 150); // Chỉ render lại sau khi ngừng kéo thả cửa sổ 150ms
  });

  btnPlayPause.addEventListener("click", togglePlay);
  // TODO : Add event listeners for lesson selection buttons (btnPointer, btnDynamic) to switch lessons and reset state accordingly.
  /**
   * Sự kiện chuyển bài học, reset state và render lại
   * Khi chuyển bài học, reset currentStep về 0, cập nhật maxSteps theo bài mới và gọi renderCurrentState() để hiển thị bước đầu tiên của bài học đó.
   * Điều này đảm bảo rằng mỗi khi người dùng chọn một bài học mới,
   * họ sẽ bắt đầu từ bước đầu tiên của bài học đó và giao diện sẽ được cập nhật chính xác theo dữ liệu của bài học mới.
   * Nếu đang ở trạng thái play, sẽ tự động pause để tránh việc tự động chuyển bước khi người dùng đang xem một bài học khác.
   */
  function setActiveButton(button) {
    document.querySelectorAll(".lesson-btn").forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  }
  // nhận sự kiện để chạy
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

  Object.keys(lessonMapping).forEach((btnId) => {
    const btnElement = document.getElementById(btnId);
    if (btnElement) {
      btnElement.addEventListener("click", () => {
        if (isPlaying) togglePlay();
        setActiveButton(btnElement);

        currentLesson = lessonMapping[btnId];
        currentStep = 0;
        maxSteps = currentLesson.steps.length - 1;

        renderCurrentState();
      });
    }
  });

  // Nhấn phím Mũi tên Trái/Phải để chuyển bước nhanh.
  document.addEventListener("keydown", (e) => {
    // Không kích hoạt nếu đang auto-play
    if (isPlaying) return;

    if (e.key === "ArrowRight") {
      btnNext.click();
    } else if (e.key === "ArrowLeft") {
      btnPrev.click();
    }
  });
});
