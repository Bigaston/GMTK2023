import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile: Profile = {
  name: "Albert",
  age: 62,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.physical.hairColor.gray,
    attributes.various.relationType.open,
    attributes.various.pets.cat,
    attributes.activity.goout.travel,
  ],
  displayedAttributes: [
    attributes.various.relationType.open,
    attributes.various.pets.cat,
    attributes.activity.goout.travel,
  ],
};

export default profile;
