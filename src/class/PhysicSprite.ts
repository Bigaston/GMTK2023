import { Bodies, Body } from "matter-js";
import { Sprite, Texture } from "pixi.js";

export class PhysicSprite extends Sprite {
  private _body: Body;

  public get body(): Body {
    return this._body;
  }

  constructor(
    texture?: Texture,
    position?: { x: number; y: number },
    physicOptions?: Matter.IChamferableBodyDefinition
  ) {
    super(texture);
    this.x = position?.x || 0;
    this.y = position?.y || 0;

    this._body = Bodies.rectangle(
      position?.x || 0,
      position?.y || 0,
      this.width,
      this.height,
      physicOptions
    );
  }

  public setPosition(value: { x: number; y: number }) {
    this.position.x = value.x;
    this.position.y = value.y;
    this.body.position.x = value.x;
    this.body.position.y = value.y;

    console.log(this);
  }

  public update() {
    this.position.x = this.body.position.x;
    this.position.y = this.body.position.y;
    this.rotation = this.body.angle;
  }
}
