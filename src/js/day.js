import TimeService from "./timeService.js";

export default class Day {
  constructor(dayNumber, eventsList) {
    this.dayNumber = dayNumber;
    this.eventsList = eventsList;
    this.eventLog = [];
  }

  startDay(){
    const eventArray = this.eventsList;
    eventArray.forEach(item => {
      let time = item[0];
      const rTime = TimeService.randomizeTime(time, 0);
      TimeService.timer(rTime, item[1], this.dayNumber);
    });
  }
}