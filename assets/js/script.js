// open close hamburger js

const hamburger = document.querySelector('.hamburger')
let hamburger_img = document.querySelector('.hamburger img')

hamburger.addEventListener('click', () => {
    
    const nav = document.querySelector('nav')
    nav.classList.toggle('nav__toggle')

    const menuText = document.querySelector('.hamburger small')
    menuText.classList.toggle('hide')

    if(hamburger_img.src.endsWith('assets/images/close_hamburger.png'))
        hamburger_img.src = 'assets/images/hamburger.png'
    else
        hamburger_img.src = 'assets/images/close_hamburger.png'
    
})


// fighter page js 


function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");

    // Remove "active" class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Add "active" class to the clicked tablink
    evt.currentTarget.classList.add("active");
}

// gallery page js 

function openGTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("gtabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");

    // Remove "active" class from all tablinks
    tablinks = document.getElementsByClassName("gtablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Add "active" class to the clicked tablink
    evt.currentTarget.classList.add("active");
}

// image modal open close 

function close_img_modal(){
    document.querySelector('.img__modal').style.display = 'none';
}

function open_img_modal(){
    document.querySelector('.img__modal').style.display = 'flex';
}

// gallery page js 

function close_img_modalG(){
    document.querySelector('.img__modalG').style.display = 'none';
}

function open_img_modalG(){
    document.querySelector('.img__modalG').style.display = 'flex';
}

const heroSliderImg = document.querySelector('#heroSliderImg')

if(window.innerWidth <= 900){
    heroSliderImg.src = 'assets/images/sliders/hero_slider_1_mobile.jpg'
}

else{
    heroSliderImg.src = 'assets/images/sliders/hero_slider_1.jpg'
}

// Header visibility on scroll
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll down
        document.getElementById("header").classList.add("header__scroll__up");
        document.getElementById("header").classList.remove("header__scroll__down");
    } else {
        // Scroll up
        document.getElementById("header").classList.add("header__scroll__down");
        document.getElementById("header").classList.remove("header__scroll__up");
    }
    
    lastScrollTop = currentScroll;
});

// Back to Top Btn JS
var backToTopButton = document.getElementById("backToTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};


  

