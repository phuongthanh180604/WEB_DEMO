function plusSlide(n) {
  showSlide(slideIndex += n);
}

function showSlide(n) {
  let i;
  let slides = document.getElementsByClassName("phanhoi-slide");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

let slideIndex = 1;
showSlide(slideIndex);