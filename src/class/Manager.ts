import { appWindow } from "@tauri-apps/api/window";
import { Application, DisplayObject, BaseTexture, SCALE_MODES } from "pixi.js";

BaseTexture.defaultOptions.scaleMode = SCALE_MODES.NEAREST;

export class Manager {
  private constructor() {
    /*this class is purely static. No constructor to see here*/
  }

  // Safely store variables for our game
  private static app: Application;
  private static _currentScene: IScene;

  public static get currentScene(): IScene {
    return Manager._currentScene;
  }

  // Width and Height are read-only after creation (for now)
  private static _width: number;
  private static _height: number;

  // With getters but not setters, these variables become read-only
  public static get width(): number {
    return Manager._width;
  }
  public static get height(): number {
    return Manager._height;
  }

  private static _renderElement: HTMLCanvasElement = document.getElementById(
    "pixi-canvas"
  ) as HTMLCanvasElement;

  public static toggleFullscreen(): void {
    if ((window as any).__TAURI_IPC__ !== undefined) {
      appWindow.isFullscreen().then((isFullscreen) => {
        appWindow.setFullscreen(!isFullscreen);
      });
    } else {
      document.documentElement.requestFullscreen();
    }
  }

  // Use this function ONCE to start the entire machinery
  public static initialize(
    width: number,
    height: number,
    background: number
  ): void {
    // store our width and height
    Manager._width = width;
    Manager._height = height;

    // Create our pixi app
    Manager.app = new Application({
      view: Manager._renderElement,
      resolution: window.devicePixelRatio || 1,
      autoDensity: true,
      backgroundColor: background,
      width: width,
      height: height,
      sharedTicker: true,
    });

    window.addEventListener("resize", Manager.resize);
    Manager.resize();

    // Add the ticker
    Manager.app.ticker.add(Manager.update);

    document.addEventListener("keydown", (e) => {
      if (e.key === "F11") {
        Manager.toggleFullscreen();
      }
    });
  }

  // Call this function when you want to go to a new scene
  public static changeScene(newScene: IScene): void {
    // Remove and destroy old scene... if we had one..
    if (Manager._currentScene) {
      Manager.app.stage.removeChild(Manager._currentScene);
      Manager._currentScene.destroy();
    }

    // Add the new one
    Manager._currentScene = newScene;
    Manager.app.stage.addChild(Manager._currentScene);
  }

  // This update will be called by a pixi ticker and tell the scene that a tick happened
  private static update(framesPassed: number): void {
    // Let the current scene know that we updated it...
    // Just for funzies, sanity check that it exists first.
    if (Manager._currentScene) {
      Manager._currentScene.update(framesPassed);
    }

    // as I said before, I HATE the "frame passed" approach. I would rather use `Manager.app.ticker.deltaMS`
  }

  private static resize(): void {
    // current screen size
    let container = document.getElementById("app") as HTMLDivElement;

    const screenWidth = container.clientWidth;
    const screenHeight = container.clientHeight;

    // uniform scale for our game
    const scale = Math.min(
      screenWidth / Manager._width,
      screenHeight / Manager._height
    );

    // the "uniformly englarged" size for our game
    const enlargedWidth = Math.floor(scale * Manager._width);
    const enlargedHeight = Math.floor(scale * Manager._height);

    // margins for centering our game
    const horizontalMargin = (screenWidth - enlargedWidth) / 2;
    const verticalMargin = (screenHeight - enlargedHeight) / 2;

    // now we use css trickery to set the sizes and margins
    Manager.app.view.style!.width = `${enlargedWidth}px`;
    Manager.app.view.style!.height = `${enlargedHeight}px`;
    (Manager.app.view as unknown as HTMLCanvasElement).style.marginLeft = (
      Manager.app.view as unknown as HTMLCanvasElement
    ).style.marginRight = `${horizontalMargin}px`;
    (Manager.app.view as unknown as HTMLCanvasElement).style.marginTop = (
      Manager.app.view as unknown as HTMLCanvasElement
    ).style.marginBottom = `${verticalMargin}px`;
  }
}

// This could have a lot more generic functions that you force all your scenes to have. Update is just an example.
// Also, this could be in its own file...
export interface IScene extends DisplayObject {
  update(framesPassed: number): void;
}
