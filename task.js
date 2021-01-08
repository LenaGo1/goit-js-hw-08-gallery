
import images from './gallery-items.js';

function createGalleryMarkup(images) {
    return images.map(({preview, original, description}) => {
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
        </li>
            `;
    })
        .join('');
    
}
const galleryContainer = document.querySelector('.js-gallery');
const imagesMarkup = createGalleryMarkup(images);

galleryContainer.insertAdjacentHTML('beforeend', imagesMarkup);
// let selectedImage = null;

// galleryContainer.addEventListener('click', onImageContainerClick);

// function onImageContainerClick(evt) {
//     if (evt.target.nodeName !== 'IMG') {
//         return
//     }

//     const currentActiveIMG = document.querySelector('.tags__img--active');

//     if (currentActiveIMG) {
//         currentActiveIMG.classList.remove('tags__img--active')
//     }

//     const nextActiveImg = evt.target;
//     nextActiveImg.classList.add('tags__img--active');
//     selectedImage = nextActiveImg.dataset.value;

//     console.log(evt.target);
//     console.log(evt.target.nodeName);
//     console.log(selectedImage);
// }