// Altere este valor para ajustar o atraso (use valores entre 0.01 e 0.99)
const fatorAtraso = 0.05; 

let mouseX = 0, mouseY = 0; // Posição real do mouse
let cursorX = 0, cursorY = 0; // Posição do cursor personalizado

// Atualiza a posição real do mouse
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animarCursor() {
    // Cálculo do atraso para o eixo X e Y
    cursorX += (mouseX - cursorX) * fatorAtraso;
    cursorY += (mouseY - cursorY) * fatorAtraso;
    
    // Aplica a nova posição no elemento HTML do seu cursor
    meuCursorElemento.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    
    requestAnimationFrame(animarCursor);
}
animarCursor();