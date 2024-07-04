
// Array of images with their titles and descriptions
// Function to update the image and its details
fetch('/data/data_image.json') // Sesuaikan path ke file JSON Anda
  .then(response => response.json())
  .then(data => {
    let imagesArray = data;

    // Initial index
    let currentIndex = 0;

    // Function to update the image and its details
    function updateImage(index) {
      let imageElement = document.getElementById('prev1');
      let titleElement = document.getElementById('title');
      let descriptionElement = document.getElementById('deskripss');
      imageElement.style.backgroundImage = `url(${imagesArray[index].src})`;
      titleElement.textContent = imagesArray[index].title;
      descriptionElement.textContent = imagesArray[index].description;
      let linkvideos = document.getElementById('linkvideos')
      linkvideos.onclick = function () {
        window.open(imagesArray[currentIndex].linkvideo, '_self');
      };
    }

    // Function to move to the next image
    function nextImage() {
      currentIndex = (currentIndex === imagesArray.length - 1) ? 0 : currentIndex + 1;
      updateImage(currentIndex);
    }

    // Initial call to update the image
    updateImage(currentIndex);

    // Set interval to change the image every 3 seconds
    setInterval(nextImage, 3000);
  })