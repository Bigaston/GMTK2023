import {
  Container,
  Sprite,
  Texture,
  Text,
  Assets,
  Ticker,
  Graphics,
} from "pixi.js";
import { IScene, Manager } from "../class/Manager";
import { ProfileCard } from "../class/ProfileCard";
import { IUpdatable } from "../class/IUpdatable";
import { ProfileHoverBackground } from "../class/ProfileHoverBackground";
import { ProfileCardPreview } from "../class/ProfileCardPreview";
import { Profile } from "../data/Profile";
import { MatchNotif } from "../class/MatchNotif";
import { Level, levels } from "../data/Level";
import { stringToCategory } from "../data/Attributes";
import { Checkbox } from "../class/Checkbox";
import { Button } from "../class/Button";
import { ModalProperty } from "../class/ModalProperty";
import { ModalWin } from "../class/ModalWin";
import textStyles from "../textStyles";
import { AudioManager } from "../class/AudioManager";

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

  private _numberOfTry: number = 0;
  private _numberOfCardUsed: number = 0;

  private _isOnErrorAnimation = false;
  private _errorAnimationTime = 0;
  private _errorAnimationDuration = 400;

  constructor(level: Level) {
    super();

    this._level = level;
    this._level.profiles.sort(() => Math.random() - 0.5);

    this._infoAttributes = this._level.alreadyPresentProperty.map((attr) => {
      return {
        status: attr.likeStatus,
        path: attr.path,
        canBeDeleted: false,
      };
    });

    this.sortableChildren = true;

    AudioManager.playMusicOneTime();

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

    // Matcher Picture
    let matcherPicture = Sprite.from(this._level.picture);
    matcherPicture.width = 300;
    matcherPicture.height = 300;

    this._matcherZone.x = Manager.width / 3 - matcherPicture.width / 2;
    this._matcherZone.y = Manager.height / 2 - matcherPicture.height;

    this._matcherZone.addChild(matcherPicture);

    // Matcher Info
    let matcherInfoBackground = Sprite.from(Texture.WHITE);
    matcherInfoBackground.width = 300;
    matcherInfoBackground.height = 50;
    matcherInfoBackground.y = 250;
    matcherInfoBackground.tint = 0x000000;
    matcherInfoBackground.alpha = 0.5;

    this._matcherZone.addChild(matcherInfoBackground);

    let matcherInfoText = new Text(this._level.name, {
      fontFamily: "Belanosima",
      fontSize: 24,
      fill: 0xffffff,
    });

    matcherInfoText.y = 250 + 10;
    matcherInfoText.x = 10;

    this._matcherZone.addChild(matcherInfoText);

    // Matcher Info Age
    let matcherInfoAge = new Text(`${this._level.age} y.o.`, {
      fontFamily: "Roboto",
      fontSize: 16,
      fill: 0xffffff,
    });

    matcherInfoAge.y = 250 + 18;
    matcherInfoAge.x = 300 - matcherInfoAge.width - 10;

    this._matcherZone.addChild(matcherInfoAge);

    // Matcher Mask
    // Mask
    let mask = new Graphics()
      .beginFill(0xffffff)
      .drawRoundedRect(0, 0, 300, 350, 10);

    this._matcherZone.addChild(mask);
    this._matcherZone.mask = mask;

    this.addChild(this._matcherZone);

    // Change Card Size
    if (this._level.profiles.length > 10) {
      ProfileCard.WIDTH = 100;
      ProfileCard.HEIGHT = 100;

      this._level.profiles.forEach((profile, index) => {
        let profileCard = new ProfileCard(profile, {
          x: (index % 7) * (ProfileCard.WIDTH + 16) + 20,
          y:
            Manager.height / 2 +
            Math.floor(index / 7) * (ProfileCard.HEIGHT + 16) +
            20,
        });

        this.addChild(profileCard);
      });
    } else {
      ProfileCard.WIDTH = 150;
      ProfileCard.HEIGHT = 150;

      this._level.profiles.forEach((profile, index) => {
        let profileCard = new ProfileCard(profile, {
          x: (index % 5) * (ProfileCard.WIDTH + 16) + 20,
          y:
            Manager.height / 2 +
            Math.floor(index / 5) * (ProfileCard.HEIGHT + 16) +
            20,
        });

        this.addChild(profileCard);
      });
    }

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

    // Info Part
    let infoPartBackground = Sprite.from(Texture.WHITE);
    infoPartBackground.width = Manager.width / 3;
    infoPartBackground.height = Manager.height;
    infoPartBackground.x = (Manager.width / 3) * 2;
    infoPartBackground.y = 0;

    infoPartBackground.tint = 0x00ff00;

    this.addChild(infoPartBackground);

    let infoTitle = new Text("User Like Profile", {
      ...textStyles.title,
      fontSize: 30,
    });

    infoTitle.x =
      (Manager.width / 3) * 2 + (Manager.width / 3 / 2 - infoTitle.width / 2);
    infoTitle.y = 5;

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
            wordWrap: true,
            wordWrapWidth: 215,
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

      if (
        this._infoAttributes.filter(
          (infoAttribute) => infoAttribute.status === "none"
        ).length > 0
      ) {
        valid = false;
      }

      if (
        this._level.likes.length !==
        this._infoAttributes.filter(
          (infoAttribute) => infoAttribute.status === "like"
        ).length
      ) {
        valid = false;
      }

      if (
        this._level.dislikes.length !==
        this._infoAttributes.filter(
          (infoAttribute) => infoAttribute.status === "dislike"
        ).length
      ) {
        valid = false;
      }

      console.log("valid", valid);

      this._level.likes.forEach((like) => {
        if (
          !this._infoAttributes.find(
            (infoAttribute) =>
              infoAttribute.path === like && infoAttribute.status === "like"
          )
        ) {
          valid = false;
        }
      });

      this._level.dislikes.forEach((dislike) => {
        if (
          !this._infoAttributes.find(
            (infoAttribute) =>
              infoAttribute.path === dislike &&
              infoAttribute.status === "dislike"
          )
        ) {
          valid = false;
        }
      });

      this._numberOfTry++;

      if (valid) {
        let modalWin = new ModalWin(
          this._numberOfTry,
          this._numberOfCardUsed,
          this._level.number === levels.length - 1
        );

        modalWin.onNextLevel = () => {
          let mainScene = new MainScene(levels[this._level.number + 1]);

          Manager.changeScene(mainScene);
        };

        modalWin.onBackMenu = () => {
          let mainScene = new MainScene(levels[0]);

          Manager.changeScene(mainScene);
        };

        this.addChild(modalWin);
      } else {
        this.onErrorGuess();
      }
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
          if (
            this._infoAttributes.find(
              (infoAttribute) => infoAttribute.path === value
            )
          ) {
            return;
          }

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

    // Mute Button
    let muteButton = Sprite.from(
      AudioManager.muted ? Assets.get("AudioOff") : Assets.get("AudioOn")
    );

    muteButton.width = 64;
    muteButton.height = 64;

    muteButton.x = 10;
    muteButton.y = 10;

    muteButton.eventMode = "static";
    muteButton.cursor = "pointer";

    muteButton.addEventListener("pointerdown", () => {
      if (AudioManager.muted) {
        AudioManager.unmute();
      } else {
        AudioManager.mute();
      }

      muteButton.texture = AudioManager.muted
        ? Assets.get("AudioOff")
        : Assets.get("AudioOn");
    });

    this.addChild(muteButton);
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

    this._numberOfCardUsed++;

    this.addChild(matchNotif);
  }

  public onErrorGuess() {
    this._isOnErrorAnimation = true;
    this._errorAnimationTime = 0;

    AudioManager.playSound("Buzzer", 0.1);
  }

  update(_framesPassed: number): void {
    if (this._isOnErrorAnimation) {
      this._errorAnimationTime += Ticker.shared.deltaMS;

      this.x = Math.random() * 10 - 5;
      this.y = Math.random() * 10 - 5;

      if (this._errorAnimationTime >= this._errorAnimationDuration) {
        this._errorAnimationTime = 0;
        this._isOnErrorAnimation = false;
        this.x = 0;
        this.y = 0;
      }
    }

    this._updatable.forEach((updatable) => {
      updatable.update(_framesPassed);
    });
  }
}
