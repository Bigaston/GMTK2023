import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const benguigui: Profile = {
  name: "Jean Benguigui",
  age: 69,
  profilePicture: "Profile_Benguigui",
  attributes: [
    attributes.physical.hairColor.bald,
    attributes.physical.size["1m60-1m80"],
    attributes.activity.art.music,
    attributes.activity.goout.culture,
  ],
  // displayedAttributes: [],
};

export default benguigui;
