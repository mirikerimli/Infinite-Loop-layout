const nav_a = document.querySelectorAll(".nav_link");

window.addEventListener("scroll", () => {
  document
    .querySelector(".navbar")
    .classList.toggle("scrolled", window.scrollY > 50);
  nav_a.forEach((i) => {
    i.classList.toggle("scrolled__li", window.scrollY > 50);
  });
});
