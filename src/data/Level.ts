import { Profile } from "./Profile";

export interface Level {
  number: number;
  profiles: Profile[];
  likes: string[];
  dislikes: string[];
}
