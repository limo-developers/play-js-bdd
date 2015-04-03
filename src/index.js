

var car = new Car();

function Car(){

  this.people = [];
  this.speed = 0;
  this.speedPerPerson = 3;

  this.x = 0;
  this.y = 0;

  this.addPeople = function(newPeople){
    for(var i = 0; i < newPeople.length; i++){
      this['people'].push(newPeople[i]);
    }
    this.speed = this.people.length* this.speedPerPerson;
  }
  
  this.getPeople = function(){
    return this.people;
  }

  this.isStarted = function(){

    return this.people.length >= 4 ? true : false;

  }

  this.getSpeed = function(){

    return this.isStarted() ? this.speed : 0;

  }

  this.moveToRight = function(){


    $("#car").css({"left": this.x + this.getSpeed() +"px", "top": this.y+"px"});
    this.x = this.x + this.getSpeed();
  }

  this.moveToLeft = function(){

    $("#car").css({"left": this.x - this.getSpeed() +"px", "top": this.y+"px"});
    this.x = this.x - this.getSpeed();
    
  }
  this.moveToDown = function(){

    $("#car").css({"left": this.x +"px", "top": this.y + this.getSpeed() +"px"});
    this.y = this.y + this.getSpeed();
    
  }
  this.moveToUp = function(){
    
    $("#car").css({"left": this.x +"px", "top": this.y - this.getSpeed() +"px"});
    this.y = this.y - this.getSpeed();
  }
}
car.addPeople(["one", "two", "three", "four", "five", "six", "seven"]);
$(document).keydown(function(event) {
   console.log(event.which);
   switch(event.which){

    // right
    case 39:
      car.moveToRight();
      break;
    // left
    case 37:
      car.moveToLeft();
      break;
    // up
    case 38:
      car.moveToUp();
      break;
    // down;
    case 40:
      car.moveToDown();
      break;


   }
});