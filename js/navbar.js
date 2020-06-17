const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelectorAll('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    hamburger.addEventListener('click', () => {
        nav.forEach((nav, index) => {
            nav.classList.toggle('nav-active');
        });
        console.log('nav-toggled');
        navLinks.forEach((link, index) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 5 + 1.0}s`
            }
        });
    });

};
navSlide();
