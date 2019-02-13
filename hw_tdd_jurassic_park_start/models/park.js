const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  const indexDinosaur = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexDinosaur, 1);
}

Park.prototype.greatestNoOfVisitors = function() {
  for(var dinosaur of dinosaurs){
    
  }

}

module.exports = Park;
