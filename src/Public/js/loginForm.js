window.addEventListener ('load', function() {
    let email = document.querySelector('.login-email');
    let password = document.querySelector('.login-password');
    let error = document.querySelectorAll('.error-js');
    
    email.addEventListener('blur', function() {
        const isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

        if (email.value == "") {
            error[0].innerText = "¿A dónde ha ido el email?";
        } else if (!isEmail.test(String(email.value).toLowerCase())) {
            error[0].innerText = "Me parece a mí, ¿o eso no es un email válido?";
        } else {
            error[0].innerText = "";
        }
    })

    password.addEventListener('blur', function () {
        const alphanumeric = /^[0-9a-zA-Z]+$/;

        if (password.value == "") {
            error[1].innerText = "Si dejas el campo en blanco nunca vas a poder ingresar";
        } else if (password.value.length < 8) {
            error[1].innerText = "Recordá que tu contraseña tiene al menos 8 caracteres";
        } else if (password.value.match(alphanumeric)) {
            error[1].innerText = "No la recuerdas? Te doy una pista: Debe contener al menos una letra, un número y un caracter";
        } else {
            error[1].innerText = "";
        }
    })    
})