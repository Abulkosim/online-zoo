let body = document.querySelector('body');
let hamburgerMenu = document.querySelector('.hamburger');
let openBurMenu = document.querySelector('.open-bur-menu');
let closeButton = document.querySelector('.open-bur-menu-close');

hamburgerMenu.addEventListener('click', () => {
  openBurMenu.style.display = 'block';
})

closeButton.addEventListener('click', () => {
  openBurMenu.style.display = 'none'
})

