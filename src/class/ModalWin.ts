import {
  Assets,
  Container,
  NineSlicePlane,
  Sprite,
  Text,
  Texture,
} from "pixi.js";
import { Manager } from "./Manager";
import textStyles from "../textStyles";
import anime from "animejs";
import { Button } from "./Button";

export class ModalWin extends Container {
  public onNextLevel: () => void = () => {};
  public onBackMenu: () => void = () => {};

  constructor(nbTry: number, nbCardUsed: number, isFinalLevel: boolean) {
    super();

    this.zIndex = 2000;

    let background = Sprite.from(Texture.WHITE);
    background.width = Manager.width;
    background.height = Manager.height;

    background.tint = 0x000000;
    background.alpha = 0.5;
    background.eventMode = "static";
    background.zIndex = 1000;

    this.addChild(background);

    let panel = new NineSlicePlane(Assets.get("Panel"), 7, 6, 7, 6);
    panel.width = 600;
    panel.height = 320;
    panel.position.set(
      Manager.width / 2 - panel.width / 2,
      Manager.height / 2 - panel.height / 2
    );

    panel.zIndex = 1000;

    this.addChild(panel);

    // Title Modal
    let title = new Text("Victory!", {
      ...textStyles.title,
      fontSize: 30,
      align: "center",
    });

    title.position.set(
      panel.x + panel.width / 2 - title.width / 2,
      panel.y + 20
    );

    this.addChild(title);

    // Explanation Text
    let explanation = new Text(
      `You have successfully completed the ${
        isFinalLevel ? "final " : ""
      }level.`,
      {
        fontFamily: "Roboto",
        fontSize: 20,
        fill: 0x000000,
        align: "center",
        wordWrap: true,
        wordWrapWidth: panel.width - 40,
      }
    );

    explanation.position.set(
      panel.x + panel.width / 2 - explanation.width / 2,
      title.y + title.height + 20
    );

    this.addChild(explanation);

    // Number of try
    let tryText = new Text("You took 0 try to complete the level", {
      fontFamily: "Roboto",
      fontSize: 20,
      fill: 0x000000,
      align: "center",
      wordWrap: true,
      wordWrapWidth: panel.width - 40,
    });

    tryText.anchor.set(0.5, 0);

    tryText.position.set(
      panel.x + panel.width / 2,
      explanation.y + explanation.height
    );
    tryText.alpha = 0;

    this.addChild(tryText);

    anime({
      targets: tryText,
      alpha: 1,
      y: explanation.y + explanation.height + 20,
      duration: 1000,
    });

    anime({
      targets: tryText,
      text: "You took " + nbTry + " try to complete the level",
      duration: 1000,
      easing: "easeOutQuad",
      round: 1,
      delay: 1000,
    });

    // Number of card used
    let cardUsedText = new Text("You used 0 card to complete the level", {
      fontFamily: "Roboto",
      fontSize: 20,
      fill: 0x000000,
      align: "center",
      wordWrap: true,
      wordWrapWidth: panel.width - 40,
    });

    cardUsedText.anchor.set(0.5, 0);

    cardUsedText.position.set(
      panel.x + panel.width / 2,
      tryText.y + tryText.height + 20
    );

    cardUsedText.alpha = 0;

    this.addChild(cardUsedText);

    anime({
      targets: cardUsedText,
      alpha: 1,
      y: tryText.y + tryText.height + 40,
      duration: 1000,
      delay: 3000,
    });

    anime({
      targets: cardUsedText,
      text: "You used " + nbCardUsed + " card to complete the level",
      duration: 1000,
      easing: "easeOutQuad",
      round: 1,
      delay: 4000,
    });

    // Button
    if (isFinalLevel) {
      let restartButton = new Button("Back to main menu");

      restartButton.position.set(
        panel.x + panel.width / 2 - restartButton.width / 2,
        cardUsedText.y + cardUsedText.height + 20
      );

      restartButton.alpha = 0;

      restartButton.onClick = () => {
        this.onBackMenu();
      };

      this.addChild(restartButton);

      anime({
        targets: restartButton,
        alpha: 1,
        y: cardUsedText.y + cardUsedText.height + 40,
        duration: 1000,
        delay: 5000,
      });
    } else {
      let nextLevelButton = new Button("Next Level");

      nextLevelButton.position.set(
        panel.x + panel.width / 2 - nextLevelButton.width / 2,
        cardUsedText.y + cardUsedText.height + 20
      );
      nextLevelButton.alpha = 0;

      nextLevelButton.onClick = () => {
        this.onNextLevel();
      };

      this.addChild(nextLevelButton);

      anime({
        targets: nextLevelButton,
        alpha: 1,
        y: cardUsedText.y + cardUsedText.height + 40,
        duration: 1000,
        delay: 5000,
      });
    }
  }

  public close() {
    this.removeFromParent();
    this.destroy();
  }
}
