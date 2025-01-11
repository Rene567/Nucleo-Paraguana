const loginForm = document.querySelector('#loginForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const contraseña = document.querySelector('#contraseña').value.trim();

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.nombre === nombre && user.contraseña === contraseña && user.rol === "Estudiante");

    if (!validUser) {
        return alert('Usuario o contraseña incorrectos para Estudiantes!');
    }

    alert(`Bienvenido Estudiante ${validUser.nombre}`);
    window.location.href = "Entrada_Estudiante.html";
});
