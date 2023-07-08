import { Profile } from "./Profile";
import level1 from "./levels/Level1";
import level2 from "./levels/Level2";
import level3 from "./levels/Level3";
import level4 from "./levels/Level4";
import level5 from "./levels/Level5";

export interface Level {
  number: number;
  profiles: Profile[];
  likes: string[];
  dislikes: string[];
  alreadyPresentProperty: LevelAttribute[];
  canAddProperty: boolean;
}

export interface LevelAttribute {
  path: string;
  likeStatus: "like" | "dislike" | "none";
}

export let levels = [level1, level2, level3, level4, level5];
