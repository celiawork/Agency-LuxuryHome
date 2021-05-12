const itemsSlide = document.querySelectorAll(".container-slide img");
const nbSlide = itemsSlide.length;
const next = document.querySelector(".right");
const previous = document.querySelector(".left");
let index = 0;

next.addEventListener("click", slideNext);
previous.addEventListener("click", slidePrevious);


/** FUNCTION */

function slideNext() {

  itemsSlide[index].classList.remove("active");

  if (index < nbSlide - 1) {
    index++;
  } else {
    index = 0;
  }

  itemsSlide[index].classList.add("active");
}


function slidePrevious() {
  itemsSlide[index].classList.remove("active");

  if (index > 0) {
    index--;
  } else {
    index = nbSlide - 1;
  }

  itemsSlide[index].classList.add("active");
}
