import { Container } from "pixi.js";
import { IScene } from "../class/Manager";

export class MainMenu extends Container implements IScene {
  constructor() {
    super();
  }

  update(framesPassed: number): void {}
}
