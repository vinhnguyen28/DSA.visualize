// =======================================
// HOME PAGE LOGIC
// =======================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("Home page loaded successfully.");

  // ---------------------------------------
  // 1. LOGIC TÌM KIẾM
  // ---------------------------------------
  const searchBar = document.querySelector(".search-input"); // Đã đổi tên class theo UI mới
  if (searchBar) {
    searchBar.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const cards = document.querySelectorAll(".lesson-card");

      cards.forEach((card) => {
        const title = card
          .querySelector(".card-title")
          .textContent.toLowerCase();
        if (title.includes(searchTerm)) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  }

  // ---------------------------------------
  // 2. KHO DỮ LIỆU CHI TIẾT CHO POPUP
  // ---------------------------------------
  const courseData = {
    pointer: {
      title: "Pointer in C++",
      desc: "Khóa học này sẽ giúp bạn làm chủ hoàn toàn khái niệm con trỏ trong C++, một trong những chủ đề khó nhằn nhất nhưng lại quan trọng nhất để tối ưu hóa hiệu suất.",
      features: [
        "Hiểu sâu bản chất bộ nhớ Stack và Heap",
        "Nắm vững Toán tử địa chỉ (&) và Dereference (*)",
        "Cách cấp phát bộ nhớ động với từ khóa new và delete",
        "Phát hiện và phòng tránh Memory Leak, Dangling Pointer",
      ],
      link: "./pages/pointer.html",
      isLocked: false,
    },
    "singly-linked-list": {
      title: "Singly Linked List",
      desc: "Thoát khỏi sự gò bó của mảng (Array). Học cách xây dựng danh sách liên kết đơn có khả năng mở rộng không giới hạn thông qua các hoạt ảnh trực quan.",
      features: [
        "Cấu trúc của một Node (Data và con trỏ Next)",
        "Kỹ thuật liên kết và duyệt (Traverse) toàn bộ danh sách",
        "Thuật toán Thêm Node (Insert Head, Tail, Middle)",
        "Thuật toán Xóa Node an toàn, dọn dẹp rác bộ nhớ",
      ],
      link: "./pages/linkedlist.html",
      isLocked: false,
    },
    "doubly-linked-list": {
      title: "Doubly Linked List",
      desc: "Nâng cấp từ danh sách liên kết đơn, cho phép bạn lùi lại (go back) dễ dàng. Đây là nền tảng của các tính năng Undo/Redo trong phần mềm.",
      features: [
        "Cấu trúc Node 2 chiều (Next và Prev)",
        "Thuật toán chèn và xóa đa hướng phức tạp",
        "Ứng dụng thực tế của Doubly Linked List",
      ],
      link: "#premium",
      isLocked: true,
    },
    tree: {
      title: "Binary Tree & BST",
      desc: "Khám phá cấu trúc dữ liệu dạng Cây phân cấp, vũ khí tối thượng đằng sau tốc độ truy vấn của các hệ thống cơ sở dữ liệu lớn.",
      features: [
        "Khái niệm Node cha, Node con, Root, Leaf",
        "3 cách duyệt cây kinh điển: Pre-order, In-order, Post-order",
        "Cây nhị phân tìm kiếm (Binary Search Tree)",
      ],
      link: "#premium",
      isLocked: true,
    },
    "array-string": {
      title: "Array & String",
      desc: "Nền tảng đầu tiên của mọi lập trình viên. Khám phá cách dữ liệu được lưu trữ liên tiếp trong bộ nhớ máy tính.",
      features: [
        "Cách khai báo và cấp phát mảng 1 chiều, 2 chiều",
        "Thuật toán tìm kiếm tuyến tính và nhị phân",
        "Thao tác chuỗi ký tự cơ bản trong C++",
      ],
      link: "#",
      isLocked: false,
    },
    "stack-queue": {
      title: "Stack & Queue",
      desc: "Hai cấu trúc dữ liệu kinh điển hoạt động theo nguyên tắc LIFO và FIFO. Trái tim của các hệ thống điều hành.",
      features: [
        "Cơ chế LIFO (Vào sau ra trước) của Stack",
        "Cơ chế FIFO (Vào trước ra trước) của Queue",
        "Mô phỏng cơ chế Call Stack của hệ điều hành",
      ],
      link: "#",
      isLocked: false,
    },
  };

  // ---------------------------------------
  // 3. LOGIC HIỂN THỊ POPUP
  // ---------------------------------------
  const modal = document.getElementById("courseModal");
  const closeModalBtn = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDesc = document.getElementById("modalDesc");
  const modalFeatures = document.querySelector(".course-features");
  const modalActionBtn = document.getElementById("modalActionBtn");

  if (modal) {
    document.querySelectorAll(".lesson-card").forEach((card) => {
      card.addEventListener("click", (e) => {
        // Bấm vào nút thì cho chuyển trang luôn, không hiện popup
        if (e.target.closest(".btn")) return;

        // Lấy ID của thẻ vừa bấm
        const courseId = card.getAttribute("data-id");
        const data = courseData[courseId];

        // Nếu không có data thì bỏ qua
        if (!data) return;

        // Bơm nội dung Text vào Popup
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modalActionBtn.setAttribute("href", data.link);

        // Bơm danh sách Features (Tạo thẻ <li>)
        modalFeatures.innerHTML = data.features
          .map(
            (feature) =>
              `<li><i class="fa-solid fa-check"></i> ${feature}</li>`,
          )
          .join("");

        // Xét trạng thái Khóa / Mở để đổi nút
        if (data.isLocked) {
          modalActionBtn.innerHTML =
            '<i class="fa-solid fa-crown"></i> Upgrade Premium';
          modalActionBtn.className = "btn btn-upgrade";
        } else {
          modalActionBtn.innerHTML = "Bắt đầu học ngay";
          modalActionBtn.className = "btn btn-primary";
          modalActionBtn.style.borderRadius = "30px";
        }

        // Hiện Popup
        modal.classList.add("active");
      });
    });

    // Tắt Popup
    const closePopup = () => modal.classList.remove("active");
    closeModalBtn.addEventListener("click", closePopup);
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closePopup();
    });
  }
});

// ==========================================
// LOGIC CHO NÚT UPGRADE (BÀI HỌC BỊ KHÓA)
// ==========================================
const upgradeButtons = document.querySelectorAll(".btn-upgrade");

upgradeButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // Ngăn chặn trình duyệt nhảy lên đầu trang do href="#premium"
    e.preventDefault();

    // Chức năng tạm thời: Hiện thông báo
    // Sau này bạn có thể thay dòng alert này bằng lệnh chuyển hướng:
    // window.location.href = "./pages/pricing.html";
    alert("This feature is for Premium users. Upgrade page coming soon!");
  });
});

// ==========================================
// 4. LOGIC HERO SLIDER (INFINITE LOOP CAROUSEL)
// ==========================================
const track = document.getElementById("sliderTrack");
const originalSlides = Array.from(document.querySelectorAll(".slide"));
const prevBtn = document.getElementById("sliderPrev");
const nextBtn = document.getElementById("sliderNext");
const dots = document.querySelectorAll(".dot");

if (track && originalSlides.length > 0) {
  // 1. Kỹ thuật Clone Node để làm vòng lặp vô tận
  const firstClone = originalSlides[0].cloneNode(true);
  const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);

  firstClone.id = "first-clone";
  lastClone.id = "last-clone";

  // Đưa clone vào DOM (Cuối và Đầu)
  track.appendChild(firstClone);
  track.insertBefore(lastClone, originalSlides[0]);

  // Lấy lại danh sách slide sau khi đã thêm clone
  const allSlides = document.querySelectorAll(".slide");

  // Vị trí bắt đầu phải là 1 (vì index 0 đang là cái lastClone)
  let currentIndex = 1;
  let isTransitioning = false;
  let slideInterval;

  // Khởi tạo vị trí ban đầu không có hiệu ứng trượt
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // 2. Hàm cập nhật UI và di chuyển
  function updateSlider() {
    track.style.transition = "transform 0.5s ease-in-out";
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Cập nhật thẻ Dots (Tính toán bù trừ index của clone)
    let dotIndex = currentIndex - 1;
    if (currentIndex === 0) dotIndex = originalSlides.length - 1; // Đang ở clone đầu -> sáng dot cuối
    if (currentIndex === allSlides.length - 1) dotIndex = 0; // Đang ở clone cuối -> sáng dot đầu

    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[dotIndex]) dots[dotIndex].classList.add("active");
  }

  // 3. Xử lý "dịch chuyển tức thời" khi cuộn hết để tạo vòng lặp
  track.addEventListener("transitionend", () => {
    isTransitioning = false; // Mở khóa cho phép click tiếp

    // Nếu chạm vào cái clone ở đầu tiên (cuộn lùi quá đà) -> Nhảy tức thời về ảnh cuối thật
    if (allSlides[currentIndex].id === "last-clone") {
      track.style.transition = "none"; // Tắt hiệu ứng trượt
      currentIndex = originalSlides.length; // Trở về slide thật
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Nếu chạm vào cái clone ở cuối cùng (cuộn tiến quá đà) -> Nhảy tức thời về ảnh đầu thật
    if (allSlides[currentIndex].id === "first-clone") {
      track.style.transition = "none";
      currentIndex = 1;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  });

  // 4. Các hàm điều khiển
  function nextSlide() {
    if (isTransitioning) return; // Chống click spam liên tục
    isTransitioning = true;
    currentIndex++;
    updateSlider();
  }

  function prevSlide() {
    if (isTransitioning) return;
    isTransitioning = true;
    currentIndex--;
    updateSlider();
  }

  // Sự kiện click
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      nextSlide();
      resetInterval();
    });
  }
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      prevSlide();
      resetInterval();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (isTransitioning) return;
      currentIndex = index + 1; // Bù cho cái clone đầu tiên
      updateSlider();
      resetInterval();
    });
  });

  // 5. Tự động chạy
  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }
  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  startInterval();
}
