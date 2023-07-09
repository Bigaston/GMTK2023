import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile9_1: Profile = {
  name: "Allison",
  age: 32,
  profilePicture: "Profile_9",
  description:
    "Here to find someone to watch Netflix with! Currently unemployed but I can be here for you anytime!",
  attributes: [
    attributes.various.pets.allergy,
    attributes.activity.goout.netflix,
    attributes.physical.particularity.piercing,
    attributes.physical.hairColor.colored,
    attributes.various.age["31-45"],
  ],
  displayedAttributes: [
    attributes.various.pets.allergy,
    attributes.activity.goout.netflix,
    attributes.physical.particularity.piercing,
  ],
};

export default profile9_1;
