window.addEventListener ('load', function() {
    let name = document.querySelector('.productForm-name');
    let description = document.querySelector('.productForm-description');
    let price = document.querySelector('.productForm-price');
    let error = document.querySelectorAll('.error-js');
    
    name.addEventListener('blur', function() {
        if (name.value == "") {
            error[0].innerText = "Falta el nombre por aquí";
        } else {
            error[0].innerText = "";
        }
    })

    description.addEventListener('blur', function() {
        if (description.value == "") {
            error[1].innerText = "Falta la descripción";
        } else {
            error[1].innerText = "";
        }
    })
    
    price.addEventListener('blur', function() {
        if (price.value == "") {
            error[2].innerText = "Sin el precio no podemos vender nada!!";
        } else if (isNaN(price.value)) {
            error[2].innerText = "El precio debe ser un número. ¿Qué estás ingresando?";
        } else {
            error[2].innerText = "";
        }
    })
})