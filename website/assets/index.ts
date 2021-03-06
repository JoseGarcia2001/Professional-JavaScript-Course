import MediaPlayer from "@joga_dev/platzimediaplayer/src/MediaPlayer";
import AutoPlay from "@joga_dev/platzimediaplayer/src/plugins/AutoPlay";
import AutoPause from "@joga_dev/platzimediaplayer/src/plugins/AutoPause";
import Ads from "@joga_dev/platzimediaplayer/src/plugins/Ads";

const PlayPause: HTMLElement = document.querySelector(".play_pause");
const MuteUnmute: HTMLElement = document.querySelector(".mute_unmute");
const video = document.querySelector("video");

const player = new MediaPlayer({
  value: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
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
