class MediaPlayer {
  constructor(config) {
    (this.media = config.value), (this.plugins = config.plugins || []);
    this.autoRun();
    this.pausedByUser = false;
  }

  autoRun() {
    const player = {
      media: this.media,
      // get paused() {
      //   return this.pausedByUser;
      // },
      // set paused(value) {
      //   this.pausedByUser = value;
      // },
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      },
    };

    this.plugins.forEach((plugin) => {
      plugin.run(player);
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
