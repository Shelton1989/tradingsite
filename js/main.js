document.addEventListener('DOMContentLoaded', function() {
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems);
    M.AutoInit();
    AOS.init();

    fadeIn();
});
function fadeIn() {
    let headTitle = document.querySelector('#header-title');
    let headSubtitle = document.querySelector('#header-subtitle');
    headTitle.classList.add('animated', 'flipInX', 'fast');
    headSubtitle.classList.add('animated', 'flipInX', 'fast', 'delay-1s');
}
function setActive(e) {
    let links = document.getElementsByClassName('nav-link');
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }
    e.classList.add('active');
}