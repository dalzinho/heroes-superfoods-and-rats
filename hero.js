var _ = require('lodash');
var Hero = function(name, faveFood){
  this.name = name;
  this.health = 100;
  this.faveFood = faveFood;
};

Hero.prototype = {
  sayName: function(){
    return "My name is " + this.name + "!";
  },
  eat: function(food){

    if(_.isEqual(food, this.faveFood)){
      this.health += (food.replenishmentValue * 1.5); 
   } else {
    this.health += food.replenishmentValue;
   }
   return 'Yum';
 }

}

module.exports = Hero;