function validateForm() {
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('loginError').textContent = '';
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '') {
        document.getElementById('usernameError').textContent = 'Please enter your username.';
        return false;
    }

    if (password.trim() === '') {
        document.getElementById('passwordError').textContent = 'Please enter your password.';
        return false;
    }
    if (username === 'exampleuser' && password === 'examplepassword') {

        return true;
    } else {
        document.getElementById('loginError').textContent = 'Invalid username or password.';
        return false;
    }
}