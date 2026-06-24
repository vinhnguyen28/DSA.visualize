// =======================================
// POINTER CONTROL LOGIC
// =======================================

document.addEventListener("DOMContentLoaded", () => {
  // Khởi tạo các module
  const renderer = new PointerRenderer();
  let currentLesson = lessons.pointer;

  document.querySelectorAll(".menu-header").forEach((header) => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("open");
    });
  });
  // icon sổ trang 
  const menuItem = document.querySelector(".menu-item");
  const arrow = document.querySelector(".arrow");
  const submenu = document.querySelector(".child-menu");

  menuItem.addEventListener("click", () => {
    submenu.classList.toggle("active");
    arrow.classList.toggle("rotate");
});
  // const btnbtnppp = document.getElementById("something-wrong");
  // btnbtnppp.addEventListener("click", () => {
  //   return `overflow: hidden;`;
  // });

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
  const btnPointer = document.getElementById("btn-pointer");
  const btnDynamic = document.getElementById("btn-dynamic");

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
      btnPlayPause.style.backgroundColor = "#D16969";

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
  window.addEventListener("resize", () => {
    renderCurrentState();
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
  btnPointer.addEventListener("click", () => {
    if (isPlaying) {
      togglePlay();
    }

    btnPointer.classList.add("active");
    btnDynamic.classList.remove("active");

    currentLesson = lessons.pointer;

    currentStep = 0;

    maxSteps = currentLesson.steps.length - 1;

    renderCurrentState();
  });

  btnDynamic.addEventListener("click", () => {
    if (isPlaying) {
      togglePlay();
    }

    btnDynamic.classList.add("active");
    btnPointer.classList.remove("active");

    currentLesson = lessons.dynamicMemory;

    currentStep = 0;

    maxSteps = currentLesson.steps.length - 1;

    renderCurrentState();
  });

  // Initial render
  renderCurrentState();
});
