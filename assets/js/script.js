const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
    const nav = document.querySelector('nav')
    nav.classList.toggle('nav__toggle')
    hamburger.classList.toggle('ham__rot')
})