import { Container, Sprite, Texture } from "pixi.js";
import { IScene, Manager } from "../class/Manager";
import level1 from "../data/levels/Level1";
import { ProfileCard } from "../class/ProfileCard";
import { IUpdatable } from "../class/IUpdatable";
import { ProfileHoverBackground } from "../class/ProfileHoverBackground";
import { ProfileCardPreview } from "../class/ProfileCardPreview";
import { Profile } from "../data/Profile";
import { MatchNotif } from "../class/MatchNotif";

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

  constructor() {
    super();

    this.sortableChildren = true;

    // User Part
    let userPartBackground = Sprite.from(Texture.WHITE);
    userPartBackground.width = (Manager.width / 3) * 2;
    userPartBackground.height = Manager.height / 2;
    userPartBackground.x = 0;
    userPartBackground.y = 0;

    userPartBackground.tint = 0xff0000;

    this.addChild(userPartBackground);

    // Card Parts
    let cardPartBackground = Sprite.from(Texture.WHITE);
    cardPartBackground.width = (Manager.width / 3) * 2;
    cardPartBackground.height = Manager.height / 2;
    cardPartBackground.x = 0;
    cardPartBackground.y = Manager.height / 2;

    cardPartBackground.tint = 0x0000ff;

    this.addChild(cardPartBackground);

    // Info Part
    let infoPartBackground = Sprite.from(Texture.WHITE);
    infoPartBackground.width = Manager.width / 3;
    infoPartBackground.height = Manager.height;
    infoPartBackground.x = (Manager.width / 3) * 2;
    infoPartBackground.y = 0;

    infoPartBackground.tint = 0x00ff00;

    this.addChild(infoPartBackground);

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

    // Matcher Picture
    let matcherPicture = Sprite.from(Texture.WHITE);
    matcherPicture.width = 300;
    matcherPicture.height = 300;
    matcherPicture.tint = 0x00ffff;

    this._matcherZone.x = Manager.width / 3 - matcherPicture.width / 2;
    this._matcherZone.y = Manager.height / 2 - matcherPicture.height;

    this._matcherZone.addChild(matcherPicture);

    this.addChild(this._matcherZone);
  }

  update(_framesPassed: number): void {
    this._updatable.forEach((updatable) => {
      updatable.update(_framesPassed);
    });
  }

  public onProfileCardDrop(profile: Profile, sender: ProfileCard) {
    sender.removeFromParent();

    let matchNotif = new MatchNotif({ x: 600, y: 200 });

    this.addChild(matchNotif);

    console.log(profile);
  }
}
