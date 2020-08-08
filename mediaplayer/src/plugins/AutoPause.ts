import MediaPlayer from "../MediaPlayer";
class AutoPause {
  player: MediaPlayer;
  constructor() {
    this.player;
  }

  run(player) {
    this.player = player;
    this.handlerIntersection = this.handlerIntersection.bind(this);
    this.handlerVisibility = this.handlerVisibility.bind(this);
    const observer = new IntersectionObserver(this.handlerIntersection, {
      threshold: 0.25,
    });

    observer.observe(this.player.media);

    document.addEventListener("visibilitychange", this.handlerVisibility);
  }

  private handlerVisibility() {
    if (document.visibilityState === "visible" && !this.player.pausedByUser) {
      this.player.media.play();
    } else {
      this.player.media.pause();
    }
  }

  private handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    if (entry.isIntersecting && !this.player.pausedByUser) {
      this.player.media.play();
    } else {
      this.player.media.pause();
    }
  }
}

export default AutoPause;
