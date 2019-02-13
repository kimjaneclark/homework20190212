const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;

  beforeEach(function () {
    park = new Park("Dino Land", 100);
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('dippy', 'herbivore', 75);

  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, "Dino Land");

  });


  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 100);
  });


  it('should have a collection of dinosaurs', function(){
    const expected = [];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected);
  });



  // it('should be able to add a dinosaur to its collection', function(){
  //   park.addDinosaur(dinosaur);
  //   const expected = "t-rex";
  //   const actual = dinosaur.species;
  //   assert.strictEqual(actual, expected)
  //
  // });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur("t-rex");
    const expected = ["t-rex"];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected)

  });




  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur("t-rex");
    park.addDinosaur("dippy");
    park.removeDinosaur("t-rex");
    const expected = ["dippy"];
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.greatestNoOfVisitors();
    const expected = "dippy"
    const actual = park.greatestNoOfVisitors();
    assert.deepStrictEqual(actual, expected);
  });


  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
