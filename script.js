const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-pw');
let password;
let confirmPassword;
let error = false;

confirmPasswordField.addEventListener('blur', () => {
  validatePasswords();
});

passwordField.addEventListener('blur', () => {
  validatePasswords();
});

const validatePasswords = function() {
  password = passwordField.value;
  confirmPassword = confirmPasswordField.value;
  if (confirmPassword) {
    checkPasswordsMatch();
  }
  updatePasswordFieldsState();
}

const checkPasswordsMatch = function() {
  if (password != confirmPassword) {
    error = true;
  }
  else {
    error = false;
  }
}

const updatePasswordFieldsState = function() {
  if (error == true) {
    passwordField.classList.add('error');
    confirmPasswordField.classList.add('error');
  }
  else {
    passwordField.classList.remove('error');
    confirmPasswordField.classList.remove('error');
  }
}

// clear confirmation password
confirmPasswordField.addEventListener('input', () => {
  if (confirmPasswordField.value == '' && passwordField.value != '') {
    error = true;
  }
  else {
    error = false;
  }
})