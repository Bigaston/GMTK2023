import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile16: Profile = {
  name: "Elijah",
  age: 20,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.activity.goout.culture,
    attributes.activity.art.painting,
    attributes.activity.art.music,
    attributes.physical.hairColor.dark,
    attributes.physical.particularity.beard,
    attributes.various.age["18-21"],
  ],
  displayedAttributes: [
    attributes.activity.goout.culture,
    attributes.activity.art.painting,
    attributes.activity.art.music,
  ],
};

export default profile16;
