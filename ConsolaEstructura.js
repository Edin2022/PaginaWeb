// Variables para almacenar los usuarios registrados
const users = JSON.parse(localStorage.getItem('users')) || [];
let currentUser = null;

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
}

function register() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (username && email && password) {
        users.push({ username, email, password });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        showLogin();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        const user = users.find(u => u.username === username && u.password === password);

        if (user) {
            currentUser = user;
            document.getElementById('auth-page').style.display = 'none';
            document.getElementById('main-page').style.display = 'block';
        } else {
            alert('Nombre de usuario o contraseña incorrectos.');
        }
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function logout() {
    currentUser = null;
    document.getElementById('auth-page').style.display = 'block';
    document.getElementById('main-page').style.display = 'none';
}

function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

function toggleDescription(descriptionId) {
    const description = document.getElementById(descriptionId);
    description.style.display = description.style.display === 'none' ? 'block' : 'none';
}

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}