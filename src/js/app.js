import * as flsFunctions from "./modules/functions.js";
import * as lazyLoad from "./modules/lazyload.js";

flsFunctions.isWebp();
lazyLoad.lazyLoad();

document.querySelector('.header__collapse').addEventListener('click', function () {
    document.querySelector('.header').classList.toggle('open');
});

document.querySelector('.sidebar__collapse').addEventListener('click', function () {
    document.querySelector('.sidebar').classList.toggle('open');
});


document.querySelectorAll(".has-dropdown a i").forEach((e) => {
    e.addEventListener('click', function (i) {
        i.preventDefault();

        e.classList.toggle("active");
        let panel = e.parentElement.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
})



// materialize
document.addEventListener('DOMContentLoaded', function () {
    var elemsTabs = document.querySelectorAll('.tabs-btn');
    var instanceTabs = M.Tabs.init(elemsTabs, {});

    var elemsDropdown = document.querySelectorAll('.dropdown-trigger');
    var instancesDropdown = M.Dropdown.init(elemsDropdown, {
        alignment: 'right',
        container: '.langDrop'
    });
});


// swiper
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});