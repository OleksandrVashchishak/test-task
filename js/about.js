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