alert('Hey! How are you? This week I couldn\'t finish it on time because I had to prepare for an interview. Could you please check it later? Thanks!');
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




