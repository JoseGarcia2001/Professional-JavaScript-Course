function mediaPlayer(config) {
  this.media = config.value;
  this.plugins = config.plugins || [];

  this._initPlugins();
}

mediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};

mediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};

mediaPlayer.prototype._initPlugins = function () {
  this.plugins.forEach((plugin) => {
    plugin.run(this);
  });
};

mediaPlayer.prototype.playOrPause = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

export default mediaPlayer;
