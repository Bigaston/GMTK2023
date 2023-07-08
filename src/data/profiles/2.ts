import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile2: Profile = {
  name: "Emily",
  age: 20,
  profilePicture: "Profile_Benguigui",
  description: "",
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
  ],
};

export default profile2;
