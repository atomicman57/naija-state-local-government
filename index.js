var statesAndLocalGov = require("./src/statesAndLocalGov.json");

function _lower(input) {
  if (input) {
    return input.toLowerCase().trim();
  }
  return "";
}

function isFCT(state) {
  if (["fct", "f.c.t", "abuja", "f c t"].includes(state)) {
    return "Federal Capital Territory";
  }
  return state;
}

var NaijaStates = {
  all: function () {
    return statesAndLocalGov;
  },
  states: function () {
    return statesAndLocalGov.map(function (nigeriaStates) {
      return nigeriaStates.state;
    });
  },
  senatorial_districts: function (state) {
    var response = statesAndLocalGov.find(function (nigeriaStates) {
      return _lower(nigeriaStates.state) === _lower(isFCT(state));
    });
    if (response) return response.senatorial_districts;
    return [];
  },
  lgas: function (state) {
    var response = statesAndLocalGov.find(function (nigeriaStates) {
      return _lower(nigeriaStates.state) === _lower(isFCT(state));
    });
    if (response) return response;
    return { state: "", senatorial_districts: [], lgas: [] };
  },
};

module.exports = NaijaStates;
