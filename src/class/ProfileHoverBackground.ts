import { Sprite, Texture, Ticker } from "pixi.js";
import { Manager } from "./Manager";
import { IUpdatable } from "./IUpdatable";

export class ProfileHoverBackground extends Sprite implements IUpdatable {
  private animationDirection: "none" | "fadeIn" | "fadeOut" = "none";
  private duration = 300;
  private time = 0;

  private _animationPromise:
    | null
    | ((value: void | PromiseLike<void>) => void) = null;
  private _animationPromiseReject: null | ((reason?: any) => void) = null;

  constructor() {
    super(Texture.WHITE);

    this.width = Manager.width;
    this.height = Manager.height;
    this.zIndex = 500;

    this.tint = 0x000000;
    this.alpha = 0;
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
      this.alpha = (this.time / this.duration) * 0.5;
    } else if (this.animationDirection === "fadeOut") {
      this.alpha = 0.5 - (this.time / this.duration) * 0.5;
    }
  }

  public fadeIn(): Promise<void> {
    if (this.animationDirection !== "none" && this._animationPromiseReject) {
      this._animationPromiseReject();
    }

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
}
