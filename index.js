function openNav() {
  document.getElementById("mySidebar").style = "width: 250px; border: groove;";
  let dantc = document.getElementById("menuicon");
  dantc.classList.toggle("hideens");
  // Mengubah visibilitas elemen dengan id 'hilang' menjadi tersembunyi
  document.getElementById("hilang").style.visibility = "hidden";
}

function closeNav() {
  document.getElementById("mySidebar").style = "width: 0; border :none";
  let dantc = document.getElementById("menuicon");
  dantc.classList.toggle("hideens");
  document.getElementById("hilang").style.visibility = "visible";
}
// Array of images with their titles and descriptions
fetch('/data/data_image.json')
  .then(response => response.json())
  .then(data => {
    let imagesArray = data;
  });
// Initial index
let currentIndex = 0;

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