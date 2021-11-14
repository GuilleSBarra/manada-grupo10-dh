window.addEventListener ('load', function () {
    let filter = document.querySelector('.index-categories-filter-div');
    let filterActive = document.querySelector('.index-categories-header-filter')
    let productsPage = document.querySelector('.index-products');

    filter.onclick = function () {
        filterActive.classList.toggle('index-categories-header-filter-active');
        productsPage.classList.toggle('index-products-filter-active');
    }
})