var Rat = require('../rat');
var Food = require('../food');
var assert = require('assert');
var roland;
var mushroom;

describe('rat', function(){

  beforeEach(function(){
    roland = new Rat('Roland');
    mushroom = new Food('mushroom', 20);
  });

  it('has a rat name', function(){
    assert.equal('Roland', roland.name);
  });

  it('can touch food', function(){
    assert.equal('I just touched a mushroom', roland.touch(mushroom));
  });

  it('poisons the food it touches', function(){
    roland.touch(mushroom);
    assert.equal(true, mushroom.isPoisoned);
  });
})