let canPlaySound = true;
const cooldownTime = 300; // Tempo em milissegundos

document.addEventListener('click', function(e) {

    // Se estiver no cooldown, ignora o clique
    if (!canPlaySound) return;

    // Bloqueia imediatamente os próximos cliques
    canPlaySound = false;

    // Verifica se clicou em um link ou botão
    if (e.target.closest('a, button')) {

        // SOM PARA LINKS E BOTÕES
        const som = new Audio('universfield-computer-mouse-click-352734.mp3');
        som.volume = 0.5;
        som.play().catch(erro => console.log("Bloqueio de áudio:", erro));

    } else {

        // SOM PARA CLIQUES NORMAIS
        const som = new Audio('YTDown.com_YouTube_Som-de-clique-de-mouse-Efeito-Sonoro_Media_XU7grE8Yvsg_006_128k.mp3');
        som.volume = 0.5;
        som.play().catch(erro => console.log("Bloqueio de áudio:", erro));

    }

    // Libera o som após o tempo definido
    setTimeout(function() {
        canPlaySound = true;
    }, cooldownTime);

}, true);


window.addEventListener("scroll", () => {
 const scroll = windows.scrolly;
 const alturaDocumento = document.documentElement.scrollHeight;
 const alturaTela = window.innerHeight;
 const alturaScrollavel = alturaDocumento - alturaTela;

 const percentualScroll = (scroll / alturaScrollavel) * 100;

 const elemBarraProgresso = document.querySelector("#progressBar");

 elemBarraProgresso.style.width = `${percentualScroll}%`;

})