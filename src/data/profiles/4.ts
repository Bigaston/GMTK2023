import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile4: Profile = {
  name: "Albert",
  age: 62,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.physical.hairColor.gray,
    attributes.various.relationType.open,
    attributes.various.pets.cat,
    attributes.activity.goout.travel,
    attributes.various.age["60+"],
  ],
  displayedAttributes: [
    attributes.various.relationType.open,
    attributes.various.pets.cat,
    attributes.activity.goout.travel,
  ],
};

export default profile4;
