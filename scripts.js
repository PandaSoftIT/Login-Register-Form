function showRegister() {
  document.getElementById("register-form").classList.remove("hidden");
  document.getElementById("login-form").classList.add("hidden");
}

function showLogin() {
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("register-form").classList.add("hidden");
}

function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

function handleLogin(event) {
  event.preventDefault();
  showNotification("You are already logged in");
}

function handleRegister(event) {
  event.preventDefault();
  showRegister();
  showNotification("You are already registered");
  showLogin();
}
