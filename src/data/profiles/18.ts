import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile18: Profile = {
  name: "Susan",
  age: 65,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.activity.goout.party,
    attributes.activity.sports.running,
    attributes.physical.hairColor.gray,
  ],
  displayedAttributes: [
    attributes.activity.goout.party,
    attributes.activity.sports.running,
  ],
};

export default profile18;
