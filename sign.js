function validateSignUpForm() {

    document.getElementById('newUsernameError').textContent = '';
    document.getElementById('newPasswordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
    document.getElementById('signupError').textContent = '';
    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (newUsername.trim() === '') {
        document.getElementById('newUsernameError').textContent = 'Please enter a username.';
        return false;
    }

    if (newPassword.trim() === '') {
        document.getElementById('newPasswordError').textContent = 'Please enter a password.';
        return false;
    }

    if (confirmPassword.trim() === '') {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm your password.';
        return false;
    }

    if (newPassword !== confirmPassword) {
        document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
        return false;
    }
    alert('Signup successful!');
    window.location.href = 'login.html';
    return true;
}