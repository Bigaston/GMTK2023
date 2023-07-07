import { Assets, Container, Graphics, Sprite, Texture, Ticker } from "pixi.js";
import { Profile } from "../data/Profile";
import { IUpdatable } from "./IUpdatable";

export class ProfileCardPreview extends Container implements IUpdatable {
  public static readonly WIDTH = 300;
  public static readonly HEIGHT = 300;

  private animationDirection: "none" | "fadeIn" | "fadeOut" = "none";
  private duration = 300;
  private time = 0;

  private _animationPromise:
    | null
    | ((value: void | PromiseLike<void>) => void) = null;
  private _animationPromiseReject: null | ((reason?: any) => void) = null;

  private _profilePicture: Sprite;

  constructor() {
    super();

    this.alpha = 0;
    this.zIndex = 1001;

    this._profilePicture = new Sprite(Texture.EMPTY);
    this._profilePicture.width = ProfileCardPreview.WIDTH;
    this._profilePicture.height = ProfileCardPreview.HEIGHT;

    this.addChild(this._profilePicture);

    // Mask
    let mask = new Graphics()
      .beginFill(0xffffff)
      .drawRoundedRect(
        0,
        0,
        ProfileCardPreview.WIDTH,
        ProfileCardPreview.HEIGHT,
        10
      );

    this.addChild(mask);
    this.mask = mask;
  }

  public update(_frameElapsed: number): void {
    if (this.animationDirection === "none") {
      return;
    }

    this.time += Ticker.shared.elapsedMS;

    if (this.time >= this.duration) {
      this.time = this.duration;

      if (this.animationDirection === "fadeOut") {
        this.visible = false;
      }

      this.animationDirection = "none";

      if (this._animationPromise !== null) this._animationPromise();
    }

    if (this.animationDirection === "fadeIn") {
      this.alpha = this.time / this.duration;
    } else if (this.animationDirection === "fadeOut") {
      this.alpha = 1 - this.time / this.duration;
    }
  }

  public fadeIn(profile: Profile): Promise<void> {
    if (this.animationDirection !== "none" && this._animationPromiseReject) {
      this._animationPromiseReject();
    }

    this.updateProfile(profile);

    this.animationDirection = "fadeIn";
    this.time = 0;
    this.visible = true;

    let promise = new Promise<void>((resolve, reject) => {
      this._animationPromise = resolve;
      this._animationPromiseReject = reject;
    });

    return promise;
  }

  public fadeOut(): Promise<void> {
    if (this.animationDirection !== "none" && this._animationPromiseReject) {
      this._animationPromiseReject();
    }

    this.animationDirection = "fadeOut";
    this.time = 0;

    let promise = new Promise<void>((resolve, reject) => {
      this._animationPromise = resolve;
      this._animationPromiseReject = reject;
    });

    return promise;
  }

  public hide() {
    this.alpha = 0;
    this.visible = false;
    this.animationDirection = "none";

    if (this._animationPromiseReject !== null) this._animationPromiseReject();
  }

  public updateProfile(profile: Profile): void {
    this._profilePicture.texture = Assets.get(profile.profilePicture);
  }
}
