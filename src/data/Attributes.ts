interface AttributeCategory {
  displayName: string;
  name: string;
  attributes: Attribute[];
}

interface Attribute {
  displayName: string;
  name: string;
  value: AttributeValue[];
}

interface AttributeValue {
  displayName: string;
  name: string;
}

const attributesCategory: AttributeCategory[] = [
  {
    displayName: "Physical",
    name: "physical",
    attributes: [
      {
        displayName: "Hair Color",
        name: "hairColor",
        value: [
          {
            displayName: "Brown",
            name: "brown",
          },
          {
            displayName: "Blonde",
            name: "blonde",
          },
          {
            displayName: "Ginger",
            name: "ginger",
          },
          {
            displayName: "Gray",
            name: "gray",
          },
          {
            displayName: "Colored",
            name: "colored",
          },
          {
            displayName: "Bald",
            name: "bald",
          },
        ],
      },
      {
        displayName: "Size",
        name: "size",
        value: [
          {
            displayName: "-1m60",
            name: "-1m60",
          },
          {
            displayName: "1m60 - 1m80",
            name: "1m60-1m80",
          },
          {
            displayName: "+1m80",
            name: "+1m80",
          },
        ],
      },
      {
        displayName: "Morphology",
        name: "morphology",
        value: [],
      },
      {
        displayName: "Particularity",
        name: "particularity",
        value: [
          {
            displayName: "Tattoo",
            name: "tattoo",
          },
          {
            displayName: "Piercing",
            name: "piercing",
          },
          {
            displayName: "Beard",
            name: "beard",
          },
        ],
      },
    ],
  },
  {
    displayName: "Activity",
    name: "activity",
    attributes: [
      {
        displayName: "Go Out",
        name: "goout",
        value: [
          {
            displayName: "Netflix'n'chill",
            name: "netflix",
          },
          {
            displayName: "Culture (museum, theater, ...)",
            name: "culture",
          },
          {
            displayName: "Party",
            name: "party",
          },
          {
            displayName: "Trip",
            name: "trip",
          },
        ],
      },
      {
        displayName: "Sports",
        name: "sports",
        value: [
          {
            displayName: "Football",
            name: "football",
          },
          {
            displayName: "Workout",
            name: "workout",
          },
          {
            displayName: "Running",
            name: "running",
          },
          {
            displayName: "Swimming",
            name: "swimming",
          },
        ],
      },
      {
        displayName: "Art",
        name: "art",
        value: [
          {
            displayName: "Music",
            name: "music",
          },
          {
            displayName: "Painting",
            name: "painting",
          },
          {
            displayName: "Writing",
            name: "writing",
          },
        ],
      },
    ],
  },
  {
    displayName: "Various",
    name: "various",
    attributes: [
      {
        displayName: "Age",
        name: "age",
        value: [
          {
            displayName: "18 - 21",
            name: "18-21",
          },
          {
            displayName: "22 - 30",
            name: "22-30",
          },
          {
            displayName: "31 - 45",
            name: "31-45",
          },
          {
            displayName: "46 - 60",
            name: "46-60",
          },
          {
            displayName: "60 +",
            name: "60+",
          },
        ],
      },
      {
        displayName: "Diet",
        name: "diet",
        value: [
          {
            displayName: "Omnivore",
            name: "omnivore",
          },
          {
            displayName: "Vegan",
            name: "vegan",
          },
        ],
      },
      {
        displayName: "Social Class",
        name: "socialClass",
        value: [
          {
            displayName: "Student",
            name: "student",
          },
          {
            displayName: "Unemployed",
            name: "unemployed",
          },
          {
            displayName: "Employee",
            name: "employee",
          },
          {
            displayName: "Manager",
            name: "manager",
          },
          {
            displayName: "Entrepreneur",
            name: "entrepreneur",
          },
        ],
      },
      {
        displayName: "Relation Type",
        name: "relationType",
        value: [
          {
            displayName: "One Night",
            name: "oneNight",
          },
          {
            displayName: "Long Term",
            name: "longTerm",
          },
          {
            displayName: "Open",
            name: "open",
          },
          {
            displayName: "Threesome",
            name: "threesome",
          },
        ],
      },
      {
        displayName: "Has Children",
        name: "hasChildren",
        value: [
          {
            displayName: "Yes",
            name: "yes",
          },
          {
            displayName: "No",
            name: "no",
          },
        ],
      },
      {
        displayName: "Spelling",
        name: "spelling",
        value: [
          {
            displayName: "Very Good",
            name: "veryGood",
          },
          {
            displayName: "Good",
            name: "good",
          },
          {
            displayName: "Bad",
            name: "bad",
          },
        ],
      },
      {
        displayName: "Pets",
        name: "pets",
        value: [
          {
            displayName: "Dog",
            name: "dog",
          },
          {
            displayName: "Cat",
            name: "cat",
          },
          {
            displayName: "Allergy",
            name: "allergy",
          },
        ],
      },
    ],
  },
];

export let attributes = {
  physical: {
    hairColor: {
      brown: "physical.hairColor.brown",
      blonde: "physical.hairColor.blonde",
      ginger: "physical.hairColor.ginger",
      gray: "physical.hairColor.gray",
      colored: "physical.hairColor.colored",
      bald: "physical.hairColor.bald",
    },
    size: {
      "-1m60": "physical.size.-1m60",
      "1m60-1m80": "physical.size.1m60-1m80",
      "+1m80": "physical.size.+1m80",
    },
    morphology: {
      // thin: "physical.morphology.thin",
      // normal: "physical.morphology.normal",
      // round: "physical.morphology.round",
      // athletic: "physical.morphology.athletic",
    },
    particularity: {
      tattoo: "physical.particularity.tattoo",
      piercing: "physical.particularity.piercing",
      beard: "physical.particularity.beard",
    },
  },
  activity: {
    goout: {
      netflix: "activity.goout.netflix",
      culture: "activity.goout.culture",
      party: "activity.goout.party",
      trip: "activity.goout.trip",
    },
    sports: {
      football: "activity.sports.football",
      workout: "activity.sports.workout",
      running: "activity.sports.running",
      swimming: "activity.sports.swimming",
    },
    art: {
      music: "activity.art.music",
      painting: "activity.art.painting",
      writing: "activity.art.writing",
    },
  },
  various: {
    age: {
      "18-21": "various.age.18-21",
      "22-30": "various.age.22-30",
      "31-45": "various.age.31-45",
      "46-60": "various.age.46-60",
      "60+": "various.age.60+",
    },
    diet: {
      omnivore: "various.diet.omnivore",
      vegan: "various.diet.vegan",
    },
    socialClass: {
      student: "various.socialClass.student",
      unemployed: "various.socialClass.unemployed",
      employee: "various.socialClass.employee",
      manager: "various.socialClass.manager",
      entrepreneur: "various.socialClass.entrepreneur",
    },
    relationType: {
      oneNight: "various.relationType.oneNight",
      longTerm: "various.relationType.longTerm",
      open: "various.relationType.open",
      threesome: "various.relationType.threesome",
    },
    hasChildren: {
      yes: "various.hasChildren.yes",
      no: "various.hasChildren.no",
    },
    spelling: {
      veryGood: "various.spelling.veryGood",
      good: "various.spelling.good",
      bad: "various.spelling.bad",
    },
    pets: {
      dog: "various.pets.dog",
      cat: "various.pets.cat",
      allergy: "various.pets.allergy",
    },
  },
};
