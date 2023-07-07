import { Container, Text } from "pixi.js";
import anime from "animejs/lib/anime.es.js";

export class MatchNotif extends Container {
  constructor(position: { x: number; y: number }) {
    super();

    this.x = position.x;
    this.y = position.y;

    this.alpha = 1;

    let text = new Text("Match!", {
      fontFamily: "Caprasimo",
      fontSize: 32,
      fill: 0x00ff0,
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
