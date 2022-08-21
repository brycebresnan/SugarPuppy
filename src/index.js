import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Simulator from './js/simulator';



let sim = new Simulator();
sim.simStart();

//create button to see log 
let element = document.getElementById("dispLog"); 
let x = 0;
element.addEventListener("click", () => document.getElementById("eventLog").innerText = x++ + sim.eventLog);

// *****************For Modal Alert Testing********************
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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