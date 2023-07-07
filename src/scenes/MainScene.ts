import { Container, Sprite, Texture } from "pixi.js";
import { IScene, Manager } from "../class/Manager";

export class MainScene extends Container implements IScene {
  private _userPart: Sprite;
  private _cardPart: Sprite;
  private _infoPart: Sprite;

  constructor() {
    super();

    // User Part
    this._userPart = Sprite.from(Texture.WHITE);
    this._userPart.width = (Manager.width / 3) * 2;
    this._userPart.height = Manager.height / 2;
    this._userPart.x = 0;
    this._userPart.y = 0;

    this._userPart.tint = 0xff0000;

    this.addChild(this._userPart);

    // Card Parts
    this._cardPart = Sprite.from(Texture.WHITE);

    this._cardPart.width = (Manager.width / 3) * 2;
    this._cardPart.height = Manager.height / 2;
    this._cardPart.x = 0;
    this._cardPart.y = Manager.height / 2;

    this._cardPart.tint = 0x0000ff;

    this.addChild(this._cardPart);

    // Info Part
    this._infoPart = Sprite.from(Texture.WHITE);
    this._infoPart.width = Manager.width / 3;
    this._infoPart.height = Manager.height;

    this._infoPart.x = (Manager.width / 3) * 2;
    this._infoPart.y = 0;

    this._infoPart.tint = 0x00ff00;

    this.addChild(this._infoPart);
  }

  update(_framesPassed: number): void {}
}
