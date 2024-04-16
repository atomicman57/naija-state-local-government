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

// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03


// Test update 2026-01-03

