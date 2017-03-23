var Food = function(name, replenishmentValue){
  this.name = name;
  this.replenishmentValue = replenishmentValue;
}

Food.prototype = {
  poison: function(){
    this.isPoisoned = true;
  }
};

module.exports = Food;