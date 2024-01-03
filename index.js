const statesAndLocalGov = require('./src/statesAndLocalGov.json');

const FCT_ALIASES = ['fct', 'f.c.t', 'abuja', 'f c t'];
const FCT_NAME = 'Federal Capital Territory';

const normalize = (input) => {
    if (!input || typeof input !== 'string') {
        throw new Error('Invalid Nigeria State: Please provide a valid state name');
    }
    return input.toLowerCase().trim();
};

const normalizeFCT = (state) => {
    return FCT_ALIASES.includes(state) ? FCT_NAME : state;
};

const findStateData = (stateName) => {
    const normalizedState = normalize(stateName);
    const state = normalizeFCT(normalizedState);

    const stateData = statesAndLocalGov.find(
        (item) => normalize(item.state) === normalize(state)
    );

    if (!stateData) {
        throw new Error(`State not found: ${stateName}`);
    }

    return stateData;
};

module.exports = {
    all: () => statesAndLocalGov,

    states: () => statesAndLocalGov.map((item) => item.state),

    senatorial_districts: (state) => {
        const stateData = findStateData(state);
        return stateData.senatorial_districts;
    },

    lgas: (state) => findStateData(state)
};
