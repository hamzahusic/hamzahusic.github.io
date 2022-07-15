
const hamburger = document.getElementById('hamburger');
const lista = document.getElementById('lista');
const lineOne = document.getElementById('line1');
const lineTwo = document.getElementById('line2');
const lineThree = document.getElementById('line3');

const about = document.getElementById('About');
const projects = document.getElementById('Projects');
const contact = document.getElementById('contact');
//Ove sve iznad konstante su za navbar

let backToTop = document.getElementById('backOnTop');

hamburger.addEventListener('click', () => {
    lista.classList.toggle('active');
    lineOne.classList.toggle('okreniLijevo');
    lineTwo.classList.toggle('nema');
    lineThree.classList.toggle('okreniDesno');
})

about.addEventListener('click', () => {
    lista.classList.toggle('active');
    lineOne.classList.toggle('okreniLijevo');
    lineTwo.classList.toggle('nema');
    lineThree.classList.toggle('okreniDesno');
})
projects.addEventListener('click', () => {
    lista.classList.toggle('active');
    lineOne.classList.toggle('okreniLijevo');
    lineTwo.classList.toggle('nema');
    lineThree.classList.toggle('okreniDesno');
})
contact.addEventListener('click', () => {
    lista.classList.toggle('active');
    lineOne.classList.toggle('okreniLijevo');
    lineTwo.classList.toggle('nema');
    lineThree.classList.toggle('okreniDesno');
})

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        backToTop.style.display = "block";
    }
    else{
        backToTop.style.display = "none";
    }
}

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})