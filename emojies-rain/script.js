const createEmojie = () => {
  const emoji = document.createElement("div");
  emoji.classList.add("emoji");

  emoji.innerText = "🍎";
    document.body.appendChild(emoji);
    
    emoji.style.left = Math.random() * 100 + "vw"
    emoji.style.animationDuration = Math.random() * 2 + 3 + "s"

    setTimeout(() => {
        emoji.remove();
    },6000);

};
setInterval(createEmojie, 1000)
