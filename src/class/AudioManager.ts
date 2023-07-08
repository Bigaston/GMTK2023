import { Assets } from "pixi.js";

export class AudioManager {
  constructor() {}

  private static _musicPlaying: boolean = false;
  public static playMusicOneTime() {
    if (!this._musicPlaying) {
      this._musicPlaying = true;
      let asset = Assets.get("Music");
      asset.loop = true;
      asset.volume(0.5);
      asset.play();
    }
  }
}
