const revealLeft = document.querySelectorAll(".reveal-left");
const revealRight = document.querySelectorAll(".reveal-right");
const revealBottom = document.querySelectorAll(".reveal-bottom");
const revealTop = document.querySelectorAll(".reveal-top");
const fadeIn = document.querySelectorAll(".fade-in");
const pop = document.querySelectorAll(".pop");
const shadow = document.querySelectorAll(".shadow");
const grow = document.querySelectorAll(".grow");

const scrollAnim = () => {
    let windowHt = window.innerHeight;

    revealLeft.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if (element.classList.contains('header-anim') && window.innerWidth > 875) {
            element.classList.add('revealed');
        } else {
            if(elPos < windowHt/1.2) {
                element.classList.add('revealed')
            }
        }
    });

    revealRight.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if (element.classList.contains('header-anim') && window.innerWidth > 875) {
            element.classList.add('revealed');
        } else {
            if(elPos < windowHt/1.2) {
                element.classList.add('revealed')
            }
        }
    });

    revealBottom.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if (element.classList.contains('header-anim') && window.innerWidth > 875) {
            element.classList.add('revealed');
        } else {
            if(elPos < windowHt/1.2) {
                element.classList.add('revealed')
            }
        }
    });

    revealTop.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if (element.classList.contains('header-anim') && window.innerWidth > 875) {
            element.classList.add('revealed');
        } else {
            if(elPos < windowHt/1.2) {
                element.classList.add('revealed')
            }
        }
    });

    fadeIn.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if (element.classList.contains('header-anim') && window.innerWidth > 875) {
            element.classList.add('revealed');
        } else {
            if(elPos < windowHt/1.2) {
                element.classList.add('revealed')
            }
        }
    });

    pop.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if (element.classList.contains('header-anim') && window.innerWidth > 875) {
            element.classList.add('revealed');
        } else {
            if(elPos < windowHt/1.2) {
                element.classList.add('revealed')
            }
        }
    });

    shadow.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if (element.classList.contains('header-anim') && window.innerWidth > 875) {
            element.classList.add('revealed');
        } else {
            if(elPos < windowHt/1.2) {
                element.classList.add('revealed')
            }
        }
    });

    grow.forEach(element => {
        let elPos = element.getBoundingClientRect().top;
        if (element.classList.contains('header-anim') && window.innerWidth > 875) {
            element.classList.add('revealed');
        } else {
            if(elPos < windowHt/1.2) {
                element.classList.add('revealed')
            }
        }
    });
};

document.addEventListener("DOMContentLoaded", scrollAnim);
window.addEventListener('scroll', scrollAnim);