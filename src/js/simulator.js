import TimeService from "./timeService.js";
import Score from "./score.js";
import Day from "./day.js";
import Event from "./event.js";


export default class Simulator {
  constructor() {
    this.score = new Score();
    this.event = new Event();
    this.eventLog = [];
  }

  simStart(){
    const eventList = Event.eventPackager(this.event);
    const day = new Day(1, eventList);
    this.startDay(day);
  }

  startDay(day) {
    const eventArray = day.eventsList;
    eventArray.forEach(item => {
      let time = item[0];
      const rTime = TimeService.randomizeTime(time, 0); //randomizes time. Will add "randomValue" to event object at some point
      
      function packager(){
        this.eventRun(item[1], this.score, this.eventLog);
      }
      
      TimeService.timer(rTime, packager.bind(this), day.dayNumber);
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
    await Simulator.clickListener(element,"click", stopWatch);

    document.getElementById("eventTitle").innerText = null;//display title

    document.getElementById("eventText").innerText = null;//display text

    score.calculateScore(stopWatch.duration);

    const timeStamp = new Date(); //could package date better. Little long right now
    let logArray = [`${timeStamp.toString()}, ${infoObject["eventTitle"]}, Score = ${score.score}`]; //find a way to package score
    eventLog.push(logArray);
    
  }

  static clickListener(element, listenerName, stopWatch) {
    return new Promise(function (resolve) {
      let listener = event => {
        stopWatch.stopWatch();
        element.removeEventListener(listenerName, listener); 
        resolve(event);
      };
      element.addEventListener(listenerName, listener);
    });
  }



}