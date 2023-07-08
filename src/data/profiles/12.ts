import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile: Profile = {
  name: "Ryan",
  age: 24,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.various.relationType.oneNight,
    attributes.various.spelling.bad,
    attributes.physical.particularity.piercing,
    attributes.physical.hairColor.colored,
  ],
  displayedAttributes: [attributes.various.relationType.oneNight],
};

export default profile;
