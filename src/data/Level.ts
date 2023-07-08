import { Profile } from "./Profile";

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
