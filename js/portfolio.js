    // -- start portfolio -- //
    portfolioItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()
            const link = item.getAttribute('href')
            if (link) {
                history.pushState(historyState, historyTitle, link);
            }
            openProject()
        })
    })

    const openProject = () => {
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


    }

    const toggleProject = () => {
        portfolio.classList.toggle('hidden')
        body.classList.toggle('black')
        project.classList.toggle('active')
        burgerOpen.classList.toggle('active')
        burgerClose.classList.toggle('active')
        getHeightProject()
        projectItems.forEach(item => {
            projectItemVisible(item);
        })
    }
    // -- end portfolio -- //