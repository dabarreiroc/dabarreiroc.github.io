const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');
    const nav_menu = document.querySelector('.home-div');
    const navLinks = document.querySelectorAll('.nav-links li');

    // togle nav
    hamburger.addEventListener('click', () => {

        //block scroll on the back when the menu is opened
        nav_menu.classList.toggle('block-scroll');

        nav.classList.toggle('nav-active');

        // animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            }
            else {
                link.style.animation = `navLinkFade 1s ease forwards ${index / 10 + 1}s`;
            }
        });

        //close symbol after menu is out
        hamburger.classList.toggle('toggle');

    });
}

navSlide();


// When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar
const hideNavBar = () => {
    // THIS IS FOR DESKTOP DEVICES
    // Set a previous position variable that is the position of Y on the page
    var prevScrollpos = window.pageYOffset;
    // create on scroll function
    window.onscroll = function () {
        // when scrolling update continuosly the position of the Y 
        var currentScrollPos = window.pageYOffset;
        // when going downwards just hide the navbar
        if (prevScrollpos > currentScrollPos) {
            document.querySelector('.main-head').style.top = "0"
        }
        // when going upwards, if prevscroll < currentScroll then show the navbar again
        else {
            document.querySelector('.main-head').style.top = "-15vh"
        }
        // after checking update the position of the previous position with the last read value 
        prevScrollpos = currentScrollPos;
    }
    // THIS IS FOR MOBILE DEVICES, THERE IS NO SCROLL ONLY TOUCH

}

hideNavBar();


