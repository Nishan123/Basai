let currentIndex = 0;

function changeImage(direction) {
  const images = document.querySelectorAll(".slider img");
  images[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + images.length) % images.length;
  images[currentIndex].classList.add("active");
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const email = event.target.querySelector("input[type='email']").value;
  const password = event.target.querySelector("input[type='password']").value;
  const emailError = event.target.querySelector(".email-error");
  const passwordError = event.target.querySelector(".password-error");
  
  emailError.textContent = "";
  passwordError.textContent = "";
  
  const emailPattern = /@example\.com$/;
  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
  
  if (!emailPattern.test(email)) {
    emailError.textContent = "Email must end with @example.com";
    return;
  }
  
  if (!passwordPattern.test(password)) {
    passwordError.textContent = "Password must be at least 8 characters long and include a number and a special character";
    return;
  }
  
  // If validation passes, submit the form
  alert("Form submitted successfully!");
  event.target.submit();
});

