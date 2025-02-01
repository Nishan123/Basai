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

document.addEventListener("DOMContentLoaded", function () {
  const checkin = document.getElementById("checkin");
  const checkout = document.getElementById("checkout");
  const nights = document.getElementById("nights");
  const total = document.getElementById("total");
  
  const pricePerNight = 1500; // Price per night in NPR

  checkin.addEventListener("change", calculateNights);
  checkout.addEventListener("change", calculateNights);

  function calculateNights() {
      let checkinDate = new Date(checkin.value);
      let checkoutDate = new Date(checkout.value);

      if (checkoutDate > checkinDate) {
          let nightCount = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24);
          nights.innerHTML = nightCount + " nights";
          total.innerHTML = nightCount * pricePerNight;
      } else {
          nights.innerHTML = "0 nights";
          total.innerHTML = "0";
      }
  }
});
