const nav = document.querySelector('.header-nav');
const navLinks = nav.querySelector('.header-nav__links');
const navToggler = document.querySelector('.nav-toggler');
const cancelBtn = navToggler.querySelector('.cancel');
const hamburgerBtn = navToggler.querySelector('.hamburger');

const toggleDisplay = (elementName, displayValue) => {
  elementName.style.display = displayValue;
};

let navLinksHeight = navLinks.getBoundingClientRect().height;

navToggler.addEventListener('click', () => {
  navLinksHeight = navLinks.getBoundingClientRect().height;
  cancelBtn.classList.toggle('cancel-active');

  let isActive = cancelBtn.classList.contains('cancel-active');

  if (isActive) {
    nav.style.height = `${navLinksHeight}px`;
    toggleDisplay(cancelBtn, 'flex');
    toggleDisplay(hamburgerBtn, 'none');
  } else {
    nav.style.height = '0px';
    toggleDisplay(hamburgerBtn, 'flex');
    toggleDisplay(cancelBtn, 'none');
  }
});

const footerYear = document.querySelector('.year');
footerYear.innerText = new Date().getUTCFullYear().toString();
