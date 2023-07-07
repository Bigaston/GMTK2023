import { Assets, Container, Graphics, Sprite, Texture, Text } from "pixi.js";
import { Profile } from "../data/Profile";
import { MainScene } from "../scenes/MainScene";
import { Manager } from "./Manager";

export class ProfileCard extends Container {
  public static readonly WIDTH = 150;
  public static readonly HEIGHT = 150;
  public static readonly HOVER_TIMEOUT = 300;

  private _profile: Profile;

  constructor(profile: Profile) {
    super();

    // this.width = ProfileCard.WIDTH;
    // this.height = ProfileCard.HEIGHT;
    this.cursor = "pointer";
    this.eventMode = "static";

    this._profile = profile;

    let mask = new Graphics()
      .beginFill(0xffffff)
      .drawRoundedRect(0, 0, ProfileCard.WIDTH, ProfileCard.HEIGHT, 10);

    this.addChild(mask);
    this.mask = mask;

    // Profile Picture
    let profilePicture = Sprite.from(Assets.get(profile.profilePicture));
    profilePicture.width = ProfileCard.WIDTH;
    profilePicture.height = ProfileCard.HEIGHT;

    this.addChild(profilePicture);

    // Info Container
    let infoContainerBackground = Sprite.from(Texture.WHITE);
    infoContainerBackground.width = ProfileCard.WIDTH;
    infoContainerBackground.height = ProfileCard.HEIGHT / 3;

    infoContainerBackground.y =
      ProfileCard.HEIGHT - infoContainerBackground.height;

    infoContainerBackground.tint = 0x000000;
    infoContainerBackground.alpha = 0.5;

    this.addChild(infoContainerBackground);

    // Name
    let name = new Text(profile.name, {
      fontFamily: "Caprasimo",
      fontSize: 12,
      fill: 0xffffff,
    });

    name.x = 10;
    name.y = ProfileCard.HEIGHT - infoContainerBackground.height + 10;

    this.addChild(name);

    // Age
    let age = new Text(`Age: ${profile.age}`, {
      fontFamily: "Arial",
      fontSize: 12,
      fill: 0xffffff,
    });

    age.x = 10;
    age.y = ProfileCard.HEIGHT - infoContainerBackground.height + 30;

    this.addChild(age);

    // Hover Pointer Event
    let timeoutHover: number;
    let isAnimationFinished = false;

    this.addEventListener("pointerenter", () => {
      this.addEventListener("pointerleave", onPointerLeave);

      timeoutHover = setTimeout(() => {
        this.zIndex = 1001;

        let currentScene = Manager.currentScene as MainScene;

        currentScene.profileHoverBackground
          .fadeIn()
          .then(() => {
            isAnimationFinished = true;
          })
          .catch(() => {
            isAnimationFinished = true;
          });

        currentScene.profileCardPreview.fadeIn(profile).catch(() => {});
      }, ProfileCard.HOVER_TIMEOUT);
    });

    let onPointerLeave = () => {
      this.removeEventListener("pointerleave", onPointerLeave);
      clearTimeout(timeoutHover);

      let currentScene = Manager.currentScene as MainScene;

      currentScene.profileHoverBackground
        .fadeOut()
        .then(() => {
          this.zIndex = 1;

          isAnimationFinished = false;
        })
        .catch(() => {
          this.zIndex = 1;

          isAnimationFinished = false;
        });

      currentScene.profileCardPreview.fadeOut().catch(() => {});
    };
  }
}
