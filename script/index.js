// Array of images with their titles and descriptions
// Function to update the image and its details
import { images, films } from "../data/data.js";

// Function to update the image and its details
function updateImage(index) {
	let imageElement = document.getElementById('prev1');
	let titleElement = document.getElementById('title');
	let descriptionElement = document.getElementById('deskripss');
	imageElement.style.backgroundImage = `url(${images[index].src})`;
	titleElement.textContent = images[index].title;
	descriptionElement.textContent = images[index].description;
	let linkvideos = document.getElementById('linkvideos')
	linkvideos.onclick = function () {
		window.open(images[currentIndex].linkvideo, '_self');
	};
}

// Function to move to the next image
let currentIndex = 0;
function nextImage() {
	currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
	updateImage(currentIndex);
}

// Initial call to update the image
updateImage(currentIndex);

// Set interval to change the image every 3 seconds
setInterval(nextImage, 3000);

document.addEventListener('DOMContentLoaded', () => {
  const filmList = document.getElementById('film-list');
  let page = 1;
  const filmsPerPage = 20;


  const loadFilms = () => {
		console.log('executed');
    const start = (page - 1) * filmsPerPage;
    const end = start + filmsPerPage;
    const filmsToLoad = films.slice(start, end);

    filmsToLoad.forEach(film => {
      const filmItem = document.createElement('div');
      filmItem.className = 'film-item';

      filmItem.innerHTML = `
                <img src="${film.image}" alt="${film.title}">
                <h3>${film.title}</h3>
                <p>${film.description}</p>
            `;

      filmList.appendChild(filmItem);
    });

    page++;
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      loadFilms();
    }
  };

  window.addEventListener('scroll', handleScroll);

  loadFilms();
});