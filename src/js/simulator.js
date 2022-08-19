import TimeService from "./timeService.js";
import Score from "./score.js";
import Day from "./day.js";
import Event from './event';

export default class Simulator {
  constructor() {
    this.score = new Score();
    this.events = new Event();
    this.day = new Day();
    this.eventLog = [];
  }

}