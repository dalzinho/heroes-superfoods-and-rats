var Hero = require('../hero');
var Food = require('../food');
var assert = require('assert');
var mario;
var mushroom;

describe('Hero', function(){
  beforeEach(function(){
    mario = new Hero('Mario', 'mushroom');
    mushroom = new Food('mushroom', 20);
  });

  it('has a name', function(){
    assert.equal('Mario', mario.name);
  });

  it('has health', function(){
    assert.equal(100, mario.health);
  });

  it('has a favourite food', function(){
    assert.equal('mushroom', mario.faveFood);
  });

  it('can say its name', function(){
    assert.equal('My name is Mario!', mario.sayName());
  });

  it('can eat food', function(){
    assert.equal('Yum', mario.eat());
  });

  it('is replenished by food', function(){
    mario.eat(mushroom);
    assert.equal(120, mario.health);

  });

  it('is 1.5* replenished by eating favourite food'); 

})