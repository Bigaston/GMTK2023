import { attributes } from "../Attributes";
import { Level } from "../Level";
import profile10 from "../profiles/10";
import profile11 from "../profiles/11";
import profile14 from "../profiles/14";
import profile16 from "../profiles/16";
import profile2 from "../profiles/2";
import profile3 from "../profiles/3";
import profile6 from "../profiles/6";

const level2: Level = {
  number: 1,
  profiles: [
    profile2,
    profile6,
    profile14,
    profile10,
    profile3,
    profile11,
    profile16,
  ],
  likes: [
    attributes.activity.sports.workout,
    attributes.activity.goout.travel,
    attributes.various.socialClass.boss,
  ],
  dislikes: [
    attributes.various.socialClass.student,
    attributes.various.age["18-21"],
  ],
  alreadyPresentProperty: [
    {
      path: attributes.activity.sports.workout,
      likeStatus: "none",
    },
    {
      path: attributes.various.socialClass.student,
      likeStatus: "none",
    },
  ],
  canAddProperty: true,
};

export default level2;
