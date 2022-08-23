export default class Event {
  constructor() {
    this.morningWalk = {
      time:"02:45",
      random:1,
      chance:100,
      eventTitle:"Morning Walk",
      eventText:"Description of the event",
      items:["Leash","Collar"]
    };
    this.eveningWalk = {
      time:"20:21",
      random:1,
      chance:100,
      eventTitle:"Evening Walk",
      eventText:"Description of the event",
      items:["Leash","Collar"]
    };
    this.foodMorning = {
      time:"02:36",
      random:0,
      chance:100,
      eventTitle:"Time to Eat",
      eventText:"Description of the event",
      items:["Bowl","Food"]
    };
    this.foodEvening = {
      time:"21:16",
      random:0,
      chance:100,
      eventTitle:"Time to Eat!",
      eventText:"Description of the event",
      items:["Bowl","Food"]
    };
    this.playTime = {
      time:"21:16",
      random:1,
      chance:80,
      eventTitle:"Time to Play!",
      eventText:"Description of the event",
      items:["Chew Toy","Ball"]
    };
    this.visitTheVet = {
      time:"21:16",
      random:0,
      chance:100,
      eventTitle:"Visit the Vet",
      eventText:"Description of the event",
      items:["Vet Bill"]
    };
    this.sick = {
      time:"21:16",
      random:2,
      chance:5,
      eventTitle:"Sick Dog",
      eventText:"Your Dog has gotten sick! Maybe he ate something he wasn't supposed to. Maybe he got a disease from another dog. In any case, you need to head to the vet as soon as possible!",
      items:["Vet Bill"]
    };
  }

  static eventPackager(eventObj) {
    let keysArray = Object.keys(eventObj);
    let eventArray = [];
    
    keysArray.forEach((item) => {
      eventArray.push([eventObj[item].time, eventObj[item]]);
    });
    return eventArray;
  }

}