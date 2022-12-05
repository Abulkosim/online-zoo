let body = document.querySelector('body');
let hamburgerMenu = document.querySelector('.hamburger');
let openBurMenu = document.querySelector('.open-bur-menu');
let closeButton = document.querySelector('.open-bur-menu-close');
let overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', () => {
  openBurMenu.style.display = 'block';
  overlay.style.display = 'block'
})

closeButton.addEventListener('click', () => {
  openBurMenu.style.display = 'none'
  overlay.style.display = 'none'
})

overlay.addEventListener('click', () => {
  openBurMenu.style.display = 'none'
  overlay.style.display = 'none'
})
