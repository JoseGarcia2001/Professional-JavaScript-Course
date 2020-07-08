function mediaPlayer(config) {
  this.media = config.value;
}

mediaPlayer.prototype.playOrPause = function () {
  this.media.paused ? this.media.play() : this.media.pause();
};

export default mediaPlayer;
