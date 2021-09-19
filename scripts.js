// nav
const iconMenu = document.querySelector('.menu_icon');
const menuBody= document.querySelector('.page-header-nav');
if (iconMenu){
        iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

const menu = document.querySelectorAll('.site-navigation__link');
if(menu.length > 0){
    menu.forEach(menu =>{
        menu.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        if(iconMenu.classList.contains('_active')){
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        }
    }
}