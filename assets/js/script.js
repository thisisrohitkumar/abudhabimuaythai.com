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