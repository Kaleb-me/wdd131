const photos = document.querySelector('.photos');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');
const menu = document.querySelector('nav');
const btn = document.querySelector('.menu-btn');

photos.addEventListener('click', openModal);

function openModal(e) {
    
    const img = e.target;
    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm','full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
}

closeButton.addEventListener('click', () => {modal.close();});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

btn.addEventListener('click', function() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change')
})