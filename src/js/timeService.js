export default class TimeService {
  
  static timer(time, event) { 
    const hour = Number(time.split(':')[0]);
    const minute = Number(time.split(':')[1]);

    const eventTime = new Date(); 
    eventTime.setHours(hour, minute);
    let now = new Date();

    if (eventTime.getTime() < now.getTime()) {
      eventTime.setHours(eventTime.getHours() + 24);
    }

    //build multi-day accounting. 

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


}