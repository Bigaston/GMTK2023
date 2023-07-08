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
  private _likedStatus: "liked" | "disliked" | undefined = undefined;
  private _initialPosition: { x: number; y: number } = { x: 0, y: 0 };
  private _isDragging: boolean = false;

  constructor(profile: Profile, position: { x: number; y: number }) {
    super();

    this.cursor = "pointer";
    this.eventMode = "static";

    this.x = position.x;
    this.y = position.y;

    this._profile = profile;
    this._initialPosition = position;

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
      fontFamily: "Belanosima",
      fontSize: 20,
      fill: 0xffffff,
    });

    name.x = 10;
    name.y = ProfileCard.HEIGHT - infoContainerBackground.height + 5;

    this.addChild(name);

    // Age
    let age = new Text(`${profile.age} y.o.`, {
      fontFamily: "Roboto",
      fontSize: 12,
      fill: 0xffffff,
    });

    age.x = 10;
    age.y = ProfileCard.HEIGHT - infoContainerBackground.height + 30;

    this.addChild(age);

    // Hover Pointer Event
    let timeoutHover: number;

    this.addEventListener("pointerenter", () => {
      if (this._isDragging) {
        return;
      }

      this.addEventListener("pointerleave", onPointerLeave);

      timeoutHover = setTimeout(() => {
        if (this._isDragging) {
          return;
        }

        this.zIndex = 501;

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

    this.addEventListener("pointerdown", (event) => {
      if (this._likedStatus !== undefined) return;

      mouseOffset.x = event.data.global.x - this.x;
      mouseOffset.y = event.data.global.y - this.y;

      this._isDragging = true;

      this.addEventListener("pointermove", onPointerMove);
      this.addEventListener("pointerup", onPointerUp);
      this.addEventListener("pointerupoutside", onPointerUp);

      let currentScene = Manager.currentScene as MainScene;

      this.zIndex = 10;

      currentScene.profileHoverBackground.hide();
      currentScene.profileCardPreview.hide();
    });

    let onPointerMove = (event: FederatedPointerEvent) => {
      this.x = event.data.global.x - mouseOffset.x;
      this.y = event.data.global.y - mouseOffset.y;
    };

    let onPointerUp = (event: FederatedPointerEvent) => {
      this._isDragging = false;
      clearTimeout(timeoutHover);

      this.x = this._initialPosition.x;
      this.y = this._initialPosition.y;

      this.zIndex = 1;

      this.removeEventListener("pointermove", onPointerMove);
      this.removeEventListener("pointerup", onPointerUp);
      this.removeEventListener("pointerupoutside", onPointerUp);

      let currentScene = Manager.currentScene as MainScene;

      if (
        currentScene.matcherZone
          .getBounds()
          .contains(event.data.global.x, event.data.global.y)
      ) {
        currentScene.onProfileCardDrop(this._profile, this);
      }
    };
  }

  public setLiked(likedStatus: "liked" | "disliked") {
    this._likedStatus = likedStatus;

    this.cursor = "default";

    let likedSprite = Sprite.from(
      likedStatus === "liked" ? Assets.get("Heart") : Assets.get("BrokenHeart")
    );
    likedSprite.width = 50;
    likedSprite.height = 50;
    likedSprite.x = ProfileCard.WIDTH - likedSprite.width;
    likedSprite.y = 0;

    this.addChild(likedSprite);
  }
}
