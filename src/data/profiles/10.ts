import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile: Profile = {
  name: "April",
  age: 30,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.various.diet.vegan,
    attributes.various.socialClass.boss,
    attributes.various.relationType.oneNight,
    attributes.physical.hairColor.ginger,
    attributes.physical.particularity.tattoo,
  ],
  displayedAttributes: [
    attributes.various.diet.vegan,
    attributes.various.socialClass.boss,
    attributes.various.relationType.oneNight,
  ],
};

export default profile;
