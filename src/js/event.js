

export default class Event {
  constructor() {
    this.morningWalk = {
      time:"7:00",
      eventTitle:"Walk the Dog",
      eventText:"Description of the event",
      items:["Leash","Collar"]
    };
    this.eveningWalk = {
      time:"10:00",
      eventTitle:"Walk the Dog",
      eventText:"Description of the event",
      items:["Leash","Collar"]
    };
  }

  static eventPackager(eventObj) {
    let keysArray = Object.keys(eventObj);
    let eventArray = []
    keysArray.forEach((item, index) => {
      eventArray.push([eventObj[item].time, eventObj[item]]);
  });

    console.log(eventArray);
  }




  // static morningWalk() {
  //   const time = "7:00";
  //   const eventTitle = "Walk the Dog";
  //   const eventText = "Description of the event";
  //   const items = ["Leash","Collar"]; //items required for the event
  //   // if (searchItems(items) === false){buyItems(items)}; //search for items, if not found, promt user to buy items

  //   return {"time":time,"eventTitle":eventTitle, "eventText":eventText, "items":items};
  // }

  // static eveningWalk() {
  //   const time = "19:00";
  //   const eventTitle = "Walk the Dog";
  //   const eventText = "Description of the event";
  //   const items = ["Leash","Collar"]; //items required for the event
  //   // if (searchItems(items) === false){buyItems(items)}; //search for items, if not found, promt user to buy items

  //   return {"time":time,"eventTitle":eventTitle, "eventText":eventText, "items":items};
  // }

  static morningFood() {
    const time = "8:00";
    const eventTitle = "Feed the Dog";
    const eventText = "Description of the event";
    const items = ["Bowl","DogFood"]; //items required for the event
    // if (searchItems(items) === false){buyItems(items)}; //search for items, if not found, promt user to buy items

    return {"time":time,"eventTitle":eventTitle, "eventText":eventText, "items":items};
  }

  static eveningFood() {
    const time = "17:00";
    const eventTitle = "Feed the Dog";
    const eventText = "Description of the event";
    const items = ["Bowl","DogFood"]; //items required for the event
    // if (searchItems(items) === false){buyItems(items)}; //search for items, if not found, promt user to buy items

    return {"time":time,"eventTitle":eventTitle, "eventText":eventText, "items":items};
  }

  static play() {
    const time = "10:00";
    const eventTitle = "Play with the Dog";
    const eventText = "Description of the event";
    const items = ["Chew Toy","Ball"]; //items required for the event
    // if (searchItems(items) === false){buyItems(items)}; //search for items, if not found, promt user to buy items

    return {"time":time,"eventTitle":eventTitle, "eventText":eventText, "items":items};
  }

  static vet() {
    const time = "13:00";
    const eventTitle = "Take the Dog to the Vet";
    const eventText = "Description of the event";
    const items = ["Vet Bill"]; //items required for the event
    // if (searchItems(items) === false){buyItems(items)}; //search for items, if not found, promt user to buy items

    return {"time":time,"eventTitle":eventTitle, "eventText":eventText, "items":items};
  }

}