//get elements
const btn = document.getElementById("btn");
const container = document.getElementById("container");

//add event listener
btn.addEventListener("click", () => {
  createNotifiCation();
});

//function
const createNotifiCation = () => {
  const notfi = document.createElement("li");
  notfi.classList.add("toast");

  notfi.innerText = "Hello World";

  container.appendChild(notfi);
  //timeout
  setTimeout(() => {
    notfi.remove();
  }, 3000);
};

