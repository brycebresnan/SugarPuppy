import TimeService from "./timeService";
import Simulator from "./simulator";
import Score from "./score";

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

  async walk() {
    let stopWatch = new TimeService();
    stopWatch.startWatch(); //Starts the timer for the event

    const eventTitle = "Walk the Dog";
    const eventText = "Description of the event";
    const items = ["Leash","Collar"]; //items required for the event
    // if (searchItems(items) === false){buyItems(items)}; //search for items, if not found, promt user to buy items
    
    let element = document.querySelector("button"); //change button name. Might have to pass into function later.
    await Event.clickListener(element,"click", stopWatch);

    Score.calculateScore(stopWatch.duration);
    const timeStamp = new Date();
    let logArray = [timeStamp, eventTitle]; //find a way to package score
    this.eventLog.push(logArray); //find a way to push to eventLog in Simulator. Return?
    console.log(this.eventLog);

  }
}