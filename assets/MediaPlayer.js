class MediaPlayer {
  constructor(config) {
    (this.media = config.value), (this.plugins = config.plugins || []);
    this.pausedByUser = false;
    this.player;
    this.autoRun();
  }

  autoRun() {
    console.log(this.pausedByUser);
    this.player = {
      media: this.media,
      paused: this.pausedByUser,
      get muted() {
        return this.media.muted;
      },
      set muted(value) {
        this.media.muted = value;
      },
    };

    this.plugins.forEach((plugin) => {
      plugin.run(this.player);
    });
  }

  playOrPause() {
    if (this.media.paused) {
      this.player.paused = false;
      this.media.play();
    } else {
      this.player.paused = true;
      this.media.pause();
    }
  }

  muteOrUnmute() {
    this.media.muted ? (this.media.muted = false) : (this.media.muted = true);
  }
}

export default MediaPlayer;
