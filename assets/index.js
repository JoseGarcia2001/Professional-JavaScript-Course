import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.error(error.message);
  });
}
