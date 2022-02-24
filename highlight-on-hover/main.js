const paragraphs = document.querySelectorAll("p");

const handleMouseEnter = (evt) => {
  evt.target.classList.add("highlight");
};

const handleMouseLeave = (evt) => {
  evt.target.classList.remove("highlight");
};

for (const p of paragraphs) {
  p.addEventListener("mouseenter", handleMouseEnter);
  p.addEventListener("mouseleave", handleMouseLeave);
}
