import TimeService from "./timeService.js";
import Score from "./score.js";
import Day from "./day.js";
import Event from "./event.js";


export default class Simulator {
  constructor() {
    this.score = new Score();
    this.eventLog = [];
  }

  simStart(){
    const eventList = [["20:13", this.packager.bind(this)]];
    const day = new Day(1, eventList);
    this.startDay(day);
  }

  packager(){
    this.eventRun(Event.morningWalk(), this.score, this.eventLog);
  }

  startDay(day) {
    const eventArray = day.eventsList;
    eventArray.forEach(item => {
      let time = item[0];
      const rTime = TimeService.randomizeTime(time, 0);
      TimeService.timer(rTime, item[1], day.dayNumber);
    });
  }

  async eventRun(infoObject, score, eventLog) {
    let stopWatch = new TimeService();
    stopWatch.startWatch(); //Starts the timer for the event

    document.getElementById("eventTitle").innerText = infoObject.eventTitle;//display title

    document.getElementById("eventText").innerText = infoObject.eventText;//display text

    //if contains items, display items

    //search for items, if not found, promt user to buy items
    // if (searchItems(items) === false){buyItems(items)}; 

    //if contains cost, display cost

    let element = document.getElementById("acceptButton"); //change button name. Might have to pass into function later.
    await Event.clickListener(element,"click", stopWatch);

    document.getElementById("eventTitle").innerText = null;//display title

    document.getElementById("eventText").innerText = null;//display text

    score.calculateScore(stopWatch.duration);

    const timeStamp = new Date();
    let logArray = [`${timeStamp.toString()}, ${infoObject["eventTitle"]}, Score = ${score.score}`]; //find a way to package score
    // this.eventLog.push(logArray); //find a way to push to eventLog in Simulator. Return?
    eventLog.push(logArray);
    
  }



}