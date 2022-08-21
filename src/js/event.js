
export default class Event {
  constructor() {
    this.mornWalk = this.morningWalk.bind(this);
  }

  static clickListener(element, listenerName, stopWatch) {
    return new Promise(function (resolve, reject) {
      let listener = event => {
        stopWatch.stopWatch();
        element.removeEventListener(listenerName, listener); 
        resolve(event);
      };
      element.addEventListener(listenerName, listener);
    });
  }

  static morningWalk() {
    const time = "7:00";
    const eventTitle = "Walk the Dog";
    const eventText = "Description of the event";
    const items = ["Leash","Collar"]; //items required for the event
    // if (searchItems(items) === false){buyItems(items)}; //search for items, if not found, promt user to buy items

    return {"time":time,"eventTitle":eventTitle, "eventText":eventText, "items":items};
  }

  static eveningWalk() {
    const time = "19:00";
    const eventTitle = "Walk the Dog";
    const eventText = "Description of the event";
    const items = ["Leash","Collar"]; //items required for the event
    // if (searchItems(items) === false){buyItems(items)}; //search for items, if not found, promt user to buy items

    return {"time":time,"eventTitle":eventTitle, "eventText":eventText, "items":items};
  }

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