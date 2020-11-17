const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {


  let park, tRex, diplodocus, raptor
  beforeEach(function () {

    park = new Park('Brontisarious World', 30)
    tRex = new Dinosaur('Tyrannosaurus Rex', 'carnivore', 200)
    diplodocus = new Dinosaur('diplodocus', 'herbivore', 300)
    raptor = new Dinosaur('raptor', 'carnivore', 150)
    park.dinosaurs.push(tRex, diplodocus)
  })

  it('should have a name', function () {
    assert.strictEqual(park.name, 'Brontisarious World')
  });

  it('should have a ticket price', function() {
    assert.strictEqual(park.ticketPrice, 30)
  });

  it('should have a collection of dinosaurs', function () {
    assert.deepStrictEqual(park.dinosaurs, [tRex, diplodocus]);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(raptor)
    assert.deepStrictEqual(park.dinosaurs, [tRex, diplodocus, raptor])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur()
    assert.deepStrictEqual(park.dinosaurs, [tRex])
  })


  it('should be able to find the dinosaur that attracts the most visitors', function() {
    // park.mostAttractiveDinosaur()
    assert.deepStrictEqual(park.mostAttractiveDinosaur(), diplodocus)
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(diplodocus)
    park.addDinosaur(tRex)
    actual = park.findBySpecies('diplodocus')
    expected = [diplodocus, diplodocus]
    assert.deepStrictEqual(actual, expected)
  });

  it('should be able to calculate the total number of visitors per day', function() {
    // park.addDinosaur(diplodocus)
    // park.addDinosaur(tRex)
    // park.addDinosaur(raptor)
    actual = park.visitorsPerDay()

    assert.strictEqual(actual, 500)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    park.addDinosaur(diplodocus)
    park.addDinosaur(tRex)
    park.addDinosaur(raptor)

    assert.strictEqual(park.visitorsPerYear(), 419750)
  });



  it('should be able to calculate total revenue for one year', function() {
    park.addDinosaur(raptor)
    park.addDinosaur(diplodocus)
    park.addDinosaur(tRex)
    actual = park.yearlyRevenue()
    assert.strictEqual(actual, 12592500)
  });

});


