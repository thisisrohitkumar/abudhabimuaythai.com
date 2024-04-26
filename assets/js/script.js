const hamburger = document.querySelector('.hamburger')
let hamburger_img = document.querySelector('.hamburger img')

const toggleHamburger = () => {
    
}

hamburger.addEventListener('click', () => {
    
    const nav = document.querySelector('nav')
    nav.classList.toggle('nav__toggle')

    if(hamburger_img.src.endsWith('assets/images/close_hamburger.png'))
        hamburger_img.src = 'assets/images/hamburger.png'
    else
        hamburger_img.src = 'assets/images/close_hamburger.png'
    
})


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

function close_img_modal(){
    document.querySelector('.img__modal').style.display = 'none';
}

function open_img_modal(){
    document.querySelector('.img__modal').style.display = 'flex';
}
