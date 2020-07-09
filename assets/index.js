import mediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const button = document.querySelector("button");

const player = new mediaPlayer({ value: video, plugins: [new AutoPlay()] });
button.onclick = () => player.playOrPause();
