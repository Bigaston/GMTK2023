import { attributes } from "../Attributes";
import { Profile } from "../Profile";

const profile19: Profile = {
  name: "Austin",
  age: 25,
  profilePicture: "Profile_19",
  description: "I can enter in any club, they think I'm the bouncer",
  attributes: [
    attributes.physical.size["+1m80"],
    attributes.activity.goout.party,
    attributes.physical.particularity.beard,
    attributes.physical.particularity.tattoo,
    attributes.various.age["22-30"],
  ],
  displayedAttributes: [
    attributes.physical.size["+1m80"],
    attributes.activity.goout.party,
  ],
};

export default profile19;
