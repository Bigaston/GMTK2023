import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile15: Profile = {
  name: "Hannah",
  age: 22,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.activity.goout.netflix,
    attributes.physical.hairColor.ginger,
    attributes.various.hasChildren.yes,
    attributes.various.relationType.open,
    attributes.various.age["22-30"],
  ],
  displayedAttributes: [
    attributes.activity.goout.netflix,
    attributes.various.hasChildren.yes,
    attributes.various.relationType.open,
  ],
};

export default profile15;
