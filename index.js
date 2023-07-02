// отследить движение курсора и применить движение изображения
document.addEventListener('mousemove', e => {
  Object.assign(document.documentElement, {
    style: `
      --move-x: ${(e.clientX - window.innerWidth / 2) * -.006}deg;
      --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
    `
  })
});