const autotext = document.getElementById("auto-text");

const text = "Hello World This is auto writer";

let index = 0;

const Writer = () => {
  autotext.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 0;
  }
};
setInterval(Writer, 400);
