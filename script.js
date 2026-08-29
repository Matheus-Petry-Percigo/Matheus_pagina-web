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
// Lista de flores que vão aparecer (você pode mudar os emojis se quiser)
const flowers = ['🌸', '🌼', '🌹', '🌺', '🌻'];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

window.addEventListener('mousemove', (e) => {
  // Cria uma flor a cada movimento do mouse
  if (Math.random() < 0.4) { // Controla a densidade (0.4 = 40% de chance por movimento)
    particles.push({
      x: e.clientX,
      y: e.clientY,
      text: flowers[Math.floor(Math.random() * flowers.length)], // Escolhe uma flor aleatória
      size: Math.random() * 15 + 10, // Tamanho da flor (entre 10px e 25px)
      speedX: (Math.random() - 0.5) * 1.5, // Balanço lateral
      speedY: Math.random() * 1 + 0.5, // Faz a flor cair levemente (gravidade)
      rotation: Math.random() * Math.PI * 2, // Rotação inicial
      rotationSpeed: (Math.random() - 0.5) * 0.05, // Velocidade do giro
      alpha: 1 // Opacidade inicial
    });
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    
    // Atualiza posição e rotação
    p.x += p.speedX;
    p.y += p.speedY;
    p.rotation += p.rotationSpeed;
    p.alpha -= 0.015; // Velocidade do sumiço (menor = rastro mais longo)

    // Desenha a flor com rotação e transparência
    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.font = `${p.size}px serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(p.text, 0, 0);
    ctx.restore();

    // Remove quando sumir completamente
    if (p.alpha <= 0) {
      particles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animate);
}

animate();
