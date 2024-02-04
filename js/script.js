const tabNavItems = document.querySelectorAll('.tabs-portfolio__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e){
    const targetElement = e.target;
    let currentActiveInderx = null;
    let newActiveInderx = null;
    if(targetElement.closest('.tabs-portfolio__button')){
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


