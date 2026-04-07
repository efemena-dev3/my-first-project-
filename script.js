const form = document.querySelector(".login-form");
const emailInput = form.querySelector("input[type='email']");
const rememberMe = form.querySelector("input[type='checkbox']");

// Load saved email
window.onload = () => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberMe.checked = true;
    }
};

// Save email if checked
form.addEventListener("submit", (e) => {
    if (rememberMe.checked) {
        localStorage.setItem("email", emailInput.value);
    } else {
        localStorage.removeItem("email");
    }
});
