const slider = document.querySelectorAll('.slider');
const painel = document.querySelectorAll('.painel-mobile');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

let currentSlide = 0;

function telaPequena (){
    return window.matchMedia("(max-width: 789px)").matches;
}

let Slide = 0; 

if (telaPequena()){
    Slide = painel;
} else {
    Slide = slider;
}

function hideSlider(){
    Slide.forEach(item => item.classList.remove('on'));
}

function showSlider(){
    Slide[currentSlide].classList.add('on');
}

function nextSlider(){
    hideSlider()
    if(currentSlide === Slide.length -1){
        currentSlide = 0;
    }
    else{
        currentSlide++;
    }
    showSlider();
}

function prevSlider(){
    hideSlider()
        if(currentSlide === 0){
            currentSlide = Slide.length -1;
        }
        else {
            currentSlide--;
        }
    showSlider();
}


btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);


function removeDivFilha() {
    if (telaPequena()) {
        var divContainerPainel = document.getElementById('container-slider');
        var divSlider1 = document.getElementById('slider-1');
        var divSlider2 = document.getElementById('slider-2');
        
        
        if (divSlider1 && divSlider2) {
           
            divSlider1.replaceWith(...divSlider1.childNodes);
            divSlider2.replaceWith(...divSlider2.childNodes);
        }
    }
}


window.addEventListener('load', removeDivFilha);
window.addEventListener('resize', removeDivFilha);

// menu mobile

const menuItens = document.querySelector('.container-menu');
const titulo = document.getElementById('titulo');

function myFunction(x) {
    x.classList.toggle("change");

    if(menuItens.style.display === 'block'){
        menuItens.style.display = 'none';
        titulo.style.display = 'block'
    }
    else{
        menuItens.style.display = 'block';
        titulo.style.display = 'none'
    }
}

// Slides mobile


