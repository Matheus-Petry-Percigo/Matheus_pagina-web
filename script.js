let canPlaySound = true;
const cooldownTime = 1000; // Tempo de espera em milissegundos (1000ms = 1 segundo)

document.addEventListener('click', function() {
    // Se o cooldown estiver ativo, não faz nada
    if (!canPlaySound) return;

    // Toca o som
    const som = new Audio('caminho-do-seu-som/clique.mp3');
    som.volume = 0.5;
    som.play().catch(erro => console.log("YTDown.com_YouTube_Som-de-clique-de-mouse-Efeito-Sonoro_Media_XU7grE8Yvsg_006_128k.mp3", erro));

    // Ativa o cooldown e bloqueia novos sons
    canPlaySound = false;

    // Libera o som novamente após o tempo definido
    setTimeout(function() {
        canPlaySound = true;
    }, cooldownTime);
});
