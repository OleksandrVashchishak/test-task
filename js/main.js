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
    const projectArrowLeft = document.querySelector('.project__arrow-left')
    const projectArrowRight = document.querySelector('.project__arrow-right')
    const projectAreaLeft = document.querySelector('.project__arrow-area-left')
    const projectAreaRight = document.querySelector('.project__arrow-area-right')

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

    // -- start about functions -- //

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

    // -- end about functions -- //

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

    // -- start change project  -- //

    projectArrowLeft.addEventListener('click', () => changeProject('prev'))
    projectArrowRight.addEventListener('click', () => changeProject('next'))

    const changeProject = (direct) => {
        project.classList.add('project-change')

        setTimeout(() => {
            if (document.querySelector('.project__title').textContent == 'Digital pathology Lab - Rebranding') {
                document.querySelector('.project__title').textContent = 'American Hospital tbilisi'
                document.querySelectorAll('.project__item img').forEach(e => {
                    e.setAttribute('src', 'img/project/project-1.jpg');
                })
            } else {
                document.querySelector('.project__title').textContent = 'Digital pathology Lab - Rebranding'
                document.querySelectorAll('.project__item img').forEach(e => {
                    e.setAttribute('src', 'img/project/project-2.jpg');
                })
            }
        }, 300)

        setTimeout(() => {
            project.classList.remove('project-change')
        }, 400)
    }

    // -- end change project  -- //

    // -- start move project arrow -- //
    projectAreaLeft.addEventListener('mouseenter', () => projectArrowLeft.classList.add('active'))
    projectAreaLeft.addEventListener('mouseleave', () => projectArrowLeft.classList.remove('active'))
    projectAreaRight.addEventListener('mouseenter', () => projectArrowRight.classList.add('active'))
    projectAreaRight.addEventListener('mouseleave', () => projectArrowRight.classList.remove('active'))

    projectAreaLeft.addEventListener('mousemove', (e) => moveProjectArrow(projectArrowLeft, e))
    projectAreaRight.addEventListener('mousemove', (e) => moveProjectArrow(projectArrowRight, e))

    const moveProjectArrow = (arrow, e) => {
        arrow.style.left = e.pageX + "px";
        arrow.style.top = e.pageY + "px";
    }
    // -- end move project arrow -- //

}
