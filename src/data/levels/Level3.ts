import { attributes } from "../Attributes";
import { Level } from "../Level";
import profile11 from "../profiles/11";
import profile12 from "../profiles/12";
import profile16 from "../profiles/16";
import profile19 from "../profiles/19";
import profile3 from "../profiles/3";
import profile5 from "../profiles/5";
import profile6 from "../profiles/6";
import profile8 from "../profiles/8";
import profile9_1 from "../profiles/9_1";

const level3: Level = {
  number: 2,
  profiles: [
    profile12,
    profile11,
    profile9_1,
    profile8,
    profile5,
    profile3,
    profile6,
    profile19,
    profile16,
  ],
  likes: [
    attributes.various.diet.vegan,
    attributes.physical.hairColor.colored,
    attributes.various.relationType.longTerm,
    attributes.various.age["31-45"],
  ],
  dislikes: [
    attributes.various.spelling.bad,
    attributes.physical.particularity.beard,
    attributes.activity.goout.culture,
  ],
  alreadyPresentProperty: [],
  canAddProperty: true,
  picture: "Profile_3",
};

export default level3;
