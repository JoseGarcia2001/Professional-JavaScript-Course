class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;
  pausedByUser: boolean;
  container: HTMLElement;

  constructor(config) {
    (this.media = config.value), (this.plugins = config.plugins || []);
    this.pausedByUser = false;
    this.initPlayer();
    this.autoRun();
  }

  initPlayer() {
    this.container = document.createElement("div");
    this.container.style.position = "relative";
    this.media.parentNode.insertBefore(this.container, this.media);
    this.container.appendChild(this.media);
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
