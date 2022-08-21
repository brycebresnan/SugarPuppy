import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Simulator from './js/simulator';
import Event from './js/event';



let sim = new Simulator();
let eventObj = new Event();
sim.simStart();

let element = document.getElementById("dispLog"); //change button name. Might have to pass into function later.
element.addEventListener("click", () => document.getElementById("eventLog").innerText = sim.eventLog[0]);

Event.eventPackager(eventObj);

// const morningWalk = {
//     time:"10:00",
//     eventTitle:"Walk the Dog",
//     eventText:"Description of the event",
//     items:["Leash","Collar"]
// }


// *****************For Testing Timer********************
// const array = [["16:50",alarm],["16:51",alarm],["16:52",alarm]];
// let day = new Day(1, array);

// running();

// function running(){
//   console.log("running!");
//   day.startDay();
// }

// function alarm() {
//   window.alert(`It's Time!`);

// }

// *****************For Testing Timer********************


// *****************For Testing StopWatch********************

// const stopWatch = new TimeService();

// function clickListener(element, listenerName) {
//   return new Promise(function (resolve, reject) {
//       var listener = event => {
//           console.log("Click!")
//           let time = stopWatch.stopWatch();
//           console.log(time);
//           element.removeEventListener(listenerName, listener); 
//           resolve(event);
//       };
//       element.addEventListener(listenerName, listener);
//   });
// }
// async function click() {
//   stopWatch.startWatch();
//   let element = document.querySelector("button");
//   await clickListener(element,"click");
// }

// click();

// run();

// function run(){
//   stopWatch.startWatch();
//   setTimeout(function(){stopWatch.stopWatch()}, 2000);
//   setTimeout(function(){stopWatch.resetWatch()}, 3000);
// }
// *****************For Testing StopWatch********************