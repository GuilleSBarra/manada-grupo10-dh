window.addEventListener ('load', function() {
    let profile = document.querySelector('.profile-details');
    let profileActive = document.querySelector('.profile-details-disable')

    profile.onclick = function () {
        profileActive.classList.toggle('profile-details-active');
    }

})