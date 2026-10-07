const btn = document.querySelector('.menu-btn')
const menu = document.querySelector('nav')

btn.addEventListener('click', function () {
    menu.classList.toggle('hide')
    btn.classList.toggle('change')
})