import MediaPlayer from "./assets/MediaPlayer.js";
import AutoPlay from "./assets/plugins/AutoPlay.js";
import AutoPause from "./assets/plugins/AutoPause.js";

const PlayPause = document.querySelector(".play_pause");
const MuteUnmute = document.querySelector(".mute_unmute");
const video = document.querySelector("video");

const player = new MediaPlayer({
  value: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

PlayPause.onclick = () => {
  player.playOrPause();
};

MuteUnmute.onclick = () => {
  player.muteOrUnmute();
};
