
const hamburger = document.getElementById('hamburger');
const lista = document.getElementById('lista');
const lineOne = document.getElementById('line1');
const lineTwo = document.getElementById('line2');
const lineThree = document.getElementById('line3');

hamburger.addEventListener('click', () => {
    lista.classList.toggle('active');
    lineOne.classList.toggle('okreniLijevo');
    lineTwo.classList.toggle('nema');
    lineThree.classList.toggle('okreniDesno');
})