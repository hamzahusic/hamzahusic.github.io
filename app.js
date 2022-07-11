
const hamburger = document.getElementById('hamburger');
const lista = document.getElementById('lista');

hamburger.addEventListener('click', () => {
    lista.classList.toggle('active');
})