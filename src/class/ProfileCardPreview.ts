import {
  Assets,
  Container,
  Graphics,
  Sprite,
  Text,
  Texture,
  Ticker,
} from "pixi.js";
import { Profile } from "../data/Profile";
import { IUpdatable } from "./IUpdatable";
import { AttributeCategory, attributesCategory } from "../data/Attributes";

export class ProfileCardPreview extends Container implements IUpdatable {
  public static readonly WIDTH = 600;
  public static readonly HEIGHT = 300;

  private animationDirection: "none" | "fadeIn" | "fadeOut" = "none";
  private duration = 300;
  private time = 0;

  private _animationPromise:
    | null
    | ((value: void | PromiseLike<void>) => void) = null;
  private _animationPromiseReject: null | ((reason?: any) => void) = null;

  private _profilePicture: Sprite;
  private _infoContainer: Container;

  constructor() {
    super();

    this.alpha = 0;
    this.zIndex = 1001;

    let background = Sprite.from(Texture.WHITE);
    background.width = ProfileCardPreview.WIDTH;
    background.height = ProfileCardPreview.HEIGHT;

    this.addChild(background);

    this._profilePicture = new Sprite(Texture.EMPTY);
    this._profilePicture.width = ProfileCardPreview.WIDTH / 2;
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

    // Info Container
    this._infoContainer = new Container();
    this._infoContainer.x = ProfileCardPreview.WIDTH / 2;
    this._infoContainer.y = 0;

    this.addChild(this._infoContainer);
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

    this._infoContainer.removeChildren();

    let profileName = new Text(profile.name, {
      fontFamily: "Belanosima",
      fontSize: 30,
      fill: 0x000000,
    });
    profileName.x = 10;

    this._infoContainer.addChild(profileName);

    let profileAge = new Text(`${profile.age.toString()} y.o.`, {
      fontFamily: "Roboto",
      fontSize: 16,
      fill: 0x000000,
    });

    profileAge.x = ProfileCardPreview.WIDTH / 2 - profileAge.width - 10;
    profileAge.y = 14;

    this._infoContainer.addChild(profileAge);

    let profileDescription = new Text(`‟${profile.description}”`, {
      fontFamily: "Roboto",
      fontSize: 16,
      fill: 0x000000,
      wordWrap: true,
      wordWrapWidth: ProfileCardPreview.WIDTH / 2 - 20,
      fontStyle: "italic",
    });

    profileDescription.x = 10;
    profileDescription.y = 50;

    this._infoContainer.addChild(profileDescription);

    // Displayed Attributes
    let neededSubCategory = profile.displayedAttributes.map(
      (attribute) => attribute.split(".")[0] + "." + attribute.split(".")[1]
    );

    let neededCategory = profile.displayedAttributes
      .map((attribute) => attribute.split(".")[0])
      .map(
        (attributeCate) =>
          attributesCategory.find((cate) => cate.name === attributeCate)!
      )
      .filter((cate, index, array) => array.indexOf(cate) === index)
      .map((cate) => {
        return {
          ...cate,
          attributes: cate.attributes
            .filter((attribute) =>
              neededSubCategory.includes(cate.name + "." + attribute.name)
            )
            .map((attribute) => {
              return {
                ...attribute,
                value: attribute.value.filter((value) =>
                  profile.displayedAttributes.includes(
                    cate.name + "." + attribute.name + "." + value.name
                  )
                ),
              };
            }),
        } as AttributeCategory;
      });

    let currentY = profileDescription.y + profileDescription.height + 10;

    neededCategory.forEach((cate) => {
      let categoryText = new Text(cate.displayName, {
        fontFamily: "Roboto",
        fontSize: 16,
        fill: 0x000000,
        fontWeight: "bold",
      });

      categoryText.x = 10;
      categoryText.y = currentY;

      this._infoContainer.addChild(categoryText);

      currentY += categoryText.height + 5;

      cate.attributes.forEach((attribute) => {
        let attributeText = new Text(
          `${attribute.displayName}: ${attribute.value[0].displayName}`,
          {
            fontFamily: "Roboto",
            fontSize: 14,
            fill: 0x000000,
          }
        );

        attributeText.x = 20;
        attributeText.y = currentY;

        this._infoContainer.addChild(attributeText);

        currentY += attributeText.height + 5;
      });
    });

    console.log(neededCategory);
  }
}
