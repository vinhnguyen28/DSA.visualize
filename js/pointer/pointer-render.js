// =======================================
// POINTER RENDER LOGIC
// =======================================

class PointerRenderer {
    constructor() {
        this.codeContainer = document.getElementById('code-container');
        this.vizContainer = document.getElementById('viz-container');
        this.explainContainer = document.getElementById('explanation-container');
    }

    // Render code panel
    renderCode(codeLines, activeIndex) {

        this.codeContainer.innerHTML = codeLines.map((line, index) => {

            const isActive = index === activeIndex ? 'active' : '';

            const highlighted = hljs.highlight(line, { language: 'cpp' }).value;

            return `
                <div class="code-line ${isActive}">
                    <span class="line-number">${index + 1}</span>
                    <span class="line-content">${highlighted}</span>
                </div>
            `;

        }).join('');
    }

    // Render visualization panel
    renderVisualization(memoryState) {
        let html = `
            <svg id="arrow-layer"></svg>

            <div class="memory-title">
                STACK MEMORY
            </div>
        `;

        // Render regular variables
        memoryState.variables.forEach(v => {
            html += `
                <div class="memory-block" id="var-${v.name}">
                    
                    <div style="color: #9CDCFE">
                        ${v.type} ${v.name}
                    
                    </div>

                    <div style="font-size: 24px; font-weight: bold; margin: 10px 0;">
                        ${v.value}
                    </div>

                    <div class="memory-address">
                        Addr: ${v.address}
                    </div>
                </div>
            `;
        });

        // Render Pointers
        memoryState.pointers.forEach(p => {
            html += `
                <div class="memory-block" style="border-color: #C586C0" id="ptr-${p.name}">
                    <div style="color: #C586C0">
                        int* ${p.name}
                    </div>

                    <div style="font-size: 16px; margin: 10px 0;">
                        ${p.value}
                    </div>

                    <div class="memory-address">
                        Addr: ${p.address}
                    </div>
                </div>
            `;
            // Note: Draw arrow logic via SVG/Canvas would go here to connect elements
        });

        this.vizContainer.innerHTML = html;
        this.drawPointers(memoryState);
    }

    // Render explanation panel
    renderExplanation(steps, currentStepId) {

    const visibleSteps = steps
        .slice(0, currentStepId + 1)
        .filter(step => step.explanation !== null);

    this.explainContainer.innerHTML = visibleSteps
        .map((step, index) => {

            const latest =
                index === visibleSteps.length - 1
                ? 'latest-step'
                : '';

            return `
                <div class="step-card ${latest}">
                    <div class="step-header">
                        Step ${index + 1}
                    </div>

                    <div class="step-content">
                        ${step.explanation}
                    </div>
                </div>
            `;
        })
        .join('');
}

    // Update the whole UI based on current step data
    updateUI(lessonData, currentStepIndex) {
        const currentStepData = lessonData.steps[currentStepIndex];

        // Cấu hình code
        this.renderCode(lessonData.codeLines, currentStepData.activeCodeLine);
        const currentLineInfo =
        document.getElementById('current-line-info');
        currentLineInfo.textContent = `Current Line: ${currentStepData.activeCodeLine + 1}`;
        
        // Cấu hình mô phỏng trên vùng nhớ
        this.renderVisualization(currentStepData.memoryState);

        // Cấu hình giải thích 
        this.renderExplanation(lessonData.steps, currentStepIndex);
    }

    // vẽ mũi tên giữa 2 box với nhau 
    drawPointers(memoryState) {
    const svg = document.getElementById('arrow-layer');
    svg.innerHTML = '';

    memoryState.pointers.forEach(pointer => {

        if (pointer.value === "???") {
            return;
        }

        const from = document.getElementById(`ptr-${pointer.name}`);
        const to = document.getElementById(`var-${pointer.pointsTo}`);
        
        if (!from || !to) {
            return;
        }

        // Tọa độ Y luôn lấy ở giữa tâm của 2 box
        const y1 = from.offsetTop + (from.offsetHeight / 2);
        const y2 = to.offsetTop + (to.offsetHeight / 2);

        let x1, x2;

        // Kiểm tra vị trí tương đối: Con trỏ nằm bên TRÁI hay bên PHẢI biến?
        if (from.offsetLeft > to.offsetLeft) {
            // Trường hợp của bạn: Con trỏ (p) nằm bên PHẢI biến (x)
            x1 = from.offsetLeft; // Xuất phát từ mép TRÁI của con trỏ
            x2 = to.offsetLeft + to.offsetWidth + 5; // Cắm vào mép PHẢI của biến, +5px để cách viền
        } else {
            // Đề phòng sau này có biến nào xếp bên phải con trỏ
            x1 = from.offsetLeft + from.offsetWidth; // Xuất phát từ mép PHẢI của con trỏ
            x2 = to.offsetLeft - 5; // Cắm vào mép TRÁI của biến, -5px để cách viền
        }

        svg.innerHTML += `
        <defs>
            <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="10"
                refX="8"
                refY="3"
                orient="auto">

                <polygon
                    points="0 0, 10 3, 0 6"
                    fill="#C586C0"/>
            </marker>
        </defs>

        <line
            x1="${x1}"
            y1="${y1}"
            x2="${x2}"
            y2="${y2}"

            stroke="#C586C0"
            stroke-width="3"

            marker-end="url(#arrowhead)"
        />
        `;
    });
}
}