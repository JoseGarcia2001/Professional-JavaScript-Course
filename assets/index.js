import mediaPlayer from "./MediaPlayer.js";

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new mediaPlayer({ value: video });
button.onclick = () => player.playOrPause();
