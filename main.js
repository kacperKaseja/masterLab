const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

function validatePassword() {
    if (password.value != confirmPassword.value) {
        confirmPassword.setCustomValidity(`Password Don't Match`);
    } else {
        confirmPassword.setCustomValidity('');
    }
};

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;