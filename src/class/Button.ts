import { Assets, Container, NineSlicePlane, Text } from "pixi.js";
import { AudioManager } from "./AudioManager";

interface ButtonOption {
  fontSize?: number;
}

export class Button extends Container {
  public onClick = () => {};

  constructor(text: string, options: ButtonOption = {}) {
    super();

    let textComponent = new Text(text, {
      fontFamily: "Roboto",
      fontSize: options.fontSize ?? 30,
      fill: 0x000000,
      align: "center",
    });

    textComponent.x = 10;
    textComponent.y = 7;

    let button = new NineSlicePlane(Assets.get("Button"), 6, 4, 6, 9);

    button.width = textComponent.width + 20;
    button.height = textComponent.height + 20;

    this.addChild(button);
    this.addChild(textComponent);

    this.eventMode = "static";
    this.cursor = "pointer";

    this.addEventListener("pointerdown", () => {
      button.texture = Assets.get("ButtonPressed");
      button.y += 5;
      button.height -= 5;

      textComponent.y += 5;

      AudioManager.playSound("BtnPressed", 0.3);

      this.onClick();
    });

    let pointerUp = () => {
      button.texture = Assets.get("Button");
      button.y -= 5;
      button.height += 5;

      textComponent.y -= 5;
    };

    this.addEventListener("pointerup", pointerUp);

    this.addEventListener("pointerupoutside", pointerUp);
  }
}
