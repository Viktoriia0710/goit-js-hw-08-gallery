import galleryImage from './gallery-items.js';

const refs = {
  gallery: document.querySelector('.js-gallery'),
  modal: document.querySelector('.js-lightbox'),
  modalImg: document.querySelector('.lightbox__image'),
}

// listeners
refs.gallery.addEventListener('click', toOpenModal);
refs.modal.addEventListener('click', closeModal);

// Gallery
function createGalleryMarkup(galleryImage) {
  return galleryImage
  .map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
    <a
    class="gallery__link"
    href="${original}"
    >
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>`
  })
  .join('');
}
const cardsMarkup = createGalleryMarkup(galleryImage);
refs.gallery.insertAdjacentHTML('beforeend', cardsMarkup);

// Modal and events
function toOpenModal(e) {
  if(!e.target.classList.contains('gallery__image')) {
    return;
  };
  e.preventDefault()
  refs.modal.classList.add('is-open');
  refs.modalImg.setAttribute('src', e.target.getAttribute('data-source'));
  window.addEventListener('keydown', onButtonKey);
}

function toCloseModal() {
  refs.modal.classList.remove('is-open');
  refs.modalImg.removeAttribute('src');
  window.removeEventListener('keydown', onButtonKey);
}

function closeModal(e) {
  if(e.target.classList.contains('lightbox__overlay') ||
     e.target.classList.contains('lightbox__button')) {
    toCloseModal();
  };
}

function onButtonKey(e) {
  if(e.code === 'Escape') {
    toCloseModal();
  };
}