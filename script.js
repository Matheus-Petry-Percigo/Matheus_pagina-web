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

 window.addEventListener('scroll', () => {
            // Quanto o usuário já rolou para baixo
            const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
            
            // Altura total da página menos a altura da tela visível
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            
            // Cálculo da porcentagem (entre 0 e 100)
            const scrolled = (winScroll / height) * 100;
            
            // Aplica a porcentagem na largura da barra de progresso
            document.getElementById('myProgressBar').style.width = scrolled + '%';

 })


new Lenis({

    autoRaf: true,
    autoToggle: true,
    anchors: true,
    allowNestedScroll: true,
    naiveDimensions: true,
    stopInertiaOnNavigate: true
})



const cursorCircle = document.getElementById("cursor-circle");

let mouseX = 0;
let mouseY = 0;

let circleX = 0;
let circleY = 0;

// Detecta a posição do mouse
document.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Faz o círculo perseguir o mouse suavemente
function animateCircle() {
    circleX += (mouseX - circleX) * 0.15;
    circleY += (mouseY - circleY) * 0.15;

    cursorCircle.style.left = circleX + "px";
    cursorCircle.style.top = circleY + "px";

    requestAnimationFrame(animateCircle);
}

animateCircle();