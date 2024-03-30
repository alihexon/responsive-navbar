const hamburgerElement = document.querySelector('.menu-icon');
const hamburgerPopup = document.querySelector('.js-aside');
const hamburgerPopupOverlay = document.querySelector('.aside-overlay');
const closeButton = document.querySelector('.close-btn');

function openPopup() {
  hamburgerPopup.classList.add('is-visible');
  hamburgerPopup.classList.remove('is-hidden-animation');
  hamburgerPopupOverlay.classList.add('is-visible');
}

function closePopup() {
  hamburgerPopup.classList.add('is-hidden-animation');
  hamburgerPopup.classList.remove('is-visible');
  hamburgerPopupOverlay.classList.remove('is-visible');
}

hamburgerElement.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);