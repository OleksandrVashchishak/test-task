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