import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile4: Profile = {
  name: "Albert",
  age: 62,
  profilePicture: "Profile_Benguigui",
  description:
    "Hello baby, do you want love? Me neither! Let's go to the hotel! Pass by if you are a fake!",
  attributes: [
    attributes.physical.hairColor.gray,
    attributes.various.relationType.open,
    attributes.various.pets.cat,
    attributes.activity.goout.travel,
    attributes.various.age["60+"],
  ],
  displayedAttributes: [
    attributes.various.relationType.open,
    attributes.various.pets.cat,
    attributes.activity.goout.travel,
  ],
};

export default profile4;
