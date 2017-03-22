var Food = require('../food');
var assert = require('assert');
var mushroom;

describe('food', function(){

  beforeEach(function(){
    mushroom = new Food('mushroom', 20);
  });

  it('has a name', function(){
    assert.equal('mushroom', mushroom.name);
  });

  it('has a replenishment value', function(){
    assert.equal(20, mushroom.replenishmentValue);
  });

  it('instantiates not poisoned', function(){
    assert.equal(false, mushroom.isPoisoned);
  })

  it('can be poisoned', function(){
    mushroom.poison();
    assert.equal(true, mushroom.isPoisoned);
  });

})