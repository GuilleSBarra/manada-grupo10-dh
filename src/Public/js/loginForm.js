window.addEventListener('load', function () {

    if (window.location.pathname.includes('/ingreso')) {

        let email = document.querySelector('.login-email');
        let password = document.querySelector('.login-password');
        let error = document.querySelectorAll('.error-js');

        let avatarLogin = document.querySelector('.login-bear-avatar-login');
        let avatarUser = document.querySelector('.login-bear-avatar-user');
        let avatarPass = document.querySelector('.login-bear-avatar-pass');

        email.addEventListener('focus', function () {
            if (avatarLogin.classList.contains('avatar-enabled')) {
                avatarLogin.classList.remove('avatar-enabled');
                avatarLogin.classList.add('avatar-disabled');
            }

            if (avatarUser.classList.contains('avatar-disabled')) {
                avatarUser.classList.remove('avatar-disabled');
                avatarUser.classList.add('avatar-enabled');
            }
        })

        email.addEventListener('blur', function () {
            const isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

            if (email.value == "") {
                error[0].innerText = "¿A dónde ha ido el email?";
            } else if (!isEmail.test(String(email.value).toLowerCase())) {
                error[0].innerText = "Me parece a mí, ¿o eso no es un email válido?";
            } else {
                error[0].innerText = "";
            }

            if (avatarLogin.classList.contains('avatar-disabled')) {
                avatarLogin.classList.remove('avatar-disabled');
                avatarLogin.classList.add('avatar-enabled');
            }

            if (avatarUser.classList.contains('avatar-enabled')) {
                avatarUser.classList.remove('avatar-enabled');
                avatarUser.classList.add('avatar-disabled');
            }
        })

        password.addEventListener('focus', function () {
            if (avatarLogin.classList.contains('avatar-enabled')) {
                avatarLogin.classList.remove('avatar-enabled');
                avatarLogin.classList.add('avatar-disabled');
            }

            if (avatarPass.classList.contains('avatar-disabled')) {
                avatarPass.classList.remove('avatar-disabled');
                avatarPass.classList.add('avatar-enabled');
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

            if (avatarLogin.classList.contains('avatar-disabled')) {
                avatarLogin.classList.remove('avatar-disabled');
                avatarLogin.classList.add('avatar-enabled');
            }

            if (avatarPass.classList.contains('avatar-enabled')) {
                avatarPass.classList.remove('avatar-enabled');
                avatarPass.classList.add('avatar-disabled');
            }
        })
    }
})