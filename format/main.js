//slide anh
let autoSlide;
let slideContainer = document.getElementById("slide");
let items = document.querySelectorAll(".item");

function nextSlide() {
  let firstItem = slideContainer.firstElementChild;
  slideContainer.appendChild(firstItem);
}

document.getElementById("next").onclick = function () {
  nextSlide();
  resetAutoSlide();
};

document.getElementById("prev").onclick = function () {
  let lastItem = slideContainer.lastElementChild;
  slideContainer.prepend(lastItem);
  resetAutoSlide();
};

function startAutoSlide() {
  autoSlide = setInterval(nextSlide, 6000);
}

function resetAutoSlide() {
  clearInterval(autoSlide);
  startAutoSlide();
}

window.onload = function () {
  startAutoSlide();
};
