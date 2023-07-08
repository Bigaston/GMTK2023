import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile: Profile = {
  name: "Matthew",
  age: 37,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.various.socialClass.unemployed,
    attributes.various.pets.dog,
    attributes.various.relationType.longTerm,
    attributes.physical.size["+1m80"],
  ],
  displayedAttributes: [
    attributes.various.socialClass.unemployed,
    attributes.various.pets.dog,
    attributes.various.relationType.longTerm,
    attributes.physical.size["+1m80"],
  ],
};

export default profile;
