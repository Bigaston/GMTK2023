import { Container, Sprite, Texture } from "pixi.js";
import { IScene, Manager } from "../class/Manager";
import level1 from "../data/levels/Level1";
import { ProfileCard } from "../class/ProfileCard";
import { IUpdatable } from "../class/IUpdatable";
import { ProfileHoverBackground } from "../class/ProfileHoverBackground";
import { ProfileCardPreview } from "../class/ProfileCardPreview";

export class MainScene extends Container implements IScene {
  private _userPart: Container;
  private _infoPart: Container;

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

  constructor() {
    super();

    this.sortableChildren = true;

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
    let cardPartBackground = Sprite.from(Texture.WHITE);
    cardPartBackground.width = (Manager.width / 3) * 2;
    cardPartBackground.height = Manager.height / 2;
    cardPartBackground.x = 0;
    cardPartBackground.y = Manager.height / 2;

    cardPartBackground.tint = 0x0000ff;

    this.addChild(cardPartBackground);

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
      let profileCard = new ProfileCard(profile);

      profileCard.x = (index % 5) * (ProfileCard.WIDTH + 16) + 20;
      profileCard.y =
        Manager.height / 2 +
        Math.floor(index / 5) * (ProfileCard.HEIGHT + 16) +
        20;

      this.addChild(profileCard);
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
  }

  update(_framesPassed: number): void {
    this._updatable.forEach((updatable) => {
      updatable.update(_framesPassed);
    });
  }
}
