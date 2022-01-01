import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createGalery(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>`;
    }).join('');
};
const galleryContainerRef = document.querySelector('.gallery');
const cardsMarkUp = createGalery(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", cardsMarkUp);

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionType: 'attr', captionDelay: 250, });