class AutoPlay {
  run(player) {
    player.muted = true;
    player.media.play();
  }
}

export default AutoPlay;
