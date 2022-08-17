export default class Day {
  constructor(dayNumber, eventsList) {
    this.dayNumber = dayNumber;
    this.eventsList = eventsList;
    this.currentTime = new Date();
    this.eventLog = []
  }
}