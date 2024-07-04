// about
fetch("/Kontainer/sidebar.html")
  .then((response) => response.text())
  .then((ini) => {
    document.getElementById("navbar-template").innerHTML = ini;
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
    let home = document.querySelectorAll('.hmenu');
    home.forEach(menuhome => {
        menuhome.href = "https://www.youtube.com";
    let explore = document.querySelectorAll('.explore')
    explore.forEach(menuexplore =>{
      menuexplore.href="https://www.yandex.com"
    } )
    });  
}
