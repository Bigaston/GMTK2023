import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile3: Profile = {
  name: "Sara",
  age: 38,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.various.diet.vegan,
    attributes.various.pets.cat,
    attributes.various.relationType.longTerm,
    attributes.activity.goout.travel,
    attributes.physical.hairColor.dark,
  ],
  displayedAttributes: [
    attributes.various.diet.vegan,
    attributes.various.pets.cat,
    attributes.various.relationType.longTerm,
    attributes.activity.goout.travel,
  ],
};

export default profile3;
