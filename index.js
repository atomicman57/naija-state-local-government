var statesAndLocalGov = require('./src/statesAndLocalGov.json');

module.exports = {
    all: function() {
        return statesAndLocalGov
    },
    states: function () {
        var naijaStates = [];
        statesAndLocalGov.map(function (nigeriaStates){
            return naijaStates.push(nigeriaStates.state)
        });
        return naijaStates;
    },
    lgas: function (state) {
        var stateLocalGov;

        if(!state || state.toLowerCase().trim() === ''){
            throw new Error('Invalid Nigeria State');
        }
        state = state.toLowerCase().trim();

        if (state === 'fct' || state === 'f.c.t' || state === 'abuja' || state === 'f c t'){
            state = 'Federal Capital Territory'
        }
        statesAndLocalGov.find(function (nigeriaStates) {
            if (nigeriaStates.state.toLowerCase() === state.toLowerCase().trim()){
                return stateLocalGov = nigeriaStates.lgas;
            }
        });
        return stateLocalGov;
    }
};
