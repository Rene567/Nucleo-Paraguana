loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const contraseña = document.querySelector('#contraseña').value.trim();

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    console.log('Usuarios registrados:', Users); // Para depuración

    const validUser = Users.find(user => 
        user.nombre.toLowerCase() === nombre.toLowerCase() &&
        user.contraseña === contraseña &&
        user.rol === "FIAM"
    );

    if (!validUser) {
        return alert('Usuario o contraseña incorrectos.');
    }

    alert(`Bienvenido FIAM, ${validUser.nombre}`);
    window.location.href = "../html/Entrada_FIAM.html";
});
