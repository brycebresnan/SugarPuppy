import { library } from "webpack"

export default class Dog { 

   dogMoods = ['neutral','happy', 'angry','sad','deceased']
   dogBreeds = ['maltese','goldenRetriever','pomeranian'] 
   dogStatus = ['living','sick','deceased'] //could move this to main index js folder 
 
  constructor (name,breed,image){  

    this.name = name, 
    this.breed = breed,  
    this.age = 0, //age will be incremented with function 
    this.image = image, //not sure if we need this 
    this.health = 100, 
    this.status = "", //renamed from status to current state, 
                                // because there might be conflicts do 
                                // an already existing variable 
    this.happiness = 100, 
    this.inventory = [], //intialize empty array 
  }

  // go over how health and happiness properties co-relate. 
  // status can be either a string, or a key-value pair with values 
  // could have an impact on health or happiness. 

  decreaseDogHappiness(int){
    let this.happiness = (this.happiness - 5)*int; 
  }

  increaseDogHappiness(int){
    let this.happiness = (this.happiness + 5)*int; 
  }
 
  decreaseDogHealth(int){
    let this.health = (this.health - 5)*int; 
  }

  increaseDogHealth(int){
    let this.health = (this.health + 5)*int; 
  } 

  ageimpactOnHealth(){
    if (this.age >= 9 && <= 14){
      let this.health = this.health - 25,   
    } else if (this.age >= 14 && this.age <=23){
      let this.health = this.health - 45, 
    } else if (this.age === 23 ) {
      let this.health = this.health - 65, 
    } 
  }
  
  determineStatus(){
    if (this.health < 25){
      let this.status = 'sick', 
    } else if (this.health === 0){
      let this.status = 'deceased'
    } else {
      let this.status = 'living',
    }
  }

}