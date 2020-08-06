import MediaPlayer from "../../MediaPlayer";
import Ads from "./Ads";

class AdsPlugin {
  private ads: Ads;
  private player: MediaPlayer;
  private media: HTMLMediaElement;

  constructor() {
    this.ads = Ads.getInstance();
    this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
  }

  run(player: MediaPlayer) {
    this.player = player;
    this.media = this.player.media;
    this.media.addEventListener("timeupdate", this.handleTimeUpdate);
  }

  private handleTimeUpdate() {
    const currentTime = Math.floor(this.media.currentTime);
    if (currentTime % 30 === 0) {
      this.renderAd;
    }
  }

  private renderAd() {
    const ad = this.ads.getAd();
    console.log(ad);
  }
}

export default AdsPlugin;
