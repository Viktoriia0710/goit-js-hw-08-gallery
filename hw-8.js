import galleryImages from './gallery-items.js';

const gallery = document.querySelector('.js-gallery');
const cardsMarkup = createGalleryImages(galleryImages);
gallery.addEventListener('click', galleryClick);


function galleryClick(e) {
    if (!e.target.classList.contains('gallery__image')) {
        return;
    }
    const lightboxEl = e.target;
    lightboxEl.classList.add("is-active");
    console.log(e.target);
};



function createGalleryImages(galleryImages) {
    return galleryImages.map(({ preview, original, description }) => {
        return ` 
        <li class="gallery__item">
            <a
            class="gallery__link"
            href="#"
        >
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
            </a>
        </li>
        `;
    })
        .join('');
}
gallery.insertAdjacentHTML('beforeend', cardsMarkup);



