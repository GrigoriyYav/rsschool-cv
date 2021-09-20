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

//crossCheck
console.log('Ваша оценка - 155/160(150) баллов');
console.log('Частично выполненные пункты:');
console.log('1) есть видеорезюме автора CV + 5');
console.log('Выполненные пункты:');
console.log('1) +10 вёрстка валидная. Проверить валидность вёрстки: https://validator.w3.org/');
console.log('2) +20 вёрстка семантическая. В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. 2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов. Заголовок h1 может быть только один');
console.log('3) +10 для оформления СV используются css-стили. 1 балл за каждый стилизованный элемент, но не больше 10 баллов');
console.log('4) +10 контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы');
console.log('5) +10 вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется');
console.log('6) +10 есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным.');
console.log('7) +10 на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым)');
console.log('8) +10 контакты для связи и перечень навыков оформлены в виде списка ul > li');
console.log('9) +10 CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского');
console.log('10) +10 CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода');
console.log('11) +10 CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий');
console.log('12) +10 CV выполнено на английском языке');
console.log('13) +10 выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт)');
console.log('14) +10 дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию');
console.log('Ваша оценка - 155/160(150) баллов');