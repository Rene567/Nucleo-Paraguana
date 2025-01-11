const signupForm = document.querySelector('#registerForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const cedula = document.querySelector('#cedula').value.trim();
    const email = document.querySelector('#email').value.trim();
    const contraseña = document.querySelector('#contraseña').value.trim();
    const pregunta1 = document.querySelector('#pregunta1')?.value || '';
    const pregunta2 = document.querySelector('#pregunta2')?.value || '';
    const rol = "Estudiante";

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        return alert('El usuario ya está registrado!');
    }
    Users.push({ nombre, contraseña, email, cedula, pregunta1, pregunta2, rol });
    localStorage.setItem('users', JSON.stringify(Users));
    alert("Registro Exitoso! :3");

    // Redirección a la página principal
    window.location.href = "Entrada_Estudiante.html";
});
