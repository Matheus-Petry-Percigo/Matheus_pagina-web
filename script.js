// Track positions
let current = 0        // the eased scroll value
let target = 0         // the actual scroll position
const ease = 0.1       // easing factor

// Reference to the wrapper that gets translated
const container = document.querySelector('.scroll-container')

// Sync body height so the browser thinks the page is scrollable
function updateBodyHeight() {
  document.body.style.height = `${container.getBoundingClientRect().height}px`
}

// Listen for scroll and update the target value
window.addEventListener('scroll', () => {
  target = window.scrollY
})

// Animation loop
function loop() {
  const diff = target - current
  current += diff * ease   // ease toward the target

  // Apply transform to simulate scrolling
  container.style.transform = `translate3d(0, -${current}px, 0)`

  requestAnimationFrame(loop)
}

// Init
updateBodyHeight()
window.addEventListener('resize', updateBodyHeight)
loop()