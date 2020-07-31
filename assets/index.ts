import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const PlayPause: HTMLElement = document.querySelector(".play_pause");
const MuteUnmute: HTMLElement = document.querySelector(".mute_unmute");
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
