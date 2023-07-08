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

  constructor(level: Level) {
    super();

    this._level = level;

    this._infoAttributes = this._level.alreadyPresentProperty.map((attr) => {
      return {
        status: "none",
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

    let neededCategory = stringToCategory(
      this._infoAttributes.map((attribute) => attribute.path)
    );

    let currentY = 80;
    let currentX = (Manager.width / 3) * 2 + 20;

    console.log(neededCategory);

    neededCategory.forEach((category) => {
      currentY += 30;

      let categoryTitle = new Text(category.displayName, {
        fontFamily: "Roboto",
        fontSize: 26,
      });

      categoryTitle.x = currentX;
      categoryTitle.y = currentY;

      currentY += categoryTitle.height + 5;

      this.addChild(categoryTitle);

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
          let attributeValue = new Text(value.displayName, {
            fontFamily: "Roboto",
            fontSize: 20,
          });

          attributeValue.x = currentX + 20;
          attributeValue.y = currentY + 10;

          this.addChild(attributeValue);

          let checkBoxLike = new Checkbox(false);
          checkBoxLike.x = currentX + 230;
          checkBoxLike.y = currentY;

          this.addChild(checkBoxLike);

          let checkBoxDislike = new Checkbox(false);
          checkBoxDislike.x = currentX + 310;
          checkBoxDislike.y = currentY;

          this.addChild(checkBoxDislike);

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
