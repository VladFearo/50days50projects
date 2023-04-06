const o = document.getElementById("open");
const c = document.getElementById("close");
const container = document.querySelector(".container");

o.addEventListener("click", () => {
  container.classList.add("show-nav");
});

c.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
