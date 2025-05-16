// Slideshow start

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slides.length === 0) return;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

setInterval(() => {
    plusSlides(1);
}, 10000);

// Modal start

var modal = document.getElementById("imageModal");

var modalImg = document.getElementById("modalImage");
var captionText = document.getElementById("caption");

function handleImageClick(img) {
  img.onclick = function() {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.getAttribute("data-caption");
  }
}

document.querySelectorAll('.painting-art-slot img').forEach(img => {
  handleImageClick(img);
});

document.querySelectorAll('.sketch-art-slot img').forEach(img => {
  handleImageClick(img);
});

var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
if (span) {
  span.onclick = function() {
    modal.style.display = "none";
  }
}