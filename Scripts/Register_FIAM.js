const signupForm = document.querySelector('#registerForm');

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const contraseña = document.querySelector('#contraseña').value.trim();
    const email = document.querySelector('#email').value.trim();
    const cargo = document.querySelector('#cargo')?.value || '';
    const asignaturas = document.querySelector('#asignaturas')?.value || '';
    const rol = "FIAM"; // Identificar que este registro es para FIAM

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        return alert('El usuario ya está registrado!');
    }

    Users.push({ nombre, contraseña, email, cargo, asignaturas, rol });
    localStorage.setItem('users', JSON.stringify(Users));
    alert("Registro Exitoso! :D");

    // Redirección a la página principal
    window.location.href = "Entrada_FIAM.html";
});
