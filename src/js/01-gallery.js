import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);

function createGalleryMarkup(items) {
  return items
    .map(
      item =>
        `<div>
        <a class="gallery__link" href="${item.original}">
					<img 
					class="gallery__image"
					src="${item.preview}"
					alt="${item.description}">
				</a>
        </div>`
    )
    .join('');
}

const galleryRef = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
