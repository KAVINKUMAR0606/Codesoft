// ---------------- FAQ Accordion ----------------
let accordian = document.getElementsByClassName("FAQ-title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    let icon = this.querySelector("i");

    if (icon.classList.contains("fa-plus")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-plus");
    }
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

// ---------------- Trending Scroll ----------------
const trendingCards = document.getElementById("trendingCards");
const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");


const scrollAmount = 300;

rightBtn.addEventListener("click", () => {
  trendingCards.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

leftBtn.addEventListener("click", () => {
  trendingCards.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});
