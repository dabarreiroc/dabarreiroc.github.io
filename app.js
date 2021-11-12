const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    // togle nav
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 9 + 1}s`;
            }
        });

        //close symbol after menu is out
        hamburger.classList.toggle('toggle');
    });
}

navSlide();
