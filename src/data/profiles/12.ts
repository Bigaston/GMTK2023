import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile12: Profile = {
  name: "Ryan",
  age: 24,
  profilePicture: "Profile_12",
  description:
    "Futur Mark Zukerberg, looking for someone with appartment for a crasy night...",
  attributes: [
    attributes.various.relationType.oneNight,
    attributes.various.spelling.bad,
    attributes.physical.particularity.piercing,
    attributes.physical.hairColor.colored,
    attributes.various.age["22-30"],
  ],
  displayedAttributes: [
    attributes.various.relationType.oneNight,
    attributes.physical.particularity.piercing,
  ],
};

export default profile12;
