import { attributes } from "../Attributes";
import { Level } from "../Level";
import profile1 from "../profiles/1";
import profile10 from "../profiles/10";
import profile11 from "../profiles/11";
import profile14 from "../profiles/14";
import profile15 from "../profiles/15";
import profile17 from "../profiles/17";
import profile18 from "../profiles/18";
import profile19 from "../profiles/19";
import profile2 from "../profiles/2";
import profile3 from "../profiles/3";
import profile5 from "../profiles/5";
import profile7 from "../profiles/7";

const level4: Level = {
  number: 3,
  profiles: [
    profile7,
    profile17,
    profile3,
    profile5,
    profile2,
    profile10,
    profile18,
    profile14,
    profile15,
    profile11,
    profile1,
    profile19,
  ],
  likes: [
    attributes.various.age["18-21"],
    attributes.various.relationType.open,
    attributes.physical.size["-1m60"],
    attributes.physical.hairColor.blonde,
  ],
  dislikes: [
    attributes.various.hasChildren.yes,
    attributes.various.age["22-30"],
    attributes.various.age["31-45"],
    attributes.various.age["46-60"],
    attributes.various.age["60+"],
    attributes.physical.particularity.piercing,
  ],
  alreadyPresentProperty: [],
  canAddProperty: true,
  picture: "Profile_4",
};

export default level4;
