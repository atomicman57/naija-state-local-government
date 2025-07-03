import { strict as assert } from 'assert';
import naijaStates from '../index.js';
// eslint-disable-next-line
import statesAndLocalGov from '../src/statesAndLocalGov.json' with { type: 'json' };

describe('naija-state-local-gov', () => {
    describe('#all()', () => {
        it('should return all states and local governments', () => {
            const response = naijaStates.all();

            assert.equal(response.length, 37);
            assert.ok(Array.isArray(response));
            assert.equal(response[1].state, statesAndLocalGov[1].state);
            assert.equal(response[1].lgas.length, statesAndLocalGov[1].lgas.length);
        });
    });

    describe('#states()', () => {
        it('should return all Nigeria states', () => {
            const response = naijaStates.states();

            assert.equal(response.length, 37);
            assert.ok(Array.isArray(response));
            assert.equal(response[1], statesAndLocalGov[1].state);
            assert.equal(response[36], 'Zamfara');
        });
    });

    describe('#senatorial_districts()', () => {
        it('should return senatorial districts for Lagos', () => {
            const response = naijaStates.senatorial_districts('Lagos');
            assert.equal(response.length, 3);
        });

        it('should throw error for invalid state', () => {
            assert.throws(
                () => naijaStates.senatorial_districts(''),
                /Invalid Nigeria State/
            );
        });

        it('should throw error for non-existent state', () => {
            assert.throws(
                () => naijaStates.senatorial_districts('InvalidState'),
                /State "invalidstate" not found/
            );
        });

        it('should handle FCT aliases', () => {
            const response = naijaStates.senatorial_districts('abuja');
            assert.ok(Array.isArray(response));
        });
    });

  describe('#lgas()', () => {
    it('should return LGAs for Lagos state', () => {
      const response = naijaStates.lgas('Lagos');

      assert.equal(response.state, 'Lagos');
      assert.equal(response.lgas.length, 20);
    });

        it('should be case insensitive', () => {
            const response = naijaStates.lgas('LAGOS');
            assert.equal(response.state, 'Lagos');
        });

        it('should throw error for invalid state', () => {
            assert.throws(() => naijaStates.lgas(''), /Invalid Nigeria State/);
        });

        it('should throw error for non-existent state', () => {
            assert.throws(
                () => naijaStates.lgas('InvalidState'),
                /State "invalidstate" not found/
            );
        });
    });
});

describe('New Features', () => {
    describe('#geopolitical_zones()', () => {
        it('should return all geopolitical zones with their states', () => {
            const zones = naijaStates.geopolitical_zones();
            
            assert.ok(typeof zones === 'object');
            assert.ok('South West' in zones);
            assert.ok('South East' in zones);
            assert.ok('South South' in zones);
            assert.ok('North Central' in zones);
            assert.ok('North East' in zones);
            assert.ok('North West' in zones);
            assert.ok(Array.isArray(zones['South West']));
            assert.ok(zones['South West'].includes('Lagos'));
        });
    });

    describe('#states_in_zone()', () => {
        it('should return states in South West zone', () => {
            const states = naijaStates.states_in_zone('South West');
            
            assert.ok(Array.isArray(states));
            assert.ok(states.includes('Lagos'));
            assert.ok(states.includes('Oyo'));
        });

        it('should be case insensitive', () => {
            const states = naijaStates.states_in_zone('SOUTH WEST');
            assert.ok(states.length > 0);
        });

        it('should throw error for invalid zone', () => {
            assert.throws(
                () => naijaStates.states_in_zone(''),
                /Invalid geopolitical zone/
            );
        });

        it('should throw error for non-existent zone', () => {
            assert.throws(
                () => naijaStates.states_in_zone('Invalid Zone'),
                /not found/
            );
        });
    });

    describe('#state_by_capital()', () => {
        it('should return state by capital name', () => {
            const state = naijaStates.state_by_capital('Ikeja');
            
            assert.equal(state.state, 'Lagos');
            assert.equal(state.capital, 'Ikeja');
            assert.ok(state.lgas);
        });

        it('should be case insensitive', () => {
            const state = naijaStates.state_by_capital('IKEJA');
            assert.equal(state.state, 'Lagos');
        });

        it('should throw error for invalid capital', () => {
            assert.throws(
                () => naijaStates.state_by_capital(''),
                /Invalid capital name/
            );
        });

        it('should throw error for non-existent capital', () => {
            assert.throws(
                () => naijaStates.state_by_capital('InvalidCity'),
                /not found/
            );
        });
    });

    describe('#lga_state()', () => {
        it('should return state info for an LGA', () => {
            const result = naijaStates.lga_state('Alimosho');
            
            assert.equal(result.lga, 'Alimosho');
            assert.equal(result.state, 'Lagos');
            assert.equal(result.capital, 'Ikeja');
            assert.ok(result.geopolitical_zone);
        });

        it('should be case insensitive', () => {
            const result = naijaStates.lga_state('ALIMOSHO');
            assert.equal(result.state, 'Lagos');
        });

        it('should throw error for invalid LGA', () => {
            assert.throws(
                () => naijaStates.lga_state(''),
                /Invalid LGA name/
            );
        });

        it('should throw error for non-existent LGA', () => {
            assert.throws(
                () => naijaStates.lga_state('InvalidLGA'),
                /not found/
            );
        });
    });

    describe('#lga_count()', () => {
        it('should return number of LGAs in Lagos', () => {
            const count = naijaStates.lga_count('Lagos');
            assert.equal(count, 20);
        });

        it('should be case insensitive', () => {
            const count = naijaStates.lga_count('LAGOS');
            assert.equal(count, 20);
        });
    });

    describe('#senatorial_district_count()', () => {
        it('should return number of senatorial districts', () => {
            const count = naijaStates.senatorial_district_count('Lagos');
            assert.equal(count, 3);
        });
    });

    describe('#is_valid_state()', () => {
        it('should return true for valid state', () => {
            assert.equal(naijaStates.is_valid_state('Lagos'), true);
        });

        it('should return false for invalid state', () => {
            assert.equal(naijaStates.is_valid_state('InvalidState'), false);
        });

        it('should return false for empty string', () => {
            assert.equal(naijaStates.is_valid_state(''), false);
        });

        it('should be case insensitive', () => {
            assert.equal(naijaStates.is_valid_state('LAGOS'), true);
        });

        it('should handle FCT aliases', () => {
            assert.equal(naijaStates.is_valid_state('Abuja'), true);
            assert.equal(naijaStates.is_valid_state('FCT'), true);
        });
    });

    describe('#is_valid_lga()', () => {
        it('should return true for valid LGA', () => {
            assert.equal(naijaStates.is_valid_lga('Alimosho'), true);
        });

        it('should return false for invalid LGA', () => {
            assert.equal(naijaStates.is_valid_lga('InvalidLGA'), false);
        });

        it('should return true for valid LGA in specific state', () => {
            assert.equal(naijaStates.is_valid_lga('Alimosho', 'Lagos'), true);
        });

        it('should return false for LGA not in specified state', () => {
            assert.equal(naijaStates.is_valid_lga('Alimosho', 'Oyo'), false);
        });

        it('should return false for empty string', () => {
            assert.equal(naijaStates.is_valid_lga(''), false);
        });
    });

    describe('#random_state()', () => {
        it('should return a random state object', () => {
            const state = naijaStates.random_state();
            
            assert.ok(state.state);
            assert.ok(state.capital);
            assert.ok(state.lgas);
            assert.ok(Array.isArray(state.lgas));
        });
    });

    describe('#random_lga()', () => {
        it('should return a random LGA with state info', () => {
            const result = naijaStates.random_lga();
            
            assert.ok(result.lga);
            assert.ok(result.state);
            assert.ok(result.capital);
            assert.ok(result.geopolitical_zone);
        });
    });

    describe('#search_state()', () => {
        it('should search states by partial name', () => {
            const results = naijaStates.search_state('lag');
            
            assert.ok(Array.isArray(results));
            assert.ok(results.length > 0);
            assert.ok(results.some((state) => state.state === 'Lagos'));
        });

        it('should be case insensitive', () => {
            const results = naijaStates.search_state('LAG');
            assert.ok(results.length > 0);
        });

        it('should return empty array for no matches', () => {
            const results = naijaStates.search_state('xyz123');
            assert.equal(results.length, 0);
        });

        it('should throw error for empty query', () => {
            assert.throws(
                () => naijaStates.search_state(''),
                /Search query cannot be empty/
            );
        });
    });

    describe('#search_lga()', () => {
        it('should search LGAs by partial name', () => {
            const results = naijaStates.search_lga('iba');
            
            assert.ok(Array.isArray(results));
            assert.ok(results.length > 0);
            assert.ok(results[0].lga);
            assert.ok(results[0].state);
        });

        it('should be case insensitive', () => {
            const results = naijaStates.search_lga('IBA');
            assert.ok(results.length > 0);
        });

        it('should return empty array for no matches', () => {
            const results = naijaStates.search_lga('xyz123');
            assert.equal(results.length, 0);
        });

        it('should throw error for empty query', () => {
            assert.throws(
                () => naijaStates.search_lga(''),
                /Search query cannot be empty/
            );
        });
    });

    describe('#capitals()', () => {
        it('should return all state capitals', () => {
            const caps = naijaStates.capitals();
            
            assert.ok(Array.isArray(caps));
            assert.equal(caps.length, 37);
            assert.ok(caps[0].state);
            assert.ok(caps[0].capital);
            assert.ok(caps.some((c) => c.state === 'Lagos' && c.capital === 'Ikeja'));
        });
    });

    describe('#statistics()', () => {
        it('should return statistics about states and LGAs', () => {
            const stats = naijaStates.statistics();
            
            assert.equal(stats.totalStates, 37);
            assert.equal(stats.totalLGAs, 776); // Current data count
            assert.ok(stats.averageLGAsPerState);
            assert.ok(stats.stateWithMostLGAs);
            assert.ok(stats.stateWithMostLGAs.state);
            assert.ok(stats.stateWithMostLGAs.count);
            assert.ok(stats.stateWithLeastLGAs);
            assert.ok(stats.stateWithLeastLGAs.state);
            assert.ok(stats.stateWithLeastLGAs.count);
        });

        it('should identify Kano as state with most LGAs', () => {
            const stats = naijaStates.statistics();
            assert.equal(stats.stateWithMostLGAs.state, 'Kano');
            assert.equal(stats.stateWithMostLGAs.count, 44);
        });
    });
});

// Test update 2026-01-03


// Test update 2026-01-03

