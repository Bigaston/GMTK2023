import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile18: Profile = {
  name: "Susan",
  age: 65,
  profilePicture: "Profile_Benguigui",
  description:
    "Still young in my head, still young in the bed! I'm not older, I earn XP!",
  attributes: [
    attributes.activity.goout.party,
    attributes.activity.sports.running,
    attributes.physical.hairColor.gray,
    attributes.various.age["60+"],
  ],
  displayedAttributes: [
    attributes.activity.goout.party,
    attributes.activity.sports.running,
  ],
};

export default profile18;
