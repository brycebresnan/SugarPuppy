import TimeService from "./timeService.js";
import Score from "./score.js";
import Day from "./day.js";
import Event from "./event.js";

export default class Simulator {
  constructor() {
    this.score = new Score();
    this.eventLog = [];
  }

  // packager() {
  //   const day = new Day();
  //   const events = new Event();
  //   const eventList = [["7:00",events.walk]];
  //   day.eventsList = eventList;
  //   day.startDay();
  // }

  start(){
    const events = new Event();
    const eventList = [["12:01",events.walk]];
    const day = new Day(1,eventList);
    const score = new Score();
    day.startDay();
    console.log(this.eventLog())
    
  }


}