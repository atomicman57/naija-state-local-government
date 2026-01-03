// eslint-disable-next-line
import statesAndLocalGov from './src/statesAndLocalGov.json' with { type: 'json' };

const _lower = (input) => input.toLowerCase().trim();

export const all = () => statesAndLocalGov;

export const states = () =>
    statesAndLocalGov.map((nigeriaStates) => nigeriaStates.state);

export const senatorial_districts = (state) => {
    state = _lower(state);

    if (!state || state === '') {
        throw new Error('Invalid Nigeria State');
    }

    if (['fct', 'f.c.t', 'abuja', 'f c t'].includes(state)) {
        state = 'Federal Capital Territory';
    }

    const response = statesAndLocalGov.find(
        (nigeriaStates) => _lower(nigeriaStates.state) === _lower(state)
    );

    if (!response) {
        throw new Error(`State "${state}" not found`);
    }

    return response.senatorial_districts;
};

export const lgas = (state) => {
    state = _lower(state);

    if (!state || state === '') {
        throw new Error('Invalid Nigeria State');
    }

    if (['fct', 'f.c.t', 'abuja', 'f c t'].includes(state)) {
        state = 'Federal Capital Territory';
    }

    const response = statesAndLocalGov.find(
        (nigeriaStates) => _lower(nigeriaStates.state) === _lower(state)
    );

    if (!response) {
        throw new Error(`State "${state}" not found`);
    }

    return response;
};

// Get all geopolitical zones with their states
export const geopolitical_zones = () => {
    const zones = {};
    statesAndLocalGov.forEach((state) => {
        const zone = state.geopolitical_zone;
        if (!zones[zone]) {
            zones[zone] = [];
        }
        zones[zone].push(state.state);
    });
    return zones;
};

// Get states in a specific geopolitical zone
export const states_in_zone = (zone) => {
    zone = _lower(zone);
    if (!zone || zone === '') {
        throw new Error('Invalid geopolitical zone');
    }

    const statesInZone = statesAndLocalGov
        .filter((state) => _lower(state.geopolitical_zone) === zone)
        .map((state) => state.state);

    if (statesInZone.length === 0) {
        throw new Error(`Geopolitical zone "${zone}" not found`);
    }

    return statesInZone;
};

// Get state by capital city
export const state_by_capital = (capital) => {
    capital = _lower(capital);
    if (!capital || capital === '') {
        throw new Error('Invalid capital name');
    }

    const state = statesAndLocalGov.find(
        (nigeriaState) => _lower(nigeriaState.capital) === capital
    );

    if (!state) {
        throw new Error(`State with capital "${capital}" not found`);
    }

    return state;
};

// Find which state an LGA belongs to
export const lga_state = (lgaName) => {
    lgaName = _lower(lgaName);
    if (!lgaName || lgaName === '') {
        throw new Error('Invalid LGA name');
    }

    for (const state of statesAndLocalGov) {
        const foundLga = state.lgas.find((lga) => _lower(lga) === lgaName);
        if (foundLga) {
            return {
                lga: foundLga,
                state: state.state,
                capital: state.capital,
                geopolitical_zone: state.geopolitical_zone,
            };
        }
    }

    throw new Error(`LGA "${lgaName}" not found`);
};

// Get number of LGAs in a state
export const lga_count = (state) => {
    const stateData = lgas(state);
    return stateData.lgas.length;
};

// Get number of senatorial districts in a state
export const senatorial_district_count = (state) => {
    const districts = senatorial_districts(state);
    return districts.length;
};

// Check if a state is valid
export const is_valid_state = (state) => {
    if (!state || state === '') return false;

    state = _lower(state);

    if (['fct', 'f.c.t', 'abuja', 'f c t'].includes(state)) {
        return true;
    }

    return statesAndLocalGov.some(
        (nigeriaState) => _lower(nigeriaState.state) === state
    );
};

// Check if an LGA exists in a state
export const is_valid_lga = (lgaName, stateName = null) => {
    lgaName = _lower(lgaName);
    if (!lgaName || lgaName === '') return false;

    if (stateName) {
        try {
            const stateData = lgas(stateName);
            return stateData.lgas.some((lga) => _lower(lga) === lgaName);
        } catch {
            return false;
        }
    }

    return statesAndLocalGov.some((state) =>
        state.lgas.some((lga) => _lower(lga) === lgaName)
    );
};

// Get a random state
export const random_state = () => {
    const randomIndex = Math.floor(Math.random() * statesAndLocalGov.length);
    return statesAndLocalGov[randomIndex];
};

// Get a random LGA
export const random_lga = () => {
    const randomState =
        statesAndLocalGov[Math.floor(Math.random() * statesAndLocalGov.length)];
    const randomLga =
        randomState.lgas[Math.floor(Math.random() * randomState.lgas.length)];
    return {
        lga: randomLga,
        state: randomState.state,
        capital: randomState.capital,
        geopolitical_zone: randomState.geopolitical_zone,
    };
};

// Search states by partial name
export const search_state = (query) => {
    query = _lower(query);
    if (!query || query === '') {
        throw new Error('Search query cannot be empty');
    }

    return statesAndLocalGov.filter((state) =>
        _lower(state.state).includes(query)
    );
};

// Search LGAs across all states
export const search_lga = (query) => {
    query = _lower(query);
    if (!query || query === '') {
        throw new Error('Search query cannot be empty');
    }

    const results = [];
    statesAndLocalGov.forEach((state) => {
        state.lgas.forEach((lga) => {
            if (_lower(lga).includes(query)) {
                results.push({
                    lga: lga,
                    state: state.state,
                    capital: state.capital,
                    geopolitical_zone: state.geopolitical_zone,
                });
            }
        });
    });

    return results;
};

// Get capitals of all states
export const capitals = () =>
    statesAndLocalGov.map((state) => ({
        state: state.state,
        capital: state.capital,
    }));

// Get statistics about Nigeria states and LGAs
export const statistics = () => {
    const totalStates = statesAndLocalGov.length;
    const totalLGAs = statesAndLocalGov.reduce(
        (sum, state) => sum + state.lgas.length,
        0
    );

    const lgaCounts = statesAndLocalGov.map((state) => ({
        state: state.state,
        count: state.lgas.length,
    }));

    const stateWithMostLGAs = lgaCounts.reduce((max, current) =>
        current.count > max.count ? current : max
    );

    const stateWithLeastLGAs = lgaCounts.reduce((min, current) =>
        current.count < min.count ? current : min
    );

    const averageLGAsPerState = (totalLGAs / totalStates).toFixed(2);

    return {
        totalStates,
        totalLGAs,
        averageLGAsPerState: parseFloat(averageLGAsPerState),
        stateWithMostLGAs: {
            state: stateWithMostLGAs.state,
            count: stateWithMostLGAs.count,
        },
        stateWithLeastLGAs: {
            state: stateWithLeastLGAs.state,
            count: stateWithLeastLGAs.count,
        },
    };
};

export default {
    all,
    states,
    senatorial_districts,
    lgas,
    geopolitical_zones,
    states_in_zone,
    state_by_capital,
    lga_state,
    lga_count,
    senatorial_district_count,
    is_valid_state,
    is_valid_lga,
    random_state,
    random_lga,
    search_state,
    search_lga,
    capitals,
    statistics,
};
