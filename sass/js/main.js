const navToggleLabel = document.querySelector(".nav-toggle-label");

let menuOpen = false;

navToggleLabel.addEventListener('click', () => {
    if (!menuOpen) {
    navToggleLabel.classList.add('open');
    menuOpen = true;
    } else {
        navToggleLabel.classList.remove('open');
        menuOpen = false;
    }
})