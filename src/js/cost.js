export default class Cost { 

  constructor() {
    this.totalCost = 0;
    this.itemPrices = { //this does not have to be in the class, it can probably be placed outside, so everybody could edit it. 
      food:22,
      vet:250, 
      leash:15, //if you take the dog for a walk you would need to buy a leash 
      collar:10,
    };  
  }

  //potentialy could be interlinked with buttons in the UI, we should discuss this
  //during the meeting this Tuesday. 

  buyItem(item) {  //kind of tackles both cost incrementer and adding key value pairs

    for (const [key,value] of Object.entries(this.itemPrices)){
      if (item === key) {
        this.totalCost = this.totalCost += value; 
      }
    }
  } //Side note: was wondering if a plug and play cost calculation was more simple to implement,
  // as I just realized I wanted to do the exact same thing in my Pizza parlor object,
  // and even Michael said it was extremely difficult in JS to implement. But this is open 
  // to discussion.  

}