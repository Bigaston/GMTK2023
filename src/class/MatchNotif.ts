import { Container, Text } from "pixi.js";
import anime from "animejs/lib/anime.es.js";

export class MatchNotif extends Container {
  constructor(
    position: { x: number; y: number },
    matchStatus: "match" | "noMatch"
  ) {
    super();

    this.x = position.x;
    this.y = position.y;

    this.alpha = 1;

    let text = new Text(matchStatus === "match" ? "Like!" : "Dislike...", {
      fontFamily: "Belanosima",
      fontSize: 32,
      fill: matchStatus === "match" ? 0x00ff00 : 0xff0000,
    });

    anime({
      y: position.y - 300,
      targets: text,
      easing: "easeOutExpo",
      autoplay: true,
      duration: 2000,
    });

    anime({
      alpha: 0,
      targets: text,
      easing: "easeOutExpo",
      autoplay: true,
      duration: 1000,
      delay: 500,
    });

    this.addChild(text);
  }
}
