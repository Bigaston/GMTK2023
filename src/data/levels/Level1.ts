import { attributes } from "../Attributes";
import { Level } from "../Level";
import profile1 from "../profiles/1";
import profile12 from "../profiles/12";
import profile15 from "../profiles/15";
import profile16 from "../profiles/16";
import profile9_1 from "../profiles/9_1";

const level1: Level = {
  number: 0,
  profiles: [profile1, profile12, profile16, profile15, profile9_1],
  likes: [
    attributes.physical.hairColor.dark,
    attributes.activity.goout.netflix,
  ],
  dislikes: [attributes.various.pets.dog],
  alreadyPresentProperty: [
    {
      path: attributes.physical.hairColor.dark,
      likeStatus: "none",
    },
    {
      path: attributes.activity.goout.netflix,
      likeStatus: "none",
    },
    {
      path: attributes.various.pets.dog,
      likeStatus: "none",
    },
  ],
  canAddProperty: false,
};

export default level1;
