const paragraphs = document.querySelectorAll("p");

const handleMouseEnter = (evt) => {
  evt.target.classList.add("highlight");
};

const handleMouseLeave = (evt) => {
  evt.target.classList.remove("highlight");
};

paragraphs.forEach((p) => {
  p.addEventListener("mouseenter", handleMouseEnter);
  p.addEventListener("mouseleave", handleMouseLeave);
});
