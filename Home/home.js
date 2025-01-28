const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link=>{
  if(link.herf.includes(`${activePage}`)){
    link.classList.add('active');
  }
})

// It for Image Banner 
function changeImage(imageSrc) {
  document.getElementById('main-image').src = imageSrc;
}


// for booking details

document.addEventListener("DOMContentLoaded", function () {
  flatpickr("#date-range", {
    mode: "range", // Enable date range selection
    dateFormat: "Y-m-d", // Format the displayed dates
  });
});
