const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameErrorDiv = document.getElementById('username-error');
const passwordErrorDiv = document.getElementById('password-error');
const generalErrorDiv = document.getElementById('general-error'); // Keep this if you want it

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    let hasError = false;

    // Clear any previous error messages
    usernameErrorDiv.textContent = '';
    passwordErrorDiv.textContent = '';
    generalErrorDiv.textContent = '';

    if (username === '') {
        usernameErrorDiv.textContent = 'Username is required';
        hasError = true;
    }

    if (password === '') {
        passwordErrorDiv.textContent = 'Password is required';
        hasError = true;
    }

    if (!hasError) {
        // If both fields are not empty, log the values
        console.log('Username:', username);
        console.log('Password:', password);
        // You might want to clear the input fields here after a successful "login" for testing purposes
        usernameInput.value = '';
        passwordInput.value = '';
    }
});