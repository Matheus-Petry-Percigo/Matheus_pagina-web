document.addEventListener('click', function() {
    const som = new Audio('YTDown.com_YouTube_Som-de-clique-de-mouse-Efeito-Sonoro_Media_XU7grE8Yvsg_006_128k.mp3');
    som.volume = 0.5; // Ajusta o volume de 0.0 até 1.0
    som.play().catch(function(erro) {
        console.log("O navegador bloqueou o áudio até a primeira interação:", erro);
    });
});
