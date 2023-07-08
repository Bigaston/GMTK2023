import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile6: Profile = {
  name: "Eric",
  age: 45,
  profilePicture: "Profile_6",
  description: "",
  attributes: [
    attributes.various.spelling.bad,
    attributes.physical.size["+1m80"],
    attributes.activity.sports.workout,
    attributes.activity.goout.travel,
    attributes.various.socialClass.boss,
    attributes.physical.hairColor.dark,
    attributes.various.age["31-45"],
  ],
  displayedAttributes: [
    attributes.physical.size["+1m80"],
    attributes.activity.sports.workout,
    attributes.activity.goout.travel,
    attributes.various.socialClass.boss,
  ],
};

export default profile6;
