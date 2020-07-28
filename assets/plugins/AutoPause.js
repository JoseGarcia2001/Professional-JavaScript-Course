class AutoPause {
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

  handlerVisibility() {
    if (document.visibilityState === "visible") {
      this.player.media.play();
    } else {
      this.player.media.pause();
    }
  }

  handlerIntersection(entries) {
    const entry = entries[0];
    if (entry.isIntersecting) {
      this.player.media.play();
    } else {
      this.player.media.pause();
    }
  }
}

export default AutoPause;
