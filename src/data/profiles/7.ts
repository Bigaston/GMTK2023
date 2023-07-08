import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile: Profile = {
  name: "Grace",
  age: 19,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.various.relationType.open,
    attributes.physical.size["-1m60"],
    attributes.physical.hairColor.blonde,
  ],
  displayedAttributes: [
    attributes.various.relationType.open,
    attributes.physical.size["-1m60"],
  ],
};

export default profile;
