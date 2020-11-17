"use strict";
import items from "/gallery-items.js";
const galleryList = document.querySelector(".js-gallery");
const lightbox = document.querySelector(".js-lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxBtn = lightbox.querySelector("button[data-action='close-lightbox']");
console.log(lightboxBtn);

const galleryItems = items
    .map(
        (items) =>
        `<li class="gallery__item">
            <a
                class="gallery__link"
                href = "${items.original}"
            >
                <img
                class="gallery__image"
                src = "${items.preview}"
                data-source="${items.original}"
                alt = "${items.description}"
                />
            </a>
            </li>`
    )
    .join("");
galleryList.insertAdjacentHTML('beforeend', galleryItems);

galleryList.addEventListener('click', respondToTheClick);
lightboxBtn.addEventListener('click', closeLightbox);


window.addEventListener('keydown', (event) => {
    let turgetCode = event.code
    switch (turgetCode) {
        case 'Escape':
            closeLightbox();
            break;
        case 'ArrowRight':
            console.log(turgetCode);
            break;
        case 'ArrowLeft':
            console.log(turgetCode);
            break;
    }
})

function respondToTheClick(event) {
    event.preventDefault();
    const target = event.target;
    if (target.nodeName !== 'IMG') return
    const targetData = target.dataset.source;
    openLightbox();
    addLightboxSrc(targetData);
    // nextImage(event);
}

function openLightbox() {
    lightbox.classList.add('is-open');
}

function closeLightbox() {
    lightbox.classList.remove('is-open');
    addLightboxSrc();
}

function addLightboxSrc(currentData) {
    currentData ? lightboxImg.src = currentData : lightboxImg.src = "";
}

// function nextImage(event) {
//     console.log('nextImage', event.currentTarget);
// }