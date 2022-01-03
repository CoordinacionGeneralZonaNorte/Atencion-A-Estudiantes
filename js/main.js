document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel')
    M.Carousel.init(elementosCarousel, {
        // tiempo de transicion
        duration: 10,
        dist: -80,
        //distancia de imagenes  a los costados
        shift: 5,
        //espaciado dentro
        padding: 5,
        //cantidad de imagenes visibles en pantalla
        numVisible: 3,
        //indicadores
        indicators: true,
        //Iniciar con la primer imagen o no
        noWrape: false

    });
});
