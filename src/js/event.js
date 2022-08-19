import TimeService from "./timeService";
import Simulator from "./simulator";

export default class Event extends Simulator {

  clickListener(element, listenerName, stopWatch) {
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

    const title = "Walk the Dog";
    const items = ["Leash","Collar"]; //items required for the event
    // if (searchItems(items) === false){buyItems(items)}; //search for items, if not found, promt user to buy items
    
    let element = document.querySelector("button"); //change button name. Might have to pass into function later.
    await this.clickListener(element,"click", stopWatch);

    this.score.calculateScore(stopWatch.duration);
    const timeStamp = new Date();
    let logArray = [timeStamp, title, this.score.score];
    this.eventLog.push(logArray);

  }

}