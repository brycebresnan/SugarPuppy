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

  async eventRun(infoObject, score) {
    let stopWatch = new TimeService();
    stopWatch.startWatch(); //Starts the timer for the event

    //display title

    //display text

    //if contains items, display items

    //if contains text, display text

    let element = document.querySelector("button"); //change button name. Might have to pass into function later.
    await Event.clickListener(element,"click", stopWatch);

    score.calculateScore(stopWatch.duration);

    const timeStamp = new Date();
    let logArray = [timeStamp, eventTitle, score.score]; //find a way to package score
    this.eventLog.push(logArray); //find a way to push to eventLog in Simulator. Return?
    console.log(this.eventLog);
  }


}