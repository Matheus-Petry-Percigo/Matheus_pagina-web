const lenis = new Lenis({
  lerp: 0.1,
  smoothWheel: true,
  autoRaf: true,
})

lenis.on('scroll', ({ animatedScroll, velocity }) => {
  console.log(animatedScroll, velocity)
})