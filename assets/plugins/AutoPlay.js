function AutoPlay() {}

AutoPlay.prototype.run = function (player) {
  player.mute();
  player.playOrPause();
};

export default AutoPlay;
