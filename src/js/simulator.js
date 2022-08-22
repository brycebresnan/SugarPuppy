import TimeService from "./timeService.js";
import Score from "./score.js";
import Day from "./day.js";
import Event from "./event.js";
import Cost from "./cost";
import Dog from "./dog.js";


export default class Simulator {
  constructor() {
    this.userName = "";
    this.difficuluty = 1; //will scale difficulty functionality aka increase chance of disasters. randomize time more? add *extra* events?
    this.duration = 1;
    this.score = new Score();
    this.event = new Event();
    this.cost = new Cost();
    this.dog = new Dog();
    this.daysList = this.createDays();
    this.eventLog = [];
    this.stopWatch = new TimeService();
  }

  simStart(){
    this.daysList.forEach((day) => {
      this.startDay(day);
    });
  }

  startDay(day) {
    const eventArray = day.eventsList;
    eventArray.forEach((item) => {
      let time = item[0];
      const rTime = TimeService.randomizeTime(time, 0); //randomizes time. Will add "randomValue" to event object at some point
      
      function packager(){
        this.eventRun(item[1]);
        this.eventHold = item[1];
      }
      TimeService.timer(rTime, packager.bind(this), day.dayNumber);
    });
  }

  eventRun(infoObject) {
    const alertModal = document.getElementById("alertModal");
    alertModal.style.display = "block";

    this.stopWatch.startWatch(); //Starts the timer for the event

    document.getElementById("eventTitle").innerText = infoObject.eventTitle;//display title

    document.getElementById("eventText").innerText = infoObject.eventText;//display text

    //if contains items, display items

    //search for items, if not found, promt user to buy items
    // if (searchItems(items) === false){buyItems(items)}; 

  //   if (infoObject.items !== 0) {
  //     let i=0;
  //     while ( i < infoObject.length) {
  //       if (this.searchInventory(infoObject.items[i],this.inventory)) {
  //         this.cost.buyItem(infoObject.items[i]);
  //         i++;
  //       }
  //     }
  //   }
  // }

  eventEnd() {
    if (!this.eventHold) {
      return;
    } else {
      this.stopWatch.stopWatch();

      const alertModal = document.getElementById("alertModal");

      const infoObject = this.eventHold;

      alertModal.style.display = "none"; //close modal

      document.getElementById("eventTitle").innerText = null;//display title

      document.getElementById("eventText").innerText = null;//display text

      this.score.calculateScore(this.stopWatch.duration);
      this.stopWatch.resetWatch();
      
      const timeStamp = new Date(); //could package date better. Little long right now
      let logArray = [`${timeStamp.toString()}, ${infoObject["eventTitle"]}, Score = ${this.score.score}`]; //find a way to package score
      this.eventLog.push(logArray);
      this.eventHold = null;
    }
  }

  eventSkip() {

  }

  // searchInventory(infoObjectItem,inventory){

  //   let i = 0; 
  //   while (i < inventory.lengh ){ 
  //     if (inventory[i] === infoObjectItem){
  //       return true 
  //       i++;
  //     }
  //   }return false
  //   //returns boolean

  // }

}
