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

    const triggerTimeMs = eventTime.getTime() - now.getTime();
    setTimeout(event, triggerTimeMs);
  }


}