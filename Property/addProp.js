document.addEventListener("DOMContentLoaded", function() {
  // Select all offering buttons
  const offers = document.querySelectorAll(".offer");

  offers.forEach(offer => {
    offer.addEventListener("click", function() {
      this.classList.toggle("active"); // Toggle active class
    });
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const uploadBox = document.getElementById("uploadBox");
  const fileInput = document.getElementById("fileInput");

  uploadBox.addEventListener("click", function () {
    fileInput.click(); // Open file selector
  });

  fileInput.addEventListener("change", function () {
    if (fileInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function (e) {
        uploadBox.innerHTML = `<img src="${e.target.result}" alt="Uploaded Image">`;
      };
      reader.readAsDataURL(fileInput.files[0]);
    }
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const typeCards = document.querySelectorAll(".type-card");

  typeCards.forEach(card => {
    card.addEventListener("click", () => {
      // Remove active class from all cards
      typeCards.forEach(c => c.classList.remove("active"));

      // Add active class to the clicked card
      card.classList.add("active");
    });
  });
});
