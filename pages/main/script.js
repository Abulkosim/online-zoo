let body = document.querySelector('body');
let hamburgerMenu = document.querySelector('.hamburger');
let openBurMenu = document.querySelector('.open-bur-menu');
let closeButton = document.querySelector('.open-bur-menu-close');
let overlay = document.querySelector('.overlay');
let testimonialsChild = document.querySelectorAll('.testimonials-comments-child');
let leftButton = document.querySelector('.left-button');
let rightButton = document.querySelector('.right-button');
let firstContainer = document.querySelector('.pets-pictures-container-first');
let secondContainer = document.querySelector('.pets-pictures-container-second');
let slider = document.querySelector('.testimonials-slider-input');
let one = document.querySelector('.testimonials-first');
let two = document.querySelector('.testimonials-second');
two.style.display = 'none';


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

leftButton.addEventListener('click', () => {
  if (secondContainer.style.display == 'none') {
    firstContainer.style.display = 'none';
    secondContainer.style.display = 'block';
  } else {
    firstContainer.style.display = 'block';
    secondContainer.style.display = 'none';
  }
})

rightButton.addEventListener('click', () => {
  if (secondContainer.style.display == 'none') {
    firstContainer.style.display = 'none';
    secondContainer.style.display = 'block';
  } else {
    firstContainer.style.display = 'block';
    secondContainer.style.display = 'none';
  }
})

slider.addEventListener('change', () => {
  if (two.style.display == 'none') {
    one.style.display = 'none';
    two.style.display = 'block';
  } else {
    two.style.display = 'none';
    one.style.display = 'block';
  }
})