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

export default {
    all,
    states,
    senatorial_districts,
    lgas,
};
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
// Updated 2026-01-03
