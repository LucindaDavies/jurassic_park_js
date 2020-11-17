const Dinosaur = require("./dinosaur")

const Park = function (name, ticketPrice){
    this.name = name
    this.ticketPrice = ticketPrice
    this.dinosaurs = []
}

Park.prototype.addDinosaur = function (dinosaur) {
    this.dinosaurs.push(dinosaur);
}

Park.prototype.numberOfDinosaurs = function(){
    return this.dinosaurs.length;
  }

Park.prototype.removeDinosaur = function (dinosaur) {
    this.dinosaurs.pop(dinosaur)
}

Park.prototype.mostAttractiveDinosaur = function () {
    let score = 0
    for(let dinosaur of this.dinosaurs) {
        if (dinosaur.guestsAttractedPerDay > score){
            mostAttractive = new Dinosaur(dinosaur.species, dinosaur.diet, dinosaur.guestsAttractedPerDay)
            score = dinosaur.guestsAttractedPerDay
        }
    }
    return mostAttractive
}


Park.prototype.findBySpecies = function (species) {
    let dinosaurSpecies = []
    for(const dinosaur of this.dinosaurs){
        if(dinosaur.species === species){
            dinosaurSpecies.push(dinosaur)
        }
    }
    return dinosaurSpecies
}

Park.prototype.visitorsPerDay = function() {
    let total = 0
    for (const dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay
    }
    return total
}

Park.prototype.visitorsPerYear = function() {
    return this.visitorsPerDay() * 365
}

Park.prototype.yearlyRevenue = function() {
    revenue = this.ticketPrice * this.visitorsPerYear()
    return revenue
}

module.exports = Park