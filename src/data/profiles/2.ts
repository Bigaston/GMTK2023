import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile2: Profile = {
  name: "Emily",
  age: 20,
  profilePicture: "Profile_2",
  description:
    "Student in art school, travel fan and dog lover. Will you be my next travel partner or my muse?",
  attributes: [
    attributes.various.pets.dog,
    attributes.activity.goout.travel,
    attributes.activity.art.music,
    attributes.physical.hairColor.ginger,
    attributes.physical.particularity.piercing,
    attributes.various.socialClass.student,
    attributes.various.age["18-21"],
  ],
  displayedAttributes: [
    attributes.various.pets.dog,
    attributes.activity.goout.travel,
    attributes.activity.art.music,
    attributes.various.socialClass.student,
    attributes.physical.particularity.piercing,
  ],
};

export default profile2;
