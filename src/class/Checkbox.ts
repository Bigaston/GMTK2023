import { Assets, Sprite } from "pixi.js";
import { AudioManager } from "./AudioManager";

export class Checkbox extends Sprite {
  public onChangeValue: (value: boolean) => void = () => {};

  private _checked: boolean = false;

  constructor(checked: boolean = false) {
    super(checked ? Assets.get("CheckboxChecked") : Assets.get("Checkbox"));

    this._checked = checked;

    this.eventMode = "static";
    this.cursor = "pointer";

    this.addEventListener("pointerdown", () => {
      this._checked = !this._checked;

      this.texture = this._checked
        ? Assets.get("CheckboxChecked")
        : Assets.get("Checkbox");

      this.onChangeValue(this._checked);

      AudioManager.playSound("UIClick");
    });
  }

  public setChecked(checked: boolean) {
    this._checked = checked;

    this.texture = this._checked
      ? Assets.get("CheckboxChecked")
      : Assets.get("Checkbox");
  }
}
