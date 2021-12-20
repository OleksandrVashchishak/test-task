

// -- start change project  -- //
projectAreaLeft.addEventListener('click', () => changeProject())
projectAreaRight.addEventListener('click', () => changeProject())

const changeProject = () => {
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
        getHeightProject()
    }, 300)
    getHeightProject()
    setTimeout(() => {
        project.classList.remove('project-change')
    }, 400)
}

const getHeightProject = () => {
    const wrapperActive = document.querySelector('.project__wrapper')
    projectAreaLeft.style.height = wrapperActive.scrollHeight + 'px'
    projectAreaRight.style.height = wrapperActive.scrollHeight + 'px'
}
// -- end change project  -- //

projectWrapper.addEventListener('scroll', function () {
    projectItems.forEach(item => {
        projectItemVisible(item);
    })
});

const projectItemVisible = (target) => {
    const targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
    },

        windowPosition = {
            top: window.pageYOffset,
            bottom: window.pageYOffset + document.documentElement.clientHeight
        };

    if (targetPosition.bottom > windowPosition.top &&
        targetPosition.top < windowPosition.bottom) {
        target.classList.add('active')
    } else {
        target.classList.remove('active')
    }
};

