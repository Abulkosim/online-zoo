let body = document.querySelector('body');
let hamburgerMenu = document.querySelector('.hamburger');
let openBurMenu = document.querySelector('.open-bur-menu');
let closeButton = document.querySelector('.open-bur-menu-close');
let overlay = document.querySelector('.overlay');
let inputAmount = document.querySelectorAll('.amount-range-individial-input');
let anotherAmount = document.querySelector('.another-amount-input')
let labelAmount = document.querySelectorAll('.amount-range-individial-label');

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

for (let i = 0; i < inputAmount.length; i++) {
  inputAmount[i].addEventListener('click', () => {
    labelAmount.forEach(element => element.style.color = 'black');
    anotherAmount.value = inputAmount[i].value.slice(1);
    labelAmount[i].style.color = '#FE9013';
  })
}

anotherAmount.addEventListener('input', () => {
  let anotherAmountValue = anotherAmount.value;
  for (let k = 0; k < inputAmount.length; k++) {
    if (anotherAmountValue == inputAmount[k].value.slice(1)) {
      labelAmount.forEach(element => element.style.color = 'black');
      inputAmount.forEach(input => input.removeAttribute('checked'))
      labelAmount[k].style.color = '#FE9013';
      inputAmount[k].checked = 'true';
    }
  }
})















