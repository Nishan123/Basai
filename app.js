let currentIndex = 0;

function changeImage(direction) {
  const images = document.querySelectorAll(".slider img");
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + images.length) % images.length;
  images[currentIndex].classList.add("active");
}

