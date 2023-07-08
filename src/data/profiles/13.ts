import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile: Profile = {
  name: "David",
  age: 33,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.various.hasChildren.yes,
    attributes.activity.goout.party,
    attributes.various.relationType.oneNight,
    attributes.physical.hairColor.colored,
    attributes.various.spelling.bad,
  ],
  displayedAttributes: [
    attributes.various.hasChildren.yes,
    attributes.activity.goout.party,
    attributes.various.relationType.oneNight,
  ],
};

export default profile;
