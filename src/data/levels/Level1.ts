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
    attributes.physical.hairColor.bald,
    attributes.physical.size["1m60-1m80"],
  ],
  dislikes: [
    attributes.physical.hairColor.blonde,
    attributes.various.diet.vegan,
  ],
  alreadyPresentProperty: [
    {
      path: attributes.physical.hairColor.dark,
      likeStatus: "like",
    },
    {
      path: attributes.activity.goout.netflix,
      likeStatus: "like",
    },
    {
      path: attributes.various.pets.dog,
      likeStatus: "dislike",
    },
  ],
};

export default level1;
