const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
/**------------------------------------------------------------------------- */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if(iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.toggle('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}
/**------------------------------------------------------------------------- */

const tabNavItems = document.querySelectorAll('.tabs-portfolio__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentActiveInderx = null;
    let newActiveInderx = null;
    if (targetElement.closest('.tabs-portfolio__button')) {
        tabNavItems.forEach((tabNavItems, index) => {
            if (tabNavItems.classList.contains('active')) {
                currentActiveInderx = index;
                tabNavItems.classList.remove('active');

            }
            if (tabNavItems === targetElement) {
                newActiveInderx = index;
            }

        });
        targetElement.classList.add('active');
        tabItems[currentActiveInderx].classList.remove('active');
        tabItems[newActiveInderx].classList.add('active');

    }
});


