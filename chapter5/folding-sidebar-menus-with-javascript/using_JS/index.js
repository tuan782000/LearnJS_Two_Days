(function () {
    "use strict";

    const submenus = document.querySelectorAll("ul li ul");
    const menuLinks = document.querySelectorAll(".menulink");

    function hideSubMenus() {
        for (let i = 0; i < submenus.length; i++) {
            submenus[i].className = "hide-menu";
        }
    }

    hideSubMenus();

    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener("click", function (e) {
            e.preventDefault();
            // viết dài
            // var thisMenu = this;
            // alert(thisMenu.innerHTML);
            // Viết gọn
            // alert(this.innerHTML)

            const thisMenu = this.parentNode.querySelector("ul");
            // console.log(thisMenu.innerHTML);
            // thisMenu.className = "show-menu"
            if (thisMenu.classList.contains("hide-menu")) {
                hideSubMenus();
                thisMenu.className = "show-menu";
            } else {
                thisMenu.className = "hide-menu";
            }
        });
    }
})();
