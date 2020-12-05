// make the contact items wave/jump after scrolling
document.querySelector('.cta-button').addEventListener('click', function(e) {
  const contactItems = document.querySelectorAll('.contact-info li');
  setTimeout(() => contactItems[0].classList.add('pulsing'), 700);
  setTimeout(() => contactItems[1].classList.add('pulsing'), 850);
  setTimeout(() => contactItems[2].classList.add('pulsing'), 1000);
  setTimeout(() => contactItems[3].classList.add('pulsing'), 1150);
  setTimeout(() => contactItems.forEach(el => el.classList.remove('pulsing')), 1400);
});

window.addEventListener('load', () => {
  // animate the word bubble
  setTimeout(() => document.querySelector('.speech').classList.remove('unspoken'), 500);
  // lazy-load in all background images
  document.querySelectorAll('.js-lazyload-bg').forEach(el => {
    const datasrc = el.dataset.bgImage;
    el.style.backgroundImage = `url(img/${datasrc})`;
  });
});
