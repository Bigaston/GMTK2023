import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile11: Profile = {
  name: "George",
  age: 58,
  profilePicture: "Profile_Benguigui",
  description:
    "You will has to share the space of my hearth with my 3 cars! #Lamborgini #Ferarri #Buggaty",
  attributes: [
    attributes.various.socialClass.boss,
    attributes.activity.goout.culture,
    attributes.physical.hairColor.bald,
    attributes.various.spelling.bad,
    attributes.physical.size["1m60-1m80"],
    attributes.various.age["46-60"],
  ],
  displayedAttributes: [
    attributes.various.socialClass.boss,
    attributes.activity.goout.culture,
    attributes.physical.size["1m60-1m80"],
  ],
};

export default profile11;
