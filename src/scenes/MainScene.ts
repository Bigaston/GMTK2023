import { Container } from "pixi.js";
import { IScene } from "../class/Manager";

export class MainScene extends Container implements IScene {
  constructor() {
    super();
  }

  update(_framesPassed: number): void {}
}
