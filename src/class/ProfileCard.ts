import {
  Assets,
  Container,
  Graphics,
  Sprite,
  Texture,
  Text,
  FederatedPointerEvent,
} from "pixi.js";
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

    this.addEventListener("pointerenter", () => {
      this.addEventListener("pointerleave", onPointerLeave);

      timeoutHover = setTimeout(() => {
        if (isDragging) {
          return;
        }

        this.zIndex = 1001;

        let currentScene = Manager.currentScene as MainScene;

        currentScene.profileHoverBackground.fadeIn().catch(() => {
          this.zIndex = 1;
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
        })
        .catch(() => {
          this.zIndex = 1;
        });

      currentScene.profileCardPreview.fadeOut().catch(() => {});
    };

    let mouseOffset = { x: 0, y: 0 };
    let initialPosition = { x: 0, y: 0 };
    let isDragging = false;

    this.addEventListener("pointerdown", (event) => {
      mouseOffset.x = event.data.global.x - this.x;
      mouseOffset.y = event.data.global.y - this.y;

      initialPosition.x = this.x;
      initialPosition.y = this.y;

      isDragging = true;

      this.addEventListener("pointermove", onPointerMove);
      this.addEventListener("pointerup", onPointerUp);

      let currentScene = Manager.currentScene as MainScene;

      this.zIndex = 10;

      currentScene.profileHoverBackground.hide();
      currentScene.profileCardPreview.hide();
    });

    let onPointerMove = (event: FederatedPointerEvent) => {
      this.x = event.data.global.x - mouseOffset.x;
      this.y = event.data.global.y - mouseOffset.y;
    };

    let onPointerUp = (_event: FederatedPointerEvent) => {
      isDragging = false;

      this.x = initialPosition.x;
      this.y = initialPosition.y;
      this.zIndex = 1;

      this.removeEventListener("pointermove", onPointerMove);
      this.removeEventListener("pointerup", onPointerUp);
    };
  }
}
