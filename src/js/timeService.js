export default class TimeService {
  constructor() {
    this.startTime = 0;
    this.endTime = 0;
    this.isRunning = 0;
    this.duration = 0;
  }
  
  static timer(time, event, day) { 
    const hour = Number(time.split(':')[0]);
    const minute = Number(time.split(':')[1]);

    const eventTime = new Date(); 
    eventTime.setHours(hour, minute);
    let now = new Date();

    if (eventTime.getTime() < now.getTime()) {
      eventTime.setHours(eventTime.getHours() + (24*day));
    }

    const triggerTimeMs = eventTime.getTime() - now.getTime();
    setTimeout(event, triggerTimeMs);
  }
  
  //scale is either 0 no random, 1 for minutes random, or 2 for completely random
  static randomizeTime(time, scale) {
    let hour = Number(time.split(':')[0]);
    let minute = Number(time.split(':')[1]);
    const randomValue = Math.random();

    if (scale == 0) {
      return time;
    } else if (scale == 1) { 
      minute = parseInt(randomValue*30);
    } else {
      minute = parseInt(randomValue*60);
      hour = parseInt(randomValue*23);
    }

    if (minute < 10) {
      minute = ("0" + minute).slice(-2);
    }

    const randTime = [hour,minute].join(":");
    return randTime;
  }

  startWatch() {
    if (this.isRunning) throw new Error("StopWatch has already been started.");
    this.isRunning = true;
    this.startTime = new Date();
    console.log("start!");
  }

  stopWatch() {
    if (!this.isRunning) throw new Error("StopWatch has already been stopped.");
    this.isRunning = false;
    this.endTime = new Date();
    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    this.duration += seconds;
    console.log(this.duration);
    return this.duration;
  }

  resetWatch() {
    this.duration = 0;
    this.startTime = 0;
    this.endTime = 0;
    this.isRunning = false;
  }

}