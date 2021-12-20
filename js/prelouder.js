   // -- start prelouder -- //
   const loadingInterval = setInterval(() => {
    if (onloadImages() < 3) {
        loading()
        clearInterval(loadingInterval);
    }
}, 50);

const onloadImages = () => {
    let counter = 0
    const portfolioColumn = portfolio.querySelectorAll('.portfolio__column')
    portfolioColumn.forEach(column => {
        const images = column.querySelectorAll('.portfolio__img')
        images.forEach((img, i) => {
            if (i < 5) {
                if (img.height == 0 || img.width == 0) {
                    counter++
                }
            }
        })
    })
    return counter
}

const loading = () => {
    const preloaderLogo = document.querySelector('.prelouder__logo')
    const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    try {
        if (loadTime > 1000) {
            body.classList.add('load-content-late')
        } else {
            body.classList.add('load-content')
        }

        if (loadTime > 1500) {
            preloaderLogo.classList.add('active')
        } else {
            setTimeout(() => {
                preloaderLogo.classList.add('active')
            }, 1600 - loadTime);
        }

    } catch {
        body.classList.add('load-content')
    }
}
// -- end prelouder -- //