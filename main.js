/* mobile nav */
const navToggle = document.getElementById('navToggle');
const nav       = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

/* gallery filter */
const filterButtons = document.querySelectorAll('.filter button');
const galleryItems  = document.querySelectorAll('#gallery figure');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = btn.dataset.filter;
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    galleryItems.forEach(item => {
      item.style.display = (val === 'all' || item.classList.contains(val)) ? 'block' : 'none';
    });
  });
});

/* google translate */
function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'de',
    includedLanguages: 'de,en,fr,it,es,ru,pl',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE
  }, 'google_translate_element');
}
