// about
// Menggunakan URL relatif untuk GitHub Pages
fetch("Kontainer/sidebar.html")
  .then((response) => response.text())
  .then((ini) => {
    document.getElementById("navbar-template").innerHTML = ini;
  })
  .catch((error) => {
    console.error("Error loading sidebar:", error);
    // Menampilkan pesan error jika gagal memuat sidebar
    document.getElementById("navbar-template").innerHTML =
      "<p>Gagal memuat sidebar. Silakan coba lagi nanti.</p>";
  });

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
function pindahmenu() {
  // Mengubah href elemen dengan id 'hmenu' menjadi 'https://www.youtube.com'
  let home = document.querySelectorAll(".hmenu");
  home.forEach((menuhome) => {
    menuhome.href = "https://www.youtube.com";
  });
  let explore = document.querySelectorAll(".explore");
  explore.forEach((menuexplore) => {
    menuexplore.href = "#Explore";
  });
}
// Tambahkan efek scroll untuk navbar
window.addEventListener("scroll", function () {
  var nav = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Toggle sidebar
function toggleNav() {
  var sidebar = document.getElementById("mySidebar");
  var menuIcon = document.getElementById("menuicon");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
    menuIcon.classList.remove("open");
  } else {
    sidebar.style.width = "250px";
    menuIcon.classList.add("open");
  }
}

// Animasi untuk ikon menu

