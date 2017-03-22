var Rat = function(name){
  this.name = name;
};

Rat.prototype = {
  touch: function(food){
    food.poison();
    return "I just touched a " + food.name;
  }
};

module.exports = Rat;