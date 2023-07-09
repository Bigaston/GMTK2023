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
      dropShadow: true,
      fill: "#ffffff",
      fontFamily: "Belanosima",
      lineJoin: "bevel",
      strokeThickness: 8,
      fontSize: 32,
      dropShadowColor: matchStatus === "match" ? 0x49b960 : 0xc60c30,
      stroke: matchStatus === "match" ? 0x49b960 : 0xc60c30,
    });

    text.angle = -5;
    text.pivot.x = text.width / 2;
    text.pivot.y = text.height / 2;

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

    anime({
      targets: text,
      angle: 5,
      direction: "alternate",
      easing: "linear",
      duration: 200,
      loop: true,
    });

    this.addChild(text);
  }
}
