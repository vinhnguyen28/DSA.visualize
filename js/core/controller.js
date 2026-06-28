// File: js/core/controller.js

class VisualizerController {
  constructor(renderer) {
    this.renderer = renderer;
    this.currentLesson = null;
    this.currentStep = 0;
    this.maxSteps = 0;
    this.isPlaying = false;
    this.playInterval = null;
    this.speed = 1500;

    this.btnNext = document.getElementById("btn-next");
    this.btnPrev = document.getElementById("btn-prev");
    this.btnReset = document.getElementById("btn-reset");
    this.btnPlayPause = document.getElementById("btn-play-pause");
    this.stepIndicator = document.getElementById("step-indicator");

    this.bindEvents();
  }

  loadLesson(lessonData) {
    if (this.isPlaying) this.togglePlay();

    this.currentLesson = lessonData;
    this.currentStep = 0;

    // Nếu bị khóa hoặc chưa có data -> maxStep = 0
    if (
      lessonData.isLocked ||
      !lessonData.steps ||
      lessonData.steps.length === 0
    ) {
      this.maxSteps = 0;
    } else {
      this.maxSteps = lessonData.steps.length - 1;
    }

    const vizContainer = document.getElementById("viz-container");
    if (vizContainer) vizContainer.style.opacity = "0";

    setTimeout(() => {
      this.renderCurrentState();
      if (vizContainer) vizContainer.style.opacity = "1";
    }, 200);
  }

  renderCurrentState() {
    if (!this.currentLesson) return;

    this.renderer.updateUI(this.currentLesson, this.currentStep);

    // Cập nhật thanh tiến độ
    if (this.stepIndicator) {
      if (this.currentLesson.isLocked) {
        this.stepIndicator.textContent = "LOCKED";
      } else {
        this.stepIndicator.textContent = `${this.currentStep + 1} / ${this.maxSteps + 1}`;
      }
    }
  }

  nextStep() {
    // Chặn không cho Next nếu bài bị khóa
    if (this.currentLesson && this.currentLesson.isLocked) return;

    if (this.currentStep < this.maxSteps) {
      this.currentStep++;
      this.renderCurrentState();
    } else if (this.isPlaying) {
      this.togglePlay();
    }
  }

  prevStep() {
    // Chặn không cho Prev nếu bài bị khóa
    if (this.currentLesson && this.currentLesson.isLocked) return;

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
    // Chặn không cho Auto Play nếu bài bị khóa
    if (this.currentLesson && this.currentLesson.isLocked) return;

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

  bindEvents() {
    if (this.btnNext)
      this.btnNext.addEventListener("click", () => this.nextStep());
    if (this.btnPrev)
      this.btnPrev.addEventListener("click", () => this.prevStep());
    if (this.btnReset)
      this.btnReset.addEventListener("click", () => this.reset());
    if (this.btnPlayPause)
      this.btnPlayPause.addEventListener("click", () => this.togglePlay());

    document.addEventListener("keydown", (e) => {
      if (this.isPlaying) return;
      if (e.key === "ArrowRight") this.nextStep();
      else if (e.key === "ArrowLeft") this.prevStep();
    });

    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.renderCurrentState();
      }, 150);
    });
  }
}
