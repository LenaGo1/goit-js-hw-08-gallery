
import images from './gallery-items.js';

const galleryContainer = document.querySelector('.js-gallery');
const imagesMarkup = createGalleryMarkup(images);
const lightboxRef = document.querySelector('.js-lightbox');
const imageLightbox = document.querySelector('.lightbox__image');
const closeLightboxBtn = document.querySelector('button[data-action="close-lightbox"]');
const lightboxOverlayRef = document.querySelector('.lightbox__overlay')

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);

galleryContainer.addEventListener('click', onContainerClick);
closeLightboxBtn.addEventListener('click', onCloseLightbox);
lightboxOverlayRef.addEventListener('click', onCloseLightbox);
window.addEventListener('keydown', onPressEscape);  

function createGalleryMarkup(images) {
    return images.map(({preview, original, description}) => {
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
function onContainerClick(evt) {
    const isGalleryImage = evt.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
    return;
    }

    imageLightbox.setAttribute('src', evt.target.dataset.source);
    imageLightbox.setAttribute('alt', evt.target.alt);

    lightboxRef.classList.add('is-open');
}

function onCloseLightbox() {
    lightboxRef.classList.remove('is-open');
    imageLightbox.setAttribute('src', '#');
    imageLightbox.setAttribute('alt', '');
}

function onPressEscape(evt) {
    if (evt.key == ("Escape" || "Esc")) {
        onCloseLightbox();
    }
}