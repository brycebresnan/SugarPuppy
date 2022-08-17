import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import TimeService from "./js/timeService.js";
import Score from "./js/score.js";
import Day from "./js/day.js";

// *****************For Testing Timer********************
const array = [["16:50",alarm],["16:51",alarm],["16:52",alarm]];
let day = new Day(1, array);

running();

function running(){
  console.log("running!");
  day.startDay();
}

function alarm() {
  window.alert(`It's Time!`);

}

// *****************For Testing Timer********************
