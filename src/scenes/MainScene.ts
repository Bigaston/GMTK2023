import { Assets, Container } from "pixi.js";
import { Composite, World as PhysicWorld } from "matter-js";
import { IScene, Manager } from "../class/Manager";
import { PhysicSprite } from "../class/PhysicSprite";

export class MainScene extends Container implements IScene {
  private world = PhysicWorld.create({
    gravity: {
      x: 0,
      y: 1,
      scale: 0.001,
    },
  });

  private sprites: PhysicSprite[] = [];

  constructor() {
    super();

    for (let x = 0; x < 16; x++) {
      let tile = new PhysicSprite(
        Assets.get("Tile"),
        { x: x * 64, y: 600 },
        { isStatic: true }
      );

      this.addChild(tile);
      Composite.add(this.world, [tile.body]);
    }

    // Character
    let character = new PhysicSprite(Assets.get("Character"), {
      x: 100,
      y: 100,
    });
    this.addChild(character);

    Composite.add(this.world, [character.body]);

    this.sprites.push(character);

    Manager.changePhysicWorld(this.world);
  }

  update(framesPassed: number): void {
    this.sprites.forEach((sprite) => {
      sprite.update();
    });
  }
}
