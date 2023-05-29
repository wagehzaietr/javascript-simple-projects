const sounds = ["akira", "ballin", "meme", "tom"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  document.body.appendChild(btn);
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    document.getElementById(sound).play();
  });
});

const stopSongs = () => {
  sounds.forEach((sound) => {
   const song =  document.getElementById(sound)
    song.pause();
    song.currentTime = 0;
  });
};
