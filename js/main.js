// -- start paralax -- //
console.log(12);
window.addEventListener('load', (event) => {
    setTimeout(() => {
        if (document.querySelector('.portfolio__item')) {
            const imagesParalax = document.querySelectorAll('.portfolio__item');
            const paralaxClass = new simpleParallax(imagesParalax, {
                delay: 1.5,
                transition: 'cubic-bezier(0,0,0,1)',
                overflow: true,
            });

            setTimeout(() => {
                paralaxClass.refresh();
            }, 500)
        }
    }, 500)
});

// -- end paralax -- //

// -- start burger close -- //
burgerClose.addEventListener('click', () => {
    if (project.classList.contains('active')) {
        setTimeout(() => {
            toggleProject()
            overlayClose.classList.add('active')
            html.style.overflow = 'initial'
        }, 100)
        setTimeout(() => {
            overlayClose.classList.remove('active')
        }, 500)

        history.pushState(historyState, historyTitle, "?")
    }

    if (about.classList.contains('active')) {
        about.classList.remove('active')
        aboutBg.classList.add('active-reverse')
        aboutBg.classList.remove('active')
        body.classList.remove('body-about')
        html.style.overflow = 'initial'
        burgerToggle()
        setTimeout(() => {
            aboutTitle.classList.toggle('active')
            aboutTitle.style.height = '0px'
            aboutText.classList.toggle('active')
            aboutText.style.height = '0px'
            aboutImg.classList.toggle('active')
            aboutBg.classList.remove('active-reverse')
        }, 500)
    }

})
// -- end burger close -- //