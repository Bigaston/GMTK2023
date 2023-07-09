import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile5: Profile = {
  name: "Kate",
  age: 29,
  profilePicture: "Profile_5",
  description:
    "Looking for funs and cudle buddy. I'm not here for some long time, I'm here for some good time!",
  attributes: [
    attributes.various.pets.allergy,
    attributes.various.relationType.oneNight,
    attributes.activity.goout.travel,
    attributes.physical.hairColor.colored,
    attributes.various.spelling.bad,
    attributes.various.age["22-30"],
  ],
  displayedAttributes: [
    attributes.various.pets.allergy,
    attributes.various.relationType.oneNight,
    attributes.activity.goout.travel,
  ],
};

export default profile5;
