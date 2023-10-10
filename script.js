const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirm-pw');
const submitButton = document.getElementById('submit-btn');
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
  updateSubmitButtonState();
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
  if (error) {
    passwordField.classList.add('error');
    confirmPasswordField.classList.add('error');
  }
  else {
    passwordField.classList.remove('error');
    confirmPasswordField.classList.remove('error');
  }
}

const updateSubmitButtonState = function() {
  if (error) {
    submitButton.onclick = function() {
      return false;
    }
  }
  else {
    submitButton.onclick = "";
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