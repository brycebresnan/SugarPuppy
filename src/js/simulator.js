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
    this.score = new Score();
    this.event = new Event();
    this.cost = new Cost();
    this.dog = new Dog();
    this.eventLog = [];
    this.stopWatch = new TimeService();
    this.inventory = []; //storing strings which represent items 
  }

  simStart(){
    const eventList = Event.eventPackager(this.event);
    const day = new Day(1, eventList);
    this.startDay(day);
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
    const modal = document.getElementById("myModal");
    modal.style.display = "block";

    this.stopWatch.startWatch(); //Starts the timer for the event

    document.getElementById("eventTitle").innerText = infoObject.eventTitle;//display title

    document.getElementById("eventText").innerText = infoObject.eventText;//display text

    if (infoObject.items !== 0) {
      let i=0;
      while ( i < infoObject.length) {
        if (this.searchInventory(infoObject.items[i])) {
          this.cost.buyItem(infoObject.items[i]);
        }
      }
    }


    // 3 - search item price, will only return price if item already exists

    // function searchItemPrice(searchItems){ 
        //let itemPriceToBeAdded; 
        //if true {
            //total += item
        //}
    //}
    

    //search for items, if not found, prompt user to buy items


    // if (searchItems(items) === false){buyItems(items)}; 
  }

  eventEnd() {
    if (!this.eventHold) {
      return;
    } else {
      this.stopWatch.stopWatch();

      const modal = document.getElementById("myModal");

      const infoObject = this.eventHold;

      modal.style.display = "none"; //close modal

      document.getElementById("eventTitle").innerText = null;//display title

      document.getElementById("eventText").innerText = null;//display text

      this.score.calculateScore(this.stopWatch.duration);
      this.stopWatch.resetWatch();

      const timeStamp = new Date(); //could package date better. Little long right now
      let logArray = [`${timeStamp.toString()}, ${infoObject["eventTitle"]}, Score = ${this.score.score}`]; //find a way to package score
      this.eventLog.push(logArray);
    }
  }

  eventBuy() {
    //gets items from infoObject
    //increments cost by item price
    //pushes items to inventory
  }

  searchInventory(itemToBeSearchedArray, inventoryArray) {

    if (itemToBeSearchedArray.length === 0){ 
      return false;
    }

    for (let i =  0; i < inventoryArray.length; i++){
      if (itemToBeSearchedArray === inventoryArray[i]){
        return true; 
      } else { 
        return false; 
      }
    }
  

  
}


//eventRun function will call a forEach loop on each item in the infoObject.items in order to retrieve price 

  // external - search inventory function will be used as a callback function first to check if item to be purchased already exists in the inventory 

  // external - if it does not exists, the buy function will be executed 

//else the eventRun function will be quit
}
