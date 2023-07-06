import { PhysicSprite } from "./PhysicSprite";

import Gamepad from "@brianchirls/game-input/devices/Gamepad";
import Keyboard from "@brianchirls/game-input/devices/Keyboard";
import DPadComposite from "@brianchirls/game-input/controls/DPadComposite";
import { Action } from "@brianchirls/game-input";
import { Texture } from "pixi.js";
import { Bodies, Body } from "matter-js";

export class Character extends PhysicSprite {
  private gamepad: Gamepad;
  private moveAction: Action<[number, number]>;

  constructor(
    texture?: Texture,
    position?: { x: number; y: number },
    physicOptions?: Matter.IChamferableBodyDefinition
  ) {
    super(texture, position, { ...physicOptions, friction: 0.1 });

    this.gamepad = new Gamepad();
    const keyboard = new Keyboard();

    const leftStick = this.gamepad.getControl("leftStick");

    // It takes four keys to go in four directions
    const kbdWASD = new DPadComposite({
      up: keyboard.getControl("KeyW"),
      left: keyboard.getControl("KeyA"),
      down: keyboard.getControl("KeyS"),
      right: keyboard.getControl("KeyD"),
    });

    this.moveAction = new Action({
      bindings: [leftStick, kbdWASD],
    });
  }

  public update() {
    this.gamepad.update();

    const [x, y] = this.moveAction.value;

    Body.setPosition(this.body, {
      x: this.body.position.x + x * 2,
      y: this.body.position.y,
    });

    this.body.angle = 0;

    super.update();
  }
}
