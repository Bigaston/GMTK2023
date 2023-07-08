import { Container, Sprite, Texture, Text, Assets } from "pixi.js";
import { IScene, Manager } from "../class/Manager";
import { ProfileCard } from "../class/ProfileCard";
import { IUpdatable } from "../class/IUpdatable";
import { ProfileHoverBackground } from "../class/ProfileHoverBackground";
import { ProfileCardPreview } from "../class/ProfileCardPreview";
import { Profile } from "../data/Profile";
import { MatchNotif } from "../class/MatchNotif";
import { Level } from "../data/Level";
import { stringToCategory } from "../data/Attributes";
import { Checkbox } from "../class/Checkbox";
import { Button } from "../class/Button";
import { ModalProperty } from "../class/ModalProperty";

export class MainScene extends Container implements IScene {
  private _updatable: IUpdatable[] = [];

  private _profileHoverBackground: ProfileHoverBackground =
    new ProfileHoverBackground();
  public get profileHoverBackground(): ProfileHoverBackground {
    return this._profileHoverBackground;
  }

  private _profileCardPreview: ProfileCardPreview = new ProfileCardPreview();
  public get profileCardPreview(): ProfileCardPreview {
    return this._profileCardPreview;
  }

  private _matcherZone: Container = new Container();
  public get matcherZone(): Container {
    return this._matcherZone;
  }

  private _level: Level;

  private _infoAttributes: {
    status: "like" | "dislike" | "none";
    path: string;
    canBeDeleted: boolean;
  }[];
  private _infoContainer: Container;

  constructor(level: Level) {
    super();

    this._level = level;

    this._infoAttributes = this._level.alreadyPresentProperty.map((attr) => {
      return {
        status: attr.likeStatus,
        path: attr.path,
        canBeDeleted: false,
      };
    });

    this.sortableChildren = true;

    // User Part
    let userPartBackground = Sprite.from(Texture.WHITE);
    userPartBackground.width = (Manager.width / 3) * 2;
    userPartBackground.height = Manager.height / 2;
    userPartBackground.x = 0;
    userPartBackground.y = 0;

    userPartBackground.tint = 0xff00ff;

    this.addChild(userPartBackground);

    // Card Parts
    let cardPartBackground = Sprite.from(Texture.WHITE);
    cardPartBackground.width = (Manager.width / 3) * 2;
    cardPartBackground.height = Manager.height / 2;
    cardPartBackground.x = 0;
    cardPartBackground.y = Manager.height / 2;

    cardPartBackground.tint = 0x0000ff;

    this.addChild(cardPartBackground);

    this._level.profiles.forEach((profile, index) => {
      let profileCard = new ProfileCard(profile, {
        x: (index % 5) * (ProfileCard.WIDTH + 16) + 20,
        y:
          Manager.height / 2 +
          Math.floor(index / 5) * (ProfileCard.HEIGHT + 16) +
          20,
      });

      this.addChild(profileCard);
      this._updatable.push(profileCard);
    });

    // Profile Hover Background
    this.addChild(this._profileHoverBackground);
    this._updatable.push(this._profileHoverBackground);

    // Profile Card Preview
    this._profileCardPreview.x =
      ((Manager.width / 3) * 2) / 2 - ProfileCardPreview.WIDTH / 2;
    this._profileCardPreview.y =
      Manager.height / 4 - ProfileCardPreview.HEIGHT / 2;

    this._profileCardPreview.visible = false;

    this.addChild(this._profileCardPreview);
    this._updatable.push(this._profileCardPreview);

    // Matcher Picture
    let matcherPicture = Sprite.from(Texture.WHITE);
    matcherPicture.width = 300;
    matcherPicture.height = 300;
    matcherPicture.tint = 0x00ffff;

    this._matcherZone.x = Manager.width / 3 - matcherPicture.width / 2;
    this._matcherZone.y = Manager.height / 2 - matcherPicture.height;

    this._matcherZone.addChild(matcherPicture);

    this.addChild(this._matcherZone);

    // Info Part
    let infoPartBackground = Sprite.from(Texture.WHITE);
    infoPartBackground.width = Manager.width / 3;
    infoPartBackground.height = Manager.height;
    infoPartBackground.x = (Manager.width / 3) * 2;
    infoPartBackground.y = 0;

    infoPartBackground.tint = 0x00ff00;

    this.addChild(infoPartBackground);

    let infoTitle = new Text("User Like Profile", {
      fontFamily: "Belanosima",
    });

    infoTitle.x =
      (Manager.width / 3) * 2 + (Manager.width / 3 / 2 - infoTitle.width / 2);
    infoTitle.y = 20;

    this.addChild(infoTitle);

    let heartSprite = Sprite.from(Assets.get("Heart"));
    heartSprite.width = 50;
    heartSprite.height = 50;
    heartSprite.x = (Manager.width / 3) * 2 + 250;
    heartSprite.y = 50;

    this.addChild(heartSprite);

    let heartBrokenSprite = Sprite.from(Assets.get("BrokenHeart"));
    heartBrokenSprite.width = 50;
    heartBrokenSprite.height = 50;

    heartBrokenSprite.x = (Manager.width / 3) * 2 + 330;
    heartBrokenSprite.y = 50;

    this.addChild(heartBrokenSprite);

    this._infoContainer = new Container();
    this._infoContainer.sortableChildren = true;
    this._infoContainer.zIndex = 2;

    this.addChild(this._infoContainer);
    this.displayAttributeInfos();
  }

  displayAttributeInfos() {
    this._infoContainer.removeChildren();

    let neededCategory = stringToCategory(
      this._infoAttributes.map((attribute) => attribute.path)
    );

    let currentY = 80;
    let currentX = (Manager.width / 3) * 2 + 20;

    neededCategory.forEach((category) => {
      currentY += 30;

      let categoryTitle = new Text(category.displayName, {
        fontFamily: "Roboto",
        fontSize: 26,
      });

      categoryTitle.x = currentX;
      categoryTitle.y = currentY;

      currentY += categoryTitle.height + 5;

      this._infoContainer.addChild(categoryTitle);

      category.attributes.forEach((attribute) => {
        // let attributeTitle = new Text(attribute.displayName, {
        //   fontFamily: "Roboto",
        //   fontSize: 20,
        // });

        // attributeTitle.x = currentX + 10;
        // attributeTitle.y = currentY + 5;

        // this.addChild(attributeTitle);

        // currentY += attributeTitle.height;

        attribute.value.forEach((value) => {
          let levelAttribute = this._infoAttributes.find(
            (infoAttribute) =>
              infoAttribute.path ===
              `${category.name}.${attribute.name}.${value.name}`
          )!;

          if (levelAttribute.canBeDeleted) {
            let deleteValue = new Sprite(Assets.get("RedCross"));
            deleteValue.width = 20;
            deleteValue.height = 20;

            deleteValue.x = currentX - 5;
            deleteValue.y = currentY + 13;

            deleteValue.eventMode = "static";
            deleteValue.cursor = "pointer";

            deleteValue.addEventListener("pointerdown", () => {
              this._infoAttributes = this._infoAttributes.filter(
                (infoAttribute) =>
                  infoAttribute.path !==
                  `${category.name}.${attribute.name}.${value.name}`
              );

              this.displayAttributeInfos();
            });

            this._infoContainer.addChild(deleteValue);
          }

          let attributeValue = new Text(value.displayName, {
            fontFamily: "Roboto",
            fontSize: 20,
          });

          attributeValue.x = currentX + 20;
          attributeValue.y = currentY + 10;

          this._infoContainer.addChild(attributeValue);

          let checkBoxLike = new Checkbox(levelAttribute.status === "like");
          checkBoxLike.x = currentX + 230;
          checkBoxLike.y = currentY;

          this._infoContainer.addChild(checkBoxLike);

          let checkBoxDislike = new Checkbox(
            levelAttribute.status === "dislike"
          );
          checkBoxDislike.x = currentX + 310;
          checkBoxDislike.y = currentY;

          this._infoContainer.addChild(checkBoxDislike);

          checkBoxLike.onChangeValue = (checkboxValue) => {
            if (checkboxValue) {
              checkBoxDislike.setChecked(false);
            }

            this._infoAttributes = this._infoAttributes.map((infoAttribute) => {
              if (
                infoAttribute.path ===
                `${category.name}.${attribute.name}.${value.name}`
              ) {
                return {
                  ...infoAttribute,
                  status: (infoAttribute.status = checkboxValue
                    ? "like"
                    : "none"),
                };
              } else {
                return infoAttribute;
              }
            });
          };

          checkBoxDislike.onChangeValue = (checkboxValue) => {
            if (checkboxValue) {
              checkBoxLike.setChecked(false);
            }

            this._infoAttributes = this._infoAttributes.map((infoAttribute) => {
              if (
                infoAttribute.path ===
                `${category.name}.${attribute.name}.${value.name}`
              ) {
                return {
                  ...infoAttribute,
                  status: (infoAttribute.status = checkboxValue
                    ? "dislike"
                    : "none"),
                };
              } else {
                return infoAttribute;
              }
            });
          };

          currentY += attributeValue.height + 20;
        });
      });
    });

    let buttonValidate = new Button("Validate");

    buttonValidate.x =
      (Manager.width / 3) * 2 +
      Manager.width / 3 / 2 -
      buttonValidate.width / 2;
    buttonValidate.y = Manager.height - 100;

    buttonValidate.onClick = () => {
      let valid = true;

      this._infoAttributes.forEach((infoAttribute) => {
        if (infoAttribute.status === "none") {
          valid = false;
        }

        if (infoAttribute.status === "like") {
          if (!this._level.likes.includes(infoAttribute.path)) {
            valid = false;
          }
        }

        if (infoAttribute.status === "dislike") {
          if (!this._level.dislikes.includes(infoAttribute.path)) {
            valid = false;
          }
        }
      });

      console.log("valid", valid);
    };

    this._infoContainer.addChild(buttonValidate);

    // Button Add Property

    if (this._level.canAddProperty) {
      let addPropertyButton = new Button("Add Property", {
        fontSize: 16,
      });

      addPropertyButton.x = (Manager.width / 3) * 2 + 20;
      addPropertyButton.y = currentY + 20;

      addPropertyButton.onClick = () => {
        let addPropertyWindow = new ModalProperty();
        addPropertyWindow.onValueChoosed = (value) => {
          this._infoAttributes.push({
            path: value,
            status: "none",
            canBeDeleted: true,
          });

          this.displayAttributeInfos();
        };

        this._infoContainer.addChild(addPropertyWindow);
      };

      this._infoContainer.addChild(addPropertyButton);
    }
  }

  update(_framesPassed: number): void {
    this._updatable.forEach((updatable) => {
      updatable.update(_framesPassed);
    });
  }

  public onProfileCardDrop(profile: Profile, sender: ProfileCard) {
    let like = false;
    let dislike = false;

    profile.attributes.forEach((attribute) => {
      if (this._level.likes.includes(attribute)) {
        like = true;
      }

      if (this._level.dislikes.includes(attribute)) {
        dislike = true;
      }
    });

    let matchNotif: MatchNotif;

    if (like && !dislike) {
      matchNotif = new MatchNotif({ x: 600, y: 200 }, "match");
    } else {
      matchNotif = new MatchNotif({ x: 600, y: 200 }, "noMatch");
    }

    sender.setLiked(like && !dislike ? "liked" : "disliked");

    this.addChild(matchNotif);

    console.log(profile);
  }
}
