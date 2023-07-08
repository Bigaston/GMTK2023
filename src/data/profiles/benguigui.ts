import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const benguigui: Profile = {
  name: "Jean Benguigui",
  age: 69,
  profilePicture: "Profile_Benguigui",
  description:
    "Jean Benguigui est un acteur français né le 8 avril 1944 à Oran (Algérie).",
  attributes: [
    attributes.physical.hairColor.bald,
    attributes.physical.size["1m60-1m80"],
    attributes.activity.art.music,
    attributes.activity.goout.culture,
  ],
  displayedAttributes: [
    attributes.activity.art.music,
    attributes.activity.goout.culture,
  ],
};

export default benguigui;
