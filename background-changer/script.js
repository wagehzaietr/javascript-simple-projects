const toggle = document.getElementById("toggle");
const text = document.getElementById('text')


toggle.addEventListener("change", (e) => {
  e.preventDefault();
  document.body.classList.toggle("dark", e.target.checked);
});