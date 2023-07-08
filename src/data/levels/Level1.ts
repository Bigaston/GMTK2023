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
};

export default level1;
