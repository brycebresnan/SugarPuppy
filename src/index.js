import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Simulator from './js/simulator';


let sim = new Simulator();


//create button to see log 
// let logButton = document.getElementById("dispLog");
// logButton.addEventListener("click", () => sim.displayLog());

let acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", sim.eventEnd.bind(sim));


// *****************For Modal Alert Testing********************
// Get the modal
const alertModal = document.getElementById("alertModal");
const introModal = document.getElementById("introModal");
const endModal = document.getElementById("endModal");
// const clockModal = document.getElementById("clockModal");
//const span = document.getElementById()

// Get the button that opens the modal
const alertBtn = document.getElementById("alertBtn");
const introBtn = document.getElementById("introBtn");
const endBtn = document.getElementById("endBtn");

// Get the <span> element that closes the modal
const alertCloseBtn = document.getElementById("alertClose");
const introCloseBtn = document.getElementById("introClose");
const endCloseBtn = document.getElementById("scoreClose");
// When the user clicks on the button, open the modal
alertBtn.onclick = function () {
  alertModal.style.display = "block";
};
introBtn.onclick = function () {
  introModal.style.display = "block";
};
endBtn.onclick = function () {
  endModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
alertCloseBtn.onclick = function() {
  alertModal.style.display = "none";
};
introCloseBtn.onclick = function () {
  introModal.style.display = "none";
};
endCloseBtn.onclick = function () {
  endModal.style.display = "none";
};

// *****************For Modal Alert Testing********************
window.addEventListener("load", () => {
  introModal.style.display = "block";
  sim.simStart();
});

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