// Hamburger menu toggle
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');

hamburgerBtn.addEventListener("click", function(){
  mobileMenu.classList.toggle("open");

  if(mobileMenu.classList.contains("open")){
    hamburgerBtn.textContent = "X";

  }else {
    hamburgerBtn.textContent = "☰";
  }
})