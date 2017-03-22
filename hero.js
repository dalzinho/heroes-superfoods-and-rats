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
    var nutrition = food.replenishmentValue;

    if(food.isPoisoned){
      nutrition *= -1;
    } else if (_.isEqual(food, this.faveFood)){
        nutrition *= 1.5; 
      }
      this.health += nutrition; 
      return 'Yum';
    }
  }

module.exports = Hero;