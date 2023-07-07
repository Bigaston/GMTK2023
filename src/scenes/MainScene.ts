import { Container, Sprite, Texture } from "pixi.js";
import { IScene, Manager } from "../class/Manager";
import level1 from "../data/levels/Level1";
import { ProfileCard } from "../class/ProfileCard";

export class MainScene extends Container implements IScene {
  private _userPart: Container;
  private _cardPart: Container;
  private _infoPart: Container;

  constructor() {
    super();

    // User Part
    this._userPart = new Container();
    this._userPart.x = 0;
    this._userPart.y = 0;

    let userPartBackground = Sprite.from(Texture.WHITE);
    userPartBackground.width = (Manager.width / 3) * 2;
    userPartBackground.height = Manager.height / 2;

    userPartBackground.tint = 0xff0000;

    this._userPart.addChild(userPartBackground);

    this.addChild(this._userPart);

    // Card Parts
    this._cardPart = new Container();
    this._cardPart.x = 0;
    this._cardPart.y = Manager.height / 2;

    let cardPartBackground = Sprite.from(Texture.WHITE);
    cardPartBackground.width = (Manager.width / 3) * 2;
    cardPartBackground.height = Manager.height / 2;

    cardPartBackground.tint = 0x0000ff;

    this._cardPart.addChild(cardPartBackground);

    this.addChild(this._cardPart);

    // Info Part
    this._infoPart = new Container();
    this._infoPart.x = (Manager.width / 3) * 2;
    this._infoPart.y = 0;

    let infoPartBackground = Sprite.from(Texture.WHITE);
    infoPartBackground.width = Manager.width / 3;
    infoPartBackground.height = Manager.height;

    infoPartBackground.tint = 0x00ff00;

    this._infoPart.addChild(infoPartBackground);

    this.addChild(this._infoPart);

    // Import Profile Card
    let level = level1;

    level.profiles.forEach((profile, index) => {
      console.log(profile);
      let profileCard = new ProfileCard(profile);

      profileCard.x = (index % 5) * (ProfileCard.WIDTH + 16) + 20;
      profileCard.y = Math.floor(index / 5) * (ProfileCard.HEIGHT + 16) + 20;

      this._cardPart.addChild(profileCard);
    });
  }

  update(_framesPassed: number): void {}
}
