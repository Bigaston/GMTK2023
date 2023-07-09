import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile8: Profile = {
  name: "Matthew",
  age: 37,
  profilePicture: "Profile_Benguigui",
  description:
    "Hey you! I see you yesterday at the mall and I can't remember your number... Can you give it to me?",
  attributes: [
    attributes.various.socialClass.unemployed,
    attributes.various.pets.dog,
    attributes.various.relationType.longTerm,
    attributes.physical.size["+1m80"],
    attributes.various.age["31-45"],
  ],
  displayedAttributes: [
    attributes.various.socialClass.unemployed,
    attributes.various.pets.dog,
    attributes.various.relationType.longTerm,
    attributes.physical.size["+1m80"],
  ],
};

export default profile8;
