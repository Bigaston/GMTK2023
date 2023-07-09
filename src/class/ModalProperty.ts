import {
  Assets,
  Container,
  NineSlicePlane,
  Sprite,
  Text,
  Texture,
} from "pixi.js";
import { Manager } from "./Manager";
import { attributesCategory } from "../data/Attributes";
import textStyles from "../textStyles";

export class ModalProperty extends Container {
  public onValueChoosed: (value: string) => void = () => {};

  constructor() {
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

    let panel = new NineSlicePlane(Assets.get("Panel"), 1, 27, 90, 1);
    panel.width = 600;
    panel.height = 600;
    panel.position.set(
      Manager.width / 2 - panel.width / 2,
      Manager.height / 2 - panel.height / 2
    );

    panel.zIndex = 1000;

    this.addChild(panel);

    let closeButton = Sprite.from(Texture.EMPTY);
    closeButton.width = 24;
    closeButton.height = 24;
    closeButton.position.set(panel.x + panel.width - 36, panel.y);

    closeButton.zIndex = 1002;
    closeButton.cursor = "pointer";
    closeButton.eventMode = "static";

    closeButton.addEventListener("pointerdown", () => {
      this.close();
    });

    this.addChild(closeButton);

    // Title Modal
    let title = new Text("Add Property", {
      ...textStyles.title,
      fontSize: 30,
    });

    title.position.set(
      panel.x + panel.width / 2 - title.width / 2,
      panel.y + 25
    );

    this.addChild(title);

    // Attributes List
    let currentY = title.y + title.height + 20;

    let attributesList = new Container();
    attributesList.position.set(panel.x + 160, currentY + 10);

    this.addChild(attributesList);

    let valueList = new Container();
    valueList.position.set(panel.x + 320, currentY + 10);

    this.addChild(valueList);

    attributesCategory.forEach((category) => {
      let categoryTitle = new Text(category.displayName, {
        fontFamily: "Roboto",
        fontSize: 32,
        fill: 0x000000,
        align: "center",
      });

      categoryTitle.position.set(
        panel.x + 20,
        currentY + categoryTitle.height / 2
      );

      categoryTitle.eventMode = "static";
      categoryTitle.cursor = "pointer";

      categoryTitle.addEventListener("pointerenter", () => {
        attributesList.removeChildren();
        valueList.removeChildren();

        let currentYAttributes = 0;

        category.attributes.forEach((attribute) => {
          let attributeText = new Text(attribute.displayName, {
            fontFamily: "Roboto",
            fontSize: 24,
            fill: 0x000000,
            align: "center",
          });

          attributeText.position.set(
            0,
            currentYAttributes + attributeText.height / 2
          );

          currentYAttributes += attributeText.height + 10;

          attributeText.eventMode = "static";
          attributeText.cursor = "pointer";

          attributeText.addEventListener("pointerenter", () => {
            valueList.removeChildren();

            let currentYValues = 0;

            attribute.value.forEach((value) => {
              let valueText = new Text(value.displayName, {
                fontFamily: "Roboto",
                fontSize: 20,
                fill: 0x000000,
                align: "center",
              });

              valueText.position.set(0, currentYValues + valueText.height / 2);

              currentYValues += valueText.height + 10;

              valueText.eventMode = "static";
              valueText.cursor = "pointer";

              valueText.addEventListener("pointerdown", () => {
                this.onValueChoosed(
                  `${category.name}.${attribute.name}.${value.name}`
                );
                this.close();
              });

              valueList.addChild(valueText);
            });
          });

          attributesList.addChild(attributeText);
        });
      });

      this.addChild(categoryTitle);

      currentY += categoryTitle.height + 10;
    });
  }

  public close() {
    this.removeFromParent();
    this.destroy();
  }
}
