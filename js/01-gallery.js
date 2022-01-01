import { galleryItems } from './gallery-items.js';
// Change code below this line



function createGalery(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => {
        return `<div class = "gallery__item">
            <a class = "gallery__link" href = "${original}">
            <img class = "gallery__image" src = "${preview}"
        data - source = "${original}"
        alt = "${description}"/>
            </a> </div>`;
    }).join('');
};
const galleryContainerRef = document.querySelector('.gallery');
const cardsMarkUp = createGalery(galleryItems);
galleryContainerRef.insertAdjacentHTML("beforeend", cardsMarkUp);
galleryContainerRef.addEventListener("click", onCardsClick);

function onCardsClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    };
    galleryItems.map((item) => {
        if (item.original !== e.target.dataset.source) {
            const instance = basicLightbox.create(`<img src=${item.original} width='800' height='600'>`);
            instance.show();
        };
    });
};