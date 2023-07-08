import { Manager } from "./class/Manager";
import { LoaderScene } from "./scenes/LoaderScene";
import HowlerLoaderParser from "howler-pixi-loader-middleware";
import "./style.css";
import { extensions } from "pixi.js";

const width = 1280;
const height = 720;

extensions.add(HowlerLoaderParser);

Manager.initialize(width, height, 0x000000);

const loady = new LoaderScene();
Manager.changeScene(loady);
