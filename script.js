let canPlaySound = true;
const cooldownTime = 300; // Tempo curto em milissegundos para evitar cliques duplos

document.addEventListener('click', function(e) {
    // Impede que o evento seja disparado duplicado em elementos filhos
    e.stopPropagation();

    // Se estiver no cooldown, ignora o clique
    if (!canPlaySound) return;

    // Bloqueia imediatamente os próximos cliques
    canPlaySound = false;

    // Toca o som
    const som = new Audio('YTDown.com_YouTube_Som-de-clique-de-mouse-Efeito-Sonoro_Media_XU7grE8Yvsg_006_128k.mp3');
    som.volume = 0.5;
    som.play().catch(erro => console.log("Bloqueio de áudio:", erro));

    // Libera o som após o tempo definido
    setTimeout(function() {
        canPlaySound = true;
    }, cooldownTime);
}, true); // O "true" aqui ativa a fase de captura, processando o clique antes de qualquer outro elemento
