export default class Event {
  constructor() {
    this.morningWalk = {
      time:"19:40",
      random:1,
      chance:100,
      eventTitle:"Morning Walk",
      eventText:"Your dog needs to go out! It's time to take them for a walk.",
      items:["Leash","Collar"]
    };
    this.eveningWalk = {
      time:"19:41",
      random:1,
      chance:100,
      eventTitle:"Evening Walk",
      eventText:"Your dog needs to go out! It's time to take them for a walk.",
      items:["Leash","Collar"]
    };
    this.foodMorning = {
      time:"19:43",
      random:0,
      chance:100,
      eventTitle:"Time to Eat",
      eventText:"Your dog is hungry! Give them a little breakfast.",
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
      eventText:"Your dog has a lot of energy and wants to play. Consider giving them a chewtoy, but playing fetch would build a stronger bond between you.",
      items:["Chew Toy","Ball"]
    };
    this.visitTheVet = {
      time:"21:16",
      random:0,
      chance:100,
      eventTitle:"Vet Checkup",
      eventText:"It's time to go for a routine checkup for your dog.",
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