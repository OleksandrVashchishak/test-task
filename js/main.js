if (document.querySelector('.portfolio__item')) {
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
                portfolio.classList.add('hidden')
                body.classList.add('black')
                project.classList.add('active')
            }, 500)
            setTimeout(() => {
                overlay.classList.add('hidden')
            }, 2500)
            setTimeout(() => {
                overlay.classList.remove('hidden')
                overlay.classList.remove('active')
            startOverlay.classList.remove('active')
            }, 2600)
        })
    })
}




