import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile13: Profile = {
  name: "David",
  age: 33,
  profilePicture: "Profile_13",
  description: "Looking either for a baby sitter or a fun person to party with",
  attributes: [
    attributes.various.hasChildren.yes,
    attributes.activity.goout.party,
    attributes.various.relationType.oneNight,
    attributes.physical.hairColor.colored,
    attributes.various.spelling.bad,
    attributes.various.age["31-45"],
  ],
  displayedAttributes: [
    attributes.various.hasChildren.yes,
    attributes.activity.goout.party,
    attributes.various.relationType.oneNight,
  ],
};

export default profile13;
