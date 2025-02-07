document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("profileModal");
    const editProfileBtn = document.getElementById("editProfileBtn");
    const closeModal = document.querySelector(".close");

    editProfileBtn.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
    document.querySelectorAll(".property-card").forEach(card => {
        card.addEventListener("click", function () {
            window.location.href = "/AddProperty/AddProp.html";
        });
    });

});
