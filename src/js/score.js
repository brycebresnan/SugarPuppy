export default class Score {
  constructor() {
    this.score = 100;
  }

  calculateScore(time){
    if (time < 10) {
      return;
    } else if (time > 11 && time < 30) {
      this.score -= 5;
    } else if (time > 31 && time < 60) {
      this.score -= 10;
    } else {
      this.score -= 25; 
    }
  }

  resetScore() {
    this.score = 100;
  }
}
