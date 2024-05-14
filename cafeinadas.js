const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-btn');
const btnNext = document.getElementById('next-btn');

let currentSlide = 0;

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'));
}

function showSlider(){
    slider[currentSlide].classList.add('on');
}

function nextSlider(){
    hideSlider()
    if(currentSlide === slider.length -1){
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
            currentSlide = slider.length -1;
        }
        else {
            currentSlide--;
        }
    showSlider();
}

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);







/*const carrossel = document.querySelector(".carrossel");
const setasBtn = document.querySelectorAll(".container-carrossel .carrossel-btn");
const larguraPainel1 = carrossel.querySelector(".painel").offsetWidth;
const carrosselChildrens = [...carrossel.children];

let arrastando = false, startX, startScrollLeft;

let painelPerView = Math.round(carrossel.offsetWidth / larguraPainel1);

carrosselChildrens.slice(-painelPerView).reverse().forEach(painel => {
    carrossel.insertAdjacentHTML("afterbegin", painel.outerHTML);
});


carrosselChildrens.slice(0, painelPerView).forEach(painel => {
    carrossel.insertAdjacentHTML("beforeend", painel.outerHTML);
});


setasBtn.forEach(btn => {
    btn.addEventListener("click", () =>{
        carrossel.scrollLeft += btn.id === "left" ? -larguraPainel1 : larguraPainel1;
    })
});


const dragStart = (e) => {
    arrastando = true;
    carrossel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carrossel.scrollLeft;
}

const dragging = (e) => {
    if(!arrastando) return;
    carrossel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    arrastando = false;
    carrossel.classList.remove("dragging");
}

const infiniteScroll = () =>{
  
    if(carrossel.scrollLeft === 0){
        carrossel.classList.add("no-transition");
        carrossel.scrollLeft = carrossel.scrollWidth - ( 2 * carrossel.offsetWidth);
        carrossel.classList.remove("no-transition");
    } 
    else{ 
        if(Math.ceil(carrossel.scrollLeft) === carrossel.scrollWidth - carrossel.offsetWidth){
            carrossel.classList.add("no-transition");
            carrossel.scrollLeft = carrossel.offsetWidth;
            carrossel.classList.remove("no-transition");
        }
    }
}

carrossel.addEventListener("mousedown", dragStart);
carrossel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carrossel.addEventListener("scroll", infiniteScroll);*/