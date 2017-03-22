var Hero = require('../hero');
var Food = require('../food');
var assert = require('assert');
var mario;
var mushroom;

describe('Hero', function(){
  beforeEach(function(){
    mario = new Hero('Mario', mushroom);
    cabbage = new Food('cabbage', 10);
    mushroom = new Food('mushroom', 20);
  });

  it('has a name', function(){
    assert.equal('Mario', mario.name);
  });

  it('has health', function(){
    assert.equal(100, mario.health);
  });

  it('has a favourite food', function(){
    assert.deepEqual(mushroom, mario.faveFood);
  });

  it('can say its name', function(){
    assert.equal('My name is Mario!', mario.sayName());
  });

  it('can eat food', function(){
    assert.equal('Yum', mario.eat(mushroom));
  });

  it('is replenished by food', function(){
    mario.eat(cabbage);
    assert.equal(110, mario.health);

  });

  it('is 1.5* replenished by eating favourite food', function(){
    mario.eat(mushroom);
    assert.equal(130, mario.health);
  }); 

  it('loses health when eating poisoned food', function(){
    mushroom.poison();
    mario.eat(mushroom);
    assert.equal(80, mario.health);
  });

  it('is disgusted by eating poisoned food', function(){
    mushroom.poison();
    assert.equal('Yuck', mario.eat(mushroom));

  })

})