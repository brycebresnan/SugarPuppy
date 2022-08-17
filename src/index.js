import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import TimeService from "./js/timeService.js";
import Score from "./js/score.js";
import Day from "./js/day.js";

// *****************For Testing Timer********************
const array = [["0:24",alarm],["0:22",alarm],["0:23",alarm]];
let day = new Day(0, array);

running();

function running(){
  console.log("running!");
  day.startDay();
}

function alarm() {
  window.alert(`It's Time!`);

}

// *****************For Testing Timer********************
