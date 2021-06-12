const slideShow = document.getElementById("slideshow");
const slides = slideShow.getElementsByTagName("video");

var index = 0;
function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

function prevSlide() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}

document.getElementById("prevSlide").addEventListener("click", prevSlide);
document.getElementById("nextSlide").addEventListener("click", nextSlide);

const slideShowText = document.getElementById("slideShowText");
const slidesText = slideShowText.getElementsByTagName("div");

var i = 0;
function nextSlideText() {
  slidesText[i].classList.remove("active");
  i = (i + 1) % slidesText.length;
  slidesText[i].classList.add("active");
}

function prevSlideText() {
  slidesText[i].classList.remove("active");
  i = (i - 1 + slidesText.length) % slidesText.length;
  slidesText[i].classList.add("active");
}

document.getElementById("prevSlide").addEventListener("click", prevSlideText);
document.getElementById("nextSlide").addEventListener("click", nextSlideText);
