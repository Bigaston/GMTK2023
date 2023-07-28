import { attributes } from "../Attributes";
import { Level } from "../Level";
import profile1 from "../profiles/1";
import profile10 from "../profiles/10";
import profile11 from "../profiles/11";
import profile12 from "../profiles/12";
import profile13 from "../profiles/13";
import profile14 from "../profiles/14";
import profile15 from "../profiles/15";
import profile16 from "../profiles/16";
import profile17 from "../profiles/17";
import profile18 from "../profiles/18";
import profile19 from "../profiles/19";
import profile2 from "../profiles/2";
import profile20 from "../profiles/20";
import profile3 from "../profiles/3";
import profile4 from "../profiles/4";
import profile5 from "../profiles/5";
import profile6 from "../profiles/6";
import profile7 from "../profiles/7";
import profile8 from "../profiles/8";
import profile9_2 from "../profiles/9_2";

const level5: Level = {
  number: 4,
  profiles: [
    profile1,
    profile2,
    profile3,
    profile4,
    profile5,
    profile6,
    profile7,
    profile8,
    profile9_2,
    profile10,
    profile11,
    profile12,
    profile13,
    profile14,
    profile15,
    profile16,
    profile17,
    profile18,
    profile19,
    profile20,
  ],
  likes: [
    attributes.physical.particularity.piercing,
    attributes.various.age["31-45"],
    attributes.activity.sports.running,
    attributes.physical.size["+1m80"],
    attributes.activity.goout.party,
    attributes.various.hasChildren.yes,
    attributes.activity.art.painting,
  ],
  dislikes: [
    attributes.various.relationType.open,
    attributes.physical.hairColor.bald,
    attributes.various.diet.vegan,
    attributes.various.socialClass.boss,
    attributes.various.spelling.bad,
    attributes.various.pets.cat,
  ],
  alreadyPresentProperty: [
    {
      path: attributes.physical.particularity.piercing,
      likeStatus: "none",
    },
    {
      path: attributes.various.age["31-45"],
      likeStatus: "none",
    },
    {
      path: attributes.activity.sports.running,
      likeStatus: "none",
    },
    {
      path: attributes.physical.size["+1m80"],
      likeStatus: "none",
    },
    {
      path: attributes.activity.goout.party,
      likeStatus: "none",
    },
    {
      path: attributes.various.hasChildren.yes,
      likeStatus: "none",
    },
    {
      path: attributes.activity.art.painting,
      likeStatus: "none",
    },
    {
      path: attributes.various.relationType.open,
      likeStatus: "none",
    },
    {
      path: attributes.physical.hairColor.bald,
      likeStatus: "none",
    },
    {
      path: attributes.various.diet.vegan,
      likeStatus: "none",
    },
    {
      path: attributes.various.socialClass.boss,
      likeStatus: "none",
    },
    {
      path: attributes.various.spelling.bad,
      likeStatus: "none",
    },
    {
      path: attributes.various.pets.cat,
      likeStatus: "none",
    },
  ],
  canAddProperty: false,
  picture: "Profile_5",
  name: "Kate",
  age: 29,
};

export default level5;
