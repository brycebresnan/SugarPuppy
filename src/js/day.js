export default class Day {
  constructor(dayNumber, eventsList) {
    this.dayNumber = dayNumber;
    this.eventsList = eventsList;
    this.currentTime = new Date();
    this.eventLog = []
  }

  startDay(){
    const eventArray = this.eventsList;
    eventArray.forEach(item, function(){
      let time = item[0];
      const rTime = TimeService.randomizeTime(time, 1);
      TimeService.timer(rTime, item[1]);
    });
  }
}