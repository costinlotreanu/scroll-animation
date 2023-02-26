const sect2 = document.querySelector(`#section2`);
const sect3 = document.querySelector(`#section3`);

const sect2Cont = document.querySelector(`#section2-content`);
const sect3Cont = document.querySelector(`#section3-content`);
const sect2Img = document.querySelector(`#section2-image`);
const sect3Img = document.querySelector(`#section3-image`);

const mouseContainer = document.querySelector(`#mouseContainer`);
const mouseArrow = document.querySelector(`#mouseArrow`);


// Events
window.addEventListener(`scroll`, scrollAnimation);
window.addEventListener(`load`, mouseAnimation);

// HELPER FUNCTION
// scroll animation
function scrollAnimation() {
  const scrolling = window.innerHeight / 5 * 4;

  const topSect2 = sect2.getBoundingClientRect().top;
  const topSect3 = sect3.getBoundingClientRect().top;

  if (topSect2 < scrolling) {
    sect2Img.classList.add(`show`);
    sect2Cont.classList.add(`show`);
  } else {
    sect2Img.classList.remove(`show`);
    sect2Cont.classList.remove(`show`);
  }

  if (topSect3 < scrolling) {
    sect3Img.classList.add(`show`);
    sect3Cont.classList.add(`show`);
  } else {
    sect3Img.classList.remove(`show`);
    sect3Cont.classList.remove(`show`);
  }
}

// mouse animation
function mouseAnimation() {
  setTimeout(mouseShow(), 1200)
}

function mouseShow() {
  mouseActive();
  setInterval(mouseActive, 3000);
}

function mouseActive () {
    mouseContainer.classList.toggle(`mouse-active`);
    toggleMouseAnimation();
}

function toggleMouseAnimation() {
    mouseArrow.classList.toggle(`mouse-animation`);
}