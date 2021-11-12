window.addEventListener ('load', function () {
    let burger = document.querySelector('.burger-menu');
    let burgerActive = document.querySelector('.burger-menu-disabled');
    let burgerList = document.querySelector('.burger-menu-list');
    let burgerProducts = document.querySelector('.burger-menu-products');
    let burgerProductsActive = document.querySelector('.burger-products-list');

    burger.onclick = function () {
        burgerActive.classList.toggle('burger-menu-enabled');
        burgerList.classList.toggle('burger-menu-list-visible');
    }

    burgerProducts.onclick = function () {
        burgerProductsActive.classList.toggle('burger-products-list-visible');
    }
})