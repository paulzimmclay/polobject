const elizabethSangerProfile = Object.create({
  name: {
    value: "Elizabeth Sanger",
    writable: true,
    enumerable: true
  },
  district: {
    value: "District 5",
    writable: true,
    enumerable: true
  },
  biography: {
    value: "Bio goes here",
    writable: true,
    enumerable: true
  },
  image_gallery: {
    headshot: { 
      value: "http://www.elizabethsanger.com/headshot.jpg",
      writable: true,
      enumerable: true 
    },
    familyPicture: { 
      value: "http://www.elizabethsanger.com/familypicture.jpg",
      writable: true,
      enumerable: true
    },
    consituentPicture: {
      value: "http://www.elizabethsanger.com/headshot.jpg",
      writable: true,
      enumerable: true
    }
  }
})

const elizabethSangerPlatform = Object.create({
  missionStatement: {
    value: "Mission statement goes here.",
    writable: true,
    enumerable: true
  },
  platformStatements: {
    taxes: {
      value: "no taxes at all, plus refunds for taxes already paid",
      writable: true,
      enumerable: true
    },
    jobs: {
      value: "no jobs at all, plus free money",
      writable: true,
      enumerable: true
    },
    infrastructure: {
      value: "for the elimination of all infrastructure",
      writable: true,
      enumerable: true
    },
    healthCare: {
      value: "insurance will be abolished",
      writable: true,
      enumerable: true
    },
    crime: {
      value: "elizabeth is pro-crime",
      writable: true,
      enumerable: true
    }
  }
})

const elizabethSangerVolunteers = Object.create({
  profiles: [
    {
      name: {
        value: "Paul Zimmerman-Clayton",
        writable: true,
        enumerable: true
      },
      age: {
        value: "67",
        writable: true,
        enumerable: true
      },
      opinions: {
        value: "all of them",
        writable: true,
        enumerable: true
      }
    },
    {
      name: {
        value: "Katie Zimmerman-Clayton",
        writable: true,
        enumerable: true
      },
      age: {
        value: "68",
        writable: true,
        enumerable: true
      },
      opinions: {
      value: "most of them",
      writable: true,
      enumerable: true
      }
    },
    {
      name: {
        value: "Penny Zimmerman-Clayton",
        writable: true,
        enumerable: true
      },
      age: {
        value: "0",
        writable: true,
        enumerable: true
      },
      opinions: {
        value: "yes to cheerios",
        writable: true,
        enumerable: true
      }
    },
    {
      name: {
        value: "James Zimmerman-Clayton",
        writable: true,
        enumerable: true
      },
      age: { 
        value: "3 going on 16",
        writable: true,
        enumerable: true
      },
      opinions: {
        value: "strong regarding trucks, food, naps",
        writable: true,
        enumerable: true
      }
    }
  ]
})

const elizabethSangerInfo = Object.create({
  calendar: {
    value: "URL to calendar",
    writable: true,
    enumerable: true
  },
  voterRegistration: {
    value: "http://www.elizabethsanders.com/vote-here",
    writable: true,
    enumerable: true
  },
  donationForm: {
    value: "http://www.elizabethsanders.com/gimme-money",
    writable: true,
    enumerable: true
  }
})

// Challenge

const changeInfo = (objectPart, newThing) => {
  elizabethSangerInfo[objectPart] = newThing;
}

changeInfo("voterRegistration", "no dates for you");
console.log(elizabethSangerInfo.voterRegistration)

const changeDonation = (a, b) => {
  elizabethSangerInfo[a] = b
}

changeDonation("calendar", "dates for days");
console.log(elizabethSangerInfo.calendar)

// Use document.createElement() to build an 
// <article> element representing Elizabeth. The 
// id property of the element should be her congressional 
// district, and its content should be her platform data. 
// Once the element has been created, insert it into the DOM.

// Assign new article element to variable, newEl
let newEl = document.createElement("article");
// Assign ID of TN-5 to newEl
newEl.setAttribute("id", "TN-5");
// Get element ID of target element
const platform = document.getElementById("platform");
// Loop to get contents of platform object
for (property in elizabethSangerPlatform.platformStatements.value) {
  // Get text of properties
  let objectValue = () => {
    return elizabethSangerPlatform.platformStatements.property
  }
  let returnValue = objectValue()
  let newText = document.createTextNode(returnValue)
  newEl.appendChild(newText)
  platform.appendChild(newEl)
}

