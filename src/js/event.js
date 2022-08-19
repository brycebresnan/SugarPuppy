
export default class Event {

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

}