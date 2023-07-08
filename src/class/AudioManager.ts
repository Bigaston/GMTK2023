import { Assets } from "pixi.js";
import { Howl } from "howler";

export class AudioManager {
  constructor() {}

  private static _musicPlaying: boolean = false;
  private static _music: Howl;

  private static _muted: boolean = localStorage.getItem("muted") === "true";
  public static get muted(): boolean {
    return this._muted;
  }

  public static playMusicOneTime() {
    if (!this._musicPlaying) {
      this._musicPlaying = true;
      AudioManager._music = Assets.get("Music");
      AudioManager._music.loop(true);
      AudioManager._music.mute(this._muted);
      AudioManager._music.play();
      AudioManager._music.volume(0.5);
    }
  }

  public static playSound(sound: string, volume: number = 0.5) {
    if (!this._muted) {
      console.log(sound);
      let soundAsset: Howl = Assets.get(sound);
      soundAsset.play();
      soundAsset.volume(volume);
    }
  }

  public static mute() {
    this._muted = true;
    this._music.mute(true);

    localStorage.setItem("muted", "true");
  }

  public static unmute() {
    this._muted = false;
    this._music.mute(false);
    localStorage.setItem("muted", "false");
  }
}
