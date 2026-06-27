// File: js/core/controller.js

class VisualizerController {
  constructor(renderer) {
    this.renderer = renderer;
    this.currentLesson = null;
    this.currentStep = 0;
    this.maxSteps = 0;
    this.isPlaying = false;
    this.playInterval = null;
    this.speed = 1500; // Tốc độ chạy auto mặc định (1.5s)

    // Lấy các DOM elements ở thanh điều khiển (Control Panel)
    this.btnNext = document.getElementById("btn-next");
    this.btnPrev = document.getElementById("btn-prev");
    this.btnReset = document.getElementById("btn-reset");
    this.btnPlayPause = document.getElementById("btn-play-pause");
    this.stepIndicator = document.getElementById("step-indicator");

    this.bindEvents(); // Gắn các sự kiện click ngay khi khởi tạo
  }

  // Hàm nạp bài học mới
  loadLesson(lessonData) {
    // Nếu đang chạy auto thì dừng lại
    if (this.isPlaying) this.togglePlay();

    this.currentLesson = lessonData;
    this.currentStep = 0;
    this.maxSteps = lessonData.steps.length - 1;

    // Hiệu ứng mờ Panel khi chuyển bài
    const vizContainer = document.getElementById("viz-container");
    if (vizContainer) vizContainer.style.opacity = "0";

    setTimeout(() => {
      this.renderCurrentState();
      if (vizContainer) vizContainer.style.opacity = "1";
    }, 200); // Khớp với transition trong CSS
  }

  // Hàm vẽ trạng thái hiện tại
  renderCurrentState() {
    if (!this.currentLesson) return;

    // Gọi đến BaseRenderer để vẽ giao diện
    this.renderer.updateUI(this.currentLesson, this.currentStep);

    // Cập nhật text số bước tiến độ (VD: 1/5)
    if (this.stepIndicator) {
      this.stepIndicator.textContent = `${this.currentStep + 1} / ${this.maxSteps + 1}`;
    }
  }

  nextStep() {
    if (this.currentStep < this.maxSteps) {
      this.currentStep++;
      this.renderCurrentState();
    } else if (this.isPlaying) {
      this.togglePlay(); // Hết bài thì tự động Pause
    }
  }

  prevStep() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.renderCurrentState();
    }
  }

  reset() {
    if (this.isPlaying) this.togglePlay();
    this.currentStep = 0;
    this.renderCurrentState();
  }

  togglePlay() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.btnPlayPause.textContent = "Pause";
      this.btnPlayPause.classList.remove("btn-primary");
      this.btnPlayPause.style.backgroundColor = "var(--accent-orange)";
      this.btnPlayPause.style.borderColor = "var(--accent-orange)";

      this.playInterval = setInterval(() => {
        this.nextStep();
      }, this.speed);
    } else {
      this.btnPlayPause.textContent = "Play";
      this.btnPlayPause.classList.add("btn-primary");
      this.btnPlayPause.style.backgroundColor = "";
      this.btnPlayPause.style.borderColor = "";
      clearInterval(this.playInterval);
    }
  }

  // Gắn các sự kiện cho nút bấm và bàn phím
  bindEvents() {
    if (this.btnNext)
      this.btnNext.addEventListener("click", () => this.nextStep());
    if (this.btnPrev)
      this.btnPrev.addEventListener("click", () => this.prevStep());
    if (this.btnReset)
      this.btnReset.addEventListener("click", () => this.reset());
    if (this.btnPlayPause)
      this.btnPlayPause.addEventListener("click", () => this.togglePlay());

    // Nhấn phím Mũi tên Trái/Phải để chuyển bước nhanh
    document.addEventListener("keydown", (e) => {
      if (this.isPlaying) return;
      if (e.key === "ArrowRight") this.nextStep();
      else if (e.key === "ArrowLeft") this.prevStep();
    });

    // Lắng nghe resize cửa sổ để vẽ lại mũi tên (Debounce chống giật)
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.renderCurrentState();
      }, 150);
    });
  }
}
