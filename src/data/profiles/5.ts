import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile5: Profile = {
  name: "Kate",
  age: 29,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.various.diet.vegan,
    attributes.various.pets.cat,
    attributes.various.relationType.longTerm,
    attributes.activity.goout.travel,
    attributes.physical.hairColor.dark,
    attributes.various.age["22-30"],
  ],
  displayedAttributes: [
    attributes.various.diet.vegan,
    attributes.various.pets.cat,
    attributes.various.relationType.longTerm,
    attributes.activity.goout.travel,
  ],
};

export default profile5;
