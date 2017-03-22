var Hero = require('../hero');
var assert = require('assert');
var mario;

describe('Hero', function(){
  beforeEach(function(){
    mario = new Hero('Mario', 'mushroom');
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

  it('is replenished by food');

  it('is 1.5* replenished by eating favourite food'); 

})