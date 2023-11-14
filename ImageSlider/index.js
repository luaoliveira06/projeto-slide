// Buascar os elementos 
const prev = document.querySelector('#prev');
const netx = document.querySelector('#button#netx');
const slides = document.querySelectorAll('.slides');


// configuração do autoplay
const auto = true;
// intervalo de transição
const Intervalo = 2000;
// Exibição do intervalo
let temporizador;

// Eventos
prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

function nextSlide() {
    // Localizando a classe atual
    const atual = document.querySelector('.atual');
    // Remover a classe atual do elemento selecionado 
    atual.classList.remove('atual');

// verificar se extite um proximo elemento
if (atual.nextElementSibling){
    atual.nextElementSibling.classList.add('atual');
} else {
slides[0].classList.add('atual');
}
}

function prevSlide() {
     // Localizando a classe atual
     const atual = document.querySelector('.atual');
     // Remover a classe atual do elemento selecionado 
     atual.classList.remove('atual');
   
    if (atual.previousElementSibling){
        atual.previousElementSibling.classList.add('atual');
        
    } else {
        slides[slides.length-1].classList.add('atual');
    }
}
// controle de autoplay
if (auto) {
    // Ativa a função nextSlide() a cada tempo do intervalo
     temporizador = setInterval(nextSlide, Intervalo)
}
