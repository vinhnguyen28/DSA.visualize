// File: js/core/auth.js
//
//
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("auth-modal");
  const btnOpenLogin = document.getElementById("btn-open-login");
  const btnOpenRegister = document.getElementById("btn-open-register");
  const btnClose = document.getElementById("close-auth-modal");
  const toggleBtn = document.getElementById("auth-toggle-btn");

  // Các Element cần thay đổi Text bên trong Modal
  const authTitle = document.getElementById("auth-title");
  const authSubtitle = document.getElementById("auth-subtitle");
  const textGoogle = document.getElementById("text-google");
  const textFacebook = document.getElementById("text-facebook");
  const textGithub = document.getElementById("text-github");
  const textEmail = document.getElementById("text-email");
  const authToggleText = document.getElementById("auth-toggle-text");
  const authForgotLink = document.getElementById("auth-forgot-link");

  let currentMode = "login"; // 'login' hoặc 'register'

  // Hàm render giao diện tùy theo mode
  const renderModal = (mode) => {
    currentMode = mode;
    if (mode === "register") {
      authTitle.textContent = "Đăng ký tài khoản";
      authSubtitle.style.display = "block";
      textGoogle.textContent = "Đăng ký với Google";
      textFacebook.textContent = "Đăng ký với Facebook";
      textGithub.textContent = "Đăng ký với GitHub";
      textEmail.textContent = "Sử dụng email / số điện thoại";

      authToggleText.innerHTML = `Bạn đã có tài khoản? <span class="auth-link-highlight" id="auth-toggle-btn">Đăng nhập</span>`;
      authForgotLink.style.display = "none";
    } else {
      authTitle.textContent = "Đăng nhập vào DSA";
      authSubtitle.style.display = "none"; // Đăng nhập không cần dòng subtitle dài dòng
      textGoogle.textContent = "Tiếp tục với Google";
      textFacebook.textContent = "Tiếp tục với Facebook";
      textGithub.textContent = "Tiếp tục với GitHub";
      textEmail.textContent = "Sử dụng email / số điện thoại";

      authToggleText.innerHTML = `Bạn chưa có tài khoản? <span class="auth-link-highlight" id="auth-toggle-btn">Đăng ký</span>`;
      authForgotLink.style.display = "inline-block";
    }

    // Gắn lại sự kiện click cho nút Toggle vì nó vừa bị ghi đè innerHTML
    document.getElementById("auth-toggle-btn").addEventListener("click", () => {
      renderModal(currentMode === "login" ? "register" : "login");
    });
  };

  // Các sự kiện mở / đóng Modal
  if (btnOpenLogin) {
    btnOpenLogin.addEventListener("click", () => {
      renderModal("login");
      modal.classList.add("active");
    });
  }

  if (btnOpenRegister) {
    btnOpenRegister.addEventListener("click", () => {
      renderModal("register");
      modal.classList.add("active");
    });
  }

  const closeModal = () => modal.classList.remove("active");

  if (btnClose) btnClose.addEventListener("click", closeModal);

  // Bấm ra ngoài vùng đen cũng tự đóng
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
