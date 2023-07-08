import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile20: Profile = {
  name: "Karen",
  age: 37,
  profilePicture: "Profile_20",
  description: "",
  attributes: [
    attributes.activity.sports.running,
    attributes.activity.art.painting,
    attributes.physical.hairColor.blonde,
    attributes.various.hasChildren.yes,
    attributes.various.age["31-45"],
  ],
  displayedAttributes: [
    attributes.activity.sports.running,
    attributes.activity.art.painting,
    attributes.various.hasChildren.yes,
  ],
};

export default profile20;
