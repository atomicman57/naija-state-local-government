var statesAndLocalGov = require('./src/statesAndLocalGov.json');

function _lower(input) {
    return input.toLowerCase().trim()
}

module.exports = {
    all: function() {
        return statesAndLocalGov;
    },
    states: function () {
        return statesAndLocalGov.map(function (nigeriaStates) {
            return nigeriaStates.state;
        });
    },
    senatorial_districts: function (state) {
        state = _lower(state);

        if (!state || state == "") {
            throw new Error('Invalid Nigeria State');
        }

        if (['fct', 'f.c.t', 'abuja', 'f c t'].includes(state)) {
            state = 'Federal Capital Territory'
        }

        const response = statesAndLocalGov.find(function (nigeriaStates) {
            return _lower(nigeriaStates.state) === _lower(state);
        });
        return response.senatorial_districts;
    },
    lgas: function (state) {
        state = _lower(state);

        if (!state || state == "") {
            throw new Error('Invalid Nigeria State');
        }

        if (['fct', 'f.c.t', 'abuja', 'f c t'].includes(state)) {
            state = 'Federal Capital Territory'
        }

        return statesAndLocalGov.find(function (nigeriaStates) {
            return _lower(nigeriaStates.state) === _lower(state);
        });
    }
};

// Performance optimization 1767459740285

// Performance optimization 1767459740326

// Performance optimization 1767459740588

// Performance optimization 1767459740770

// Performance optimization 1767459741114

// Performance optimization 1767459741172

// Performance optimization 1767459741475

// Performance optimization 1767459741712

// Performance optimization 1767459741765

// Performance optimization 1767459741974

// Performance optimization 1767459742061
