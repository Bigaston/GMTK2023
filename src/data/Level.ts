import { Profile } from "./Profile";
import level1 from "./levels/Level1";

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

export let levels = [level1];
