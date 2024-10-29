let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length; // Deve ser 11 para o caso atual

// Função para mover o slide com loop infinito
function moveSlide(step) {
    currentIndex += step;

    // Retorna ao primeiro slide se passar do último
    if (currentIndex >= totalSlides) {
        currentIndex = 0; // Volta para o primeiro slide
    }

    // Volta ao último slide se for antes do primeiro
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1; // Volta para o último slide
    }
                                    //Fiz uma alteração no cálculo
    const offset = -currentIndex * (100 / totalSlides); // Muda para o próximo slide
    document.querySelector('.carousel-slide').style.transform = `translateX(${offset}%)`;
}

// Função para mudar o slide automaticamente
function autoSlide() {
    moveSlide(1);
}

// Chama autoSlide a cada 3 segundos
setInterval(autoSlide, 3000);

// Eventos de clique para os botões
document.querySelector('.prev').onclick = () => moveSlide(-1);
document.querySelector('.next').onclick = () => moveSlide(1);
