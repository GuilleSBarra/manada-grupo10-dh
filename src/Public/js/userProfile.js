window.addEventListener ('load', function() {
    let profile = document.querySelector('.profile-details');
    let profileActive = document.querySelector('.profile-details-disable')
    let main = document.querySelector('main');

    main.onclick = function () {
        profileActive.classList.remove('profile-details-active');
    }

    profile.onclick = function () {
        profileActive.classList.toggle('profile-details-active');
    }

})