import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile: Profile = {
  name: "George",
  age: 58,
  profilePicture: "Profile_Benguigui",
  description: "",
  attributes: [
    attributes.various.socialClass.boss,
    attributes.activity.goout.culture,
    attributes.physical.hairColor.bald,
    attributes.various.spelling.bad,
    attributes.physical.size["1m60-1m80"],
  ],
  displayedAttributes: [
    attributes.various.socialClass.boss,
    attributes.activity.goout.culture,
    attributes.physical.size["1m60-1m80"],
  ],
};

export default profile;
