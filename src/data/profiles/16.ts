import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile16: Profile = {
  name: "Elijah",
  age: 20,
  profilePicture: "Profile_16",
  description:
    "Multi-instrumentalist, here for a jam buddy and maybe a museum partner?",
  attributes: [
    attributes.activity.goout.culture,
    attributes.activity.art.music,
    attributes.activity.art.painting,
    attributes.physical.hairColor.dark,
    attributes.physical.particularity.beard,
    attributes.various.age["18-21"],
  ],
  displayedAttributes: [
    attributes.activity.goout.culture,
    attributes.activity.art.music,
    attributes.activity.art.painting,
  ],
};

export default profile16;
