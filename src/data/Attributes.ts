export interface AttributeCategory {
  displayName: string;
  name: string;
  attributes: Attribute[];
}

export interface Attribute {
  displayName: string;
  name: string;
  value: AttributeValue[];
}

export interface AttributeValue {
  displayName: string;
  name: string;
}

export let attributesCategory: AttributeCategory[] = [
  {
    displayName: "Physical",
    name: "physical",
    attributes: [
      {
        displayName: "Hair Color",
        name: "hairColor",
        value: [
          {
            displayName: "Dark hair",
            name: "dark",
          },
          {
            displayName: "Blonde hair",
            name: "blonde",
          },
          {
            displayName: "Ginger hair",
            name: "ginger",
          },
          {
            displayName: "Gray hair",
            name: "gray",
          },
          {
            displayName: "Colored hair",
            name: "colored",
          },
          {
            displayName: "Bald hair",
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
            displayName: "Workout",
            name: "workout",
          },
          {
            displayName: "Running",
            name: "running",
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
            displayName: "18 - 21 y.o.",
            name: "18-21",
          },
          {
            displayName: "22 - 30 y.o.",
            name: "22-30",
          },
          {
            displayName: "31 - 45 y.o.",
            name: "31-45",
          },
          {
            displayName: "46 - 60 y.o.",
            name: "46-60",
          },
          {
            displayName: "60 + y.o.",
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
            displayName: "Boss",
            name: "boss",
          },
        ],
      },
      {
        displayName: "Relation Type",
        name: "relationType",
        value: [
          {
            displayName: "One Night Stand",
            name: "oneNight",
          },
          {
            displayName: "Long Term Relationship",
            name: "longTerm",
          },
          {
            displayName: "Open Relationship",
            name: "open",
          },
        ],
      },
      {
        displayName: "Has Children",
        name: "hasChildren",
        value: [
          {
            displayName: "Has Children",
            name: "yes",
          },
          {
            displayName: "No Children",
            name: "no",
          },
        ],
      },
      {
        displayName: "Spelling",
        name: "spelling",
        value: [
          {
            displayName: "Bad Spelling",
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
            displayName: "Pet Allergy",
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
      dark: "physical.hairColor.dark",
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
      workout: "activity.sports.workout",
      running: "activity.sports.running",
    },
    art: {
      music: "activity.art.music",
      painting: "activity.art.painting",
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
      boss: "various.socialClass.boss",
    },
    relationType: {
      oneNight: "various.relationType.oneNight",
      longTerm: "various.relationType.longTerm",
      open: "various.relationType.open",
    },
    hasChildren: {
      yes: "various.hasChildren.yes",
      no: "various.hasChildren.no",
    },
    spelling: {
      bad: "various.spelling.bad",
    },
    pets: {
      dog: "various.pets.dog",
      cat: "various.pets.cat",
      allergy: "various.pets.allergy",
    },
  },
};

export function stringToCategory(string: string[]) {
  let neededSubCategory = string.map(
    (attribute) => attribute.split(".")[0] + "." + attribute.split(".")[1]
  );

  return string
    .map((attribute) => attribute.split(".")[0])
    .map(
      (attributeCate) =>
        attributesCategory.find((cate) => cate.name === attributeCate)!
    )
    .filter((cate, index, array) => array.indexOf(cate) === index)
    .map((cate) => {
      return {
        ...cate,
        attributes: cate.attributes
          .filter((attribute) =>
            neededSubCategory.includes(cate.name + "." + attribute.name)
          )
          .map((attribute) => {
            return {
              ...attribute,
              value: attribute.value.filter((value) =>
                string.includes(
                  cate.name + "." + attribute.name + "." + value.name
                )
              ),
            };
          }),
      };
    });
}
