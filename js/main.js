if (document.querySelector('.portfolio__item')) {

    // ---- VARIABLES ---- //
    // -- general -- //
    const html = document.querySelector('html')
    const body = document.querySelector('body')

    // -- burger -- //
    const burgerOpen = document.querySelector('.header__burger-open')
    const burgerClose = document.querySelector('.header__burger-close')

    // -- portfolio -- //
    const portfolio = document.querySelector('.portfolio')
    const portfolioItems = document.querySelectorAll('.portfolio__item')

    // -- project -- //
    const project = document.querySelector('.project')

    // -- overlay -- //
    const overlay = document.querySelector('.overlay-circle')
    const startOverlay = document.querySelector('.start-overlay-circle')
    const overlayClose = document.querySelector('.overlay-close')

    // -- about -- //
    const about = document.querySelector('.about')
    const aboutBg = document.querySelector('.about__bg')
    const aboutTitle = document.querySelector('.about__title')
    const aboutText = document.querySelector('.about__text')
    const aboutImg = document.querySelector('.about__img-wrapper-side')

  // ---- FUNCTIONS ---- //
let t  = 1
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('enter')
            item.classList.remove('leave')
        })

        item.addEventListener('mouseleave', () => {
            item.classList.remove('enter')
            item.classList.add('leave')
            setTimeout(() => {
                item.classList.remove('leave')
            }, 400)
        }) 

        item.addEventListener('click', () => {
            overlay.classList.add('active')
            startOverlay.classList.add('active')
            html.style.overflow = 'hidden'
            setTimeout(() => {
                toggleProject()
            }, 500)

            setTimeout(() => {
                overlay.classList.remove('active')
                startOverlay.classList.remove('active')
            }, 1500)
        })
    })

    const toggleProject = () => {
        portfolio.classList.toggle('hidden')
        body.classList.toggle('black')
        project.classList.toggle('active')
        burgerOpen.classList.toggle('active')
        burgerClose.classList.toggle('active')
    }

    burgerOpen.addEventListener('click', () => {
        aboutOpen()
        burgerToggle()
    })

    const burgerToggle = () => {
        burgerOpen.classList.toggle('active')
        burgerClose.classList.toggle('active')
    }

    const aboutOpen = () => {
        body.classList.add('body-about')
        aboutBg.classList.add('active')
        html.style.overflow = 'hidden'
        setTimeout(() => {
            about.classList.toggle('active')
        }, 500)

        setTimeout(() => {
            aboutTitle.classList.toggle('active')
            aboutTitle.style.height = aboutTitle.scrollHeight + 'px'
        }, 700)
        setTimeout(() => {
            aboutText.classList.toggle('active')
            aboutText.style.height = aboutText.scrollHeight + 'px'
        }, 900)
        setTimeout(() => {
            aboutImg.classList.toggle('active')
        }, 1100)
    }

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

}
