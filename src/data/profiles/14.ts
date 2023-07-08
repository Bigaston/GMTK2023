import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile: Profile = {
  name: "Jason",
  age: 27,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.various.relationType.longTerm,
    attributes.physical.particularity.piercing,
    attributes.activity.sports.workout,
    attributes.various.diet.vegan,
    attributes.activity.art.music,
    attributes.physical.hairColor.blonde,
  ],
  displayedAttributes: [
    attributes.various.hasChildren.yes,
    attributes.activity.goout.party,
    attributes.various.relationType.oneNight,
  ],
};

export default profile;
