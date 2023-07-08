import { Manager } from "./class/Manager";
import { LoaderScene } from "./scenes/LoaderScene";
import "./style.css";

const width = 1280;
const height = 720;

Manager.initialize(width, height, 0x000000);

const loady = new LoaderScene();
Manager.changeScene(loady);
