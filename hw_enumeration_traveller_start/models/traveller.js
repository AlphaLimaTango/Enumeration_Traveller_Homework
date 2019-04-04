const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map( (journey) => {
    return journey.startLocation;
  });
  return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map( (journey) => {
    return journey.endLocation;
  });
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter( (journey) => {
    if (journey.transport === transport){
      return journey;
    }
  });
  return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter( (journey) => {
    if (journey.distance >= minDistance){
      return journey;
    };
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const result = this.journeys.map( (journey) => {
    return journey.distance;
  });
  const totalDistance = result.reduce( (sum, distance) => {
    return sum + distance;
  });
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const allTransportArray = this.journeys.map( (journey) => {
    return journey.transport;
  });

  function onlyUnique(transport, index, self) {
    return self.indexOf(transport) === index;
  };

  uniqueTransport = allTransportArray.filter(onlyUnique);
  return uniqueTransport
};


module.exports = Traveller;
