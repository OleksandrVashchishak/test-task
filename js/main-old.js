

document.querySelector('.content-start__item').addEventListener('click', () => {
    document.querySelector('.overlay').classList.add('active')
    document.querySelector('.start-overlay').classList.add('active')
    setTimeout(() => {
        document.querySelector('.content').classList.add('active')
    }, 500)
    setTimeout(() => {
        document.querySelector('.overlay').classList.add('hidden')
    }, 3500)
    setLocation('helthycore.html')
})


function setLocation(curLoc) {
    console.log(history);
    try {
        // history.pushState(null, null, curLoc);
        // return;
        history.replaceState(null, null, curLoc);
    } catch (e) { }
    // location.hash = '#' + curLoc;
}

document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.overlay').classList.remove('active')
    document.querySelector('.start-overlay').classList.remove('active')
    document.querySelector('.content').classList.remove('active')
    setLocation('overlay.html')
})



