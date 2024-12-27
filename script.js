const comet = document.querySelector(".comet");

function animateComet() {
  comet.classList.add("moving");
  setTimeout(() => {
    comet.classList.add("end");
  }, 500);
  // comet.classList.add('end');
  // Move comet to the center by changing top and left
  comet.style.top = "50%"; // Center vertically
  comet.style.right = "50%"; // Center horizontally
  comet.style.transform = "translate(-0%, -0%)"; // Adjust to truly center it

  setTimeout(beatTwice, 3000);
  setTimeout(overlay, 4000);
}

// Wait for the page to load before starting the animation
window.onload = () => {
  setTimeout(animateComet, 500); // Delay before starting animation
};

function overlay() {
  document.querySelector(".fullscreen-overlay").classList.add("animate");
}

function beatTwice() {
  var heart = document.getElementById("heart");
  heart.className = "beat-twice";
}

const scrollContainer = document.getElementById("scrollContainer");
const cardHeight = document.querySelector(".card").offsetHeight;
const navMenu_dropdown = document.getElementById("navMenu_dropdown");
const dropdown = document.getElementById("dropdown");
dropdown.addEventListener("click", function () {
  if (navMenu_dropdown.style.display == "none") {
    navMenu_dropdown.style.display = "flex";
  } else {
    navMenu_dropdown.style.display = "none";
  }
});

let isMouseOver = false;

function autoScroll() {
  if (!isMouseOver) {
    scrollContainer.scrollTop += cardHeight;
    if (scrollContainer.scrollTop >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
      scrollContainer.scrollTop = 0;
    }
  }
}
scrollContainer.addEventListener("mouseenter", function () {
  isMouseOver = true;
});
scrollContainer.addEventListener("mouseleave", function () {
  isMouseOver = false;
});
setInterval(autoScroll, 3000);
