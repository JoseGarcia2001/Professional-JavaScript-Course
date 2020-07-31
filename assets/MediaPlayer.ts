class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  pausedByUser: boolean;
  constructor(config) {
    (this.media = config.value), (this.plugins = config.plugins || []);
    this.pausedByUser = false;
    this.autoRun();
  }

  private autoRun() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }

  playOrPause() {
    if (this.media.paused) {
      this.pausedByUser = false;
      this.media.play();
    } else {
      this.pausedByUser = true;
      this.media.pause();
    }
  }

  muteOrUnmute() {
    this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
  }
}

export default MediaPlayer;
