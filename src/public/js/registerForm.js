window.addEventListener('load', function () {

    if (window.location.pathname.includes('/registro')) {

        let user = document.querySelector('.register-user');
        let name = document.querySelector('.register-name');
        let surname = document.querySelector('.register-surname');
        let email = document.querySelector('.register-email');
        let password = document.querySelector('.register-password');
        let error = document.querySelectorAll('.error-js');

        user.addEventListener('blur', function () {
            const alphanumeric = /^[0-9a-zA-Z]+$/;

            if (user.value == "") {
                error[0].innerText = "¿No se te ocurren nombres de usuarios originales?";
            } else if (user.value.length < 3) {
                error[0].innerText = "Con un poco de originalidad puedes hacerlo más largo";
            } else if (user.value.match(alphanumeric)) {
                error[0].innerText = "Tu usuario debe contener al menos una letra, un número y un caracter";
            } else {
                error[0].innerText = "";
            }
        })

        name.addEventListener('blur', function () {
            if (name.value == "") {
                error[1].innerText = "¿No nos vas a decir tu nombre?";
            } else if (name.value.charAt(0) !== name.value.charAt(0).toUpperCase()) {
                error[1].innerText = "Nos gustan los nombres que empiezan con una letra en Mayúscula";
            } else if (name.value.length < 3) {
                error[1].innerText = "Tu nombre es demasiado corto (¿O sos de China?)";
            } else {
                error[1].innerText = "";
            }
        })

        surname.addEventListener('blur', function () {
            if (surname.value == "") {
                error[2].innerText = "Queremos conocer ese apellido tan bonito que tenes";
            } else if (surname.value.charAt(0) !== surname.value.charAt(0).toUpperCase()) {
                error[2].innerText = "Al igual que los nombres, está bueno que los apellidos empiecen con una letra en Mayúscula, ¿no crees?";
            } else if (surname.value.length < 3) {
                error[2].innerText = "Tu apellido es demasiado corto (¿No te llamaras XI XING PING?)";
            } else {
                error[2].innerText = "";
            }
        })

        email.addEventListener('blur', function () {
            const isEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

            if (email.value == "") {
                error[3].innerText = "¿A dónde ha ido el email?";
            } else if (!isEmail.test(String(email.value).toLowerCase())) {
                error[3].innerText = "Me parece a mí, ¿o eso no es un email válido?";
            } else {
                error[3].innerText = "";
            }
        })

        password.addEventListener('blur', function () {
            const alphanumeric = /^[0-9a-zA-Z]+$/;

            if (password.value == "") {
                error[4].innerText = "Nuestro equipo de Seguridad Informática no estaría muy contento si dejas la contraseña en blanco";
            } else if (password.value.length < 8) {
                error[4].innerText = "Esfuerzate un poco, necesitamos que tenga al menos 8 caracteres";
            } else if (password.value.match(alphanumeric)) {
                error[4].innerText = "La contraseña debe contener al menos una letra, un número y un caracter";
            } else {
                error[4].innerText = "";
            }
        })
    }
})