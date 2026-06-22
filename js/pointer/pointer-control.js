// =======================================
// POINTER CONTROL LOGIC
// =======================================

document.addEventListener('DOMContentLoaded', () => {
    // Khởi tạo các module
    const renderer = new PointerRenderer();
    const data = pointerLessonData;

    // Khởi tạo State
    let currentStep = 0;
    const maxSteps = data.steps.length - 1;
    let isPlaying = false;
    let playInterval = null;

    // Các DOM elements điều khiển
    const btnNext = document.getElementById('btn-next');
    const btnPrev = document.getElementById('btn-prev');
    const btnReset = document.getElementById('btn-reset');
    const btnPlayPause = document.getElementById('btn-play-pause');

    // Hàm update chính
    const renderCurrentState = () => {
        renderer.updateUI(data, currentStep);
    };

    // Events
    btnNext.addEventListener('click', () => {
        if (currentStep < maxSteps) {
            currentStep++;
            renderCurrentState();
        }
    });

    btnPrev.addEventListener('click', () => {
        if (currentStep > 0) {
            currentStep--;
            renderCurrentState();
        }
    });

    btnReset.addEventListener('click', () => {
        currentStep = 0;
        if (isPlaying) togglePlay(); // Pause if playing
        renderCurrentState();
    });

    const togglePlay = () => {
        isPlaying = !isPlaying;
        if (isPlaying) {
            btnPlayPause.textContent = "Pause";
            btnPlayPause.classList.remove('btn-primary');
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
            btnPlayPause.classList.add('btn-primary');
            btnPlayPause.style.backgroundColor = "";
            clearInterval(playInterval);
        }
    };
    
    // Lắng nghe sự kiện thay đổi kích thước cửa sổ để vẽ lại mũi tên
    window.addEventListener('resize', () => {
        renderCurrentState();
    });

    btnPlayPause.addEventListener('click', togglePlay);

    // Initial render
    renderCurrentState();
});