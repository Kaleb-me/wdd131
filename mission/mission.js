
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        logo.setAttribute('src', 'byui-logo-white.png')
        body.classList.toggle("dark")
        
    } else {
        logo.setAttribute('src', 'byui-logo-blue.webp')
        body.classList.toggle("dark")
    }
}           