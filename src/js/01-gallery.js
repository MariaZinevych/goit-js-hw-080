// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const makeGallery = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML('afterbegin', makeGallery);
galleryContainer.style.listStyle = 'none';
galleryContainer.addEventListener('click', onGalleryClick);

function createGalleryCards(items) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `;
    })
    .join('');
}

function onGalleryClick(event) {
  event.preventDefault();
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
