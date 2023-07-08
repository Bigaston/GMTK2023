import { attributes } from "../Attributes";
import { Level } from "../Level";

import benguigui from "../profiles/benguigui";

const level1: Level = {
  number: 1,
  profiles: [
    benguigui,
    benguigui,
    benguigui,
    benguigui,
    benguigui,
    benguigui,
    benguigui,
    benguigui,
    benguigui,
    benguigui,
  ],
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
  canAddProperty: true,
};

export default level1;
