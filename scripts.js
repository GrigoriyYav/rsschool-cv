// nav
const iconMenu = document.querySelector('.menu_icon');
if (iconMenu){
    const menuBody= document.querySelector('.page-header-nav');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}