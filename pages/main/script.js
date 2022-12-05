let body = document.querySelector('body');
let hamburgerMenu = document.querySelector('.hamburger');
let openBurMenu = document.querySelector('.open-bur-menu');
let closeButton = document.querySelector('.open-bur-menu-close');
let overlay = document.querySelector('.overlay');
let testimonialsChild = document.querySelectorAll('.testimonials-comments-child');


hamburgerMenu.addEventListener('click', () => {
  openBurMenu.style.display = 'block';
  overlay.style.display = 'block';
})

closeButton.addEventListener('click', () => {
  openBurMenu.style.display = 'none';
  overlay.style.display = 'none';
})

overlay.addEventListener('click', () => {
  openBurMenu.style.display = 'none';
  overlay.style.display = 'none';
})

for (let i = 0; i < testimonialsChild.length; i++) {
  testimonialsChild[i].addEventListener('click', () => {
    overlay.style.display = 'block';
    testimonialsChild[i].classList.add('popup-child');
  })
}

for (let i = 0; i < testimonialsChild.length; i++) {
  overlay.addEventListener('click', () => {
    testimonialsChild[i].classList.remove('popup-child');
  })
}




