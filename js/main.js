if (document.querySelector('.portfolio__item')) {

    const burgerOpen = document.querySelector('.header__burger-open')
    const burgerClose = document.querySelector('.header__burger-close')
    const portfolio = document.querySelector('.portfolio')
    const portfolioItems = document.querySelectorAll('.portfolio__item')
    const startOverlay = document.querySelector('.start-overlay-circle')
    const overlay = document.querySelector('.overlay-circle')
    const project = document.querySelector('.project')
    const html = document.querySelector('html')
    const body = document.querySelector('body')
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.classList.add('enter')
            item.classList.remove('leave')
        })

        item.addEventListener('mouseleave', () => {
            item.classList.remove('enter')
            item.classList.add('leave')
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
            }, 2600)
        })
    })

    burgerClose.addEventListener('click', () => {
        if (project.classList.contains('active')) {
            toggleProject()
            html.style.overflow = 'initial'
        }
    })


    const toggleProject = () => {
        portfolio.classList.toggle('hidden')
        body.classList.toggle('black')
        project.classList.toggle('active')
        burgerOpen.classList.toggle('active')
        burgerClose.classList.toggle('active')
    }

}
