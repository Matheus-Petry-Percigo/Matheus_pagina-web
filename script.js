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




const canvas = document.getElementById('cursor-canvas');
const ctx = canvas.getContext('2d');

let particles = [];

// Ajusta o tamanho do canvas ao redimensionar a tela
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

// Captura o movimento do mouse
window.addEventListener('mousemove', (e) => {
  // Cria 2 partículas por movimento para um efeito mais denso
  for (let i = 0; i < 2; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 5 + 2, // Tamanho da bolinha
      speedX: (Math.random() - 0.5) * 2, // Movimento lateral
      speedY: (Math.random() - 0.5) * 2, // Movimento vertical
      alpha: 1 // Opacidade inicial
    });
  }
});

// Animação do rastro
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    
    // Move a partícula levemente
    p.x += p.speedX;
    p.y += p.speedY;
    
    // Diminui a opacidade (faz sumir aos poucos)
    p.alpha -= 0.02; 

    // Desenha a bolinha na tela
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(232, 229, 55, 1, ${p.alpha})`; // Altere a cor RGB aqui (ex: Azul)
    ctx.fill();

    // Remove partículas invisíveis para não pesar a memória
    if (p.alpha <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animate);
}

animate();
