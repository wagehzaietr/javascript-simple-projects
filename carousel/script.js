const imgs = document.getElementById("imgs");
const img = Array.from(document.querySelectorAll("#imgs img"));
const next = document.getElementById("next");
const prev = document.getElementById("prev");

let idx = 0;

next.addEventListener("click", () => {
  idx = (idx + 1) % img.length;
  imgs.style.transform = `translateX(${-idx * 500}px)`;
});

prev.addEventListener("click", () => {
  idx = (idx - 1 + img.length) % img.length;
  imgs.style.transform = `translateX(${-idx * 500}px)`;
});
