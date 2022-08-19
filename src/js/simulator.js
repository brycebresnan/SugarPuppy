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

  simStart(){
    const events = new Event();
    const eventList = [["12:01",events.walk]];
    const day = new Day(1,eventList);
    const score = new Score();
    this.startDay(day)
    console.log(this.eventLog())
    
  }

  startDay(day) {
    const eventArray = day.eventsList;
    eventArray.forEach(item => {
      let time = item[0];
      const rTime = TimeService.randomizeTime(time, 0);
      TimeService.timer(rTime, item[1], day.dayNumber);
    });
  }


}