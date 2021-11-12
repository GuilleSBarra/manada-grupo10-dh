window.addEventListener ('load', function () {

    if (window.location.pathname.includes('/admin')) {
        
        let sidebar = document.querySelector(".admin-sidebar");
        let sidebarBtn = document.querySelector(".sidebarBtn");
        
        sidebarBtn.onclick = function () {
            sidebar.classList.toggle("active");
            if (sidebar.classList.contains("active")) {
                sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
            } else {
                sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
            }
        }
    }
})

