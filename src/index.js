import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Simulator from './js/simulator';



let sim = new Simulator();
sim.simStart();



//create button to see log 
let logButton = document.getElementById("dispLog");
let x = 0;
logButton.addEventListener("click", () => document.getElementById("eventLog").innerText = x++ + sim.eventLog);

let acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", sim.eventEnd.bind(sim));


// *****************For Modal Alert Testing********************
// Get the modal
const alertModal = document.getElementById("alertModal");
const introModal = document.getElementById("introModal");
const score = document.getElementById("score");
const clockModal = document.getElementById("clockModal");

// Get the button that opens the modal
const alertBtn = document.getElementById("alertBtn");
const introBtn = document.getElementById("introBtn");
const scoreBtn = document.getElementById("scoreBtn");

// Get the <span> element that closes the modal
const alertCloseBtn = document.getElementById("alertClose");
const introCloseBtn = document.getElementById("introClose");
const scoreCloseBtn = document.getElementById("scoreClose");
// When the user clicks on the button, open the modal
alertBtn.onclick = function () {
  alertModal.style.display = "block";
};
introBtn.onclick = function () {
  introModal.style.display = "block";
};
scoreBtn.onclick = function () {
  score.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
alertCloseBtn.onclick = function() {
  alertModal.style.display = "none";
}
introCloseBtn.onclick = function () {
  introModal.style.display = "none";
};
scoreCloseBtn.onclick = function () {
  score.style.display = "none";
}

// *****************For Modal Alert Testing********************

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
