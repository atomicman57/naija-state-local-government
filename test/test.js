'use strict';

var assert = require('assert');
var naijaStates = require('..');
var statesAndLocalGov = require('../src/statesAndLocalGov.json')


describe('naija-state-local-gov', function() {
    it('#all()', function() {
        var response = naijaStates.all();

        assert.equal(response.length, 37);
        assert.equal(typeof response, typeof []);
        assert.equal(response[1].state, statesAndLocalGov[1].state);
        assert.equal(response[1].lgas.length, statesAndLocalGov[1].lgas.length);
    });

    it('#states()', function() {
        var response = naijaStates.states();

        assert.equal(response.length, 37);
        assert.equal(typeof response, typeof []);
        assert.equal(response[1], statesAndLocalGov[1].state);
        assert.equal(response[36], 'Zamfara');
    });

    it('#senatorial_districts()', function() {
        var response = naijaStates.senatorial_districts('Lagos');
       
        assert.equal(response.length, 3);
    });

    it('#lgas()', function() {
        var response = naijaStates.lgas('Lagos');

        assert.equal(response.state, 'Lagos');
        assert.equal(response.lgas.length, 21);
    });
});
// Test improvement 1767459740371

// Test improvement 1767459740686

// Test improvement 1767459740820

// Test improvement 1767459741406

// Test improvement 1767459741814

// Test improvement 1767459742019

// Test improvement 1767459744931

// Test improvement 1767459745205

// Test improvement 1767459745588

// Test improvement 1767459745951

// Test improvement 1767459746160

// Test improvement 1767459746344

// Test improvement 1767459746571

// Test improvement 1767459746949

// Test improvement 1767459747076

// Test improvement 1767459747546

// Test improvement 1767459747775

// Test improvement 1767459747920

// Test improvement 1767459748084

// Test improvement 1767459748458

// Test improvement 1767459748615

// Test improvement 1767459749054

// Test improvement 1767459749168

// Test improvement 1767459749206

// Test improvement 1767459749246

// Test improvement 1767459749551

// Test improvement 1767459749977

// Test improvement 1767459750167

// Test improvement 1767459750369

// Test improvement 1767459750531

// Test improvement 1767459750859

// Test improvement 1767459750976

// Test improvement 1767459751315

// Test improvement 1767459751645

// Test improvement 1767459751881

// Test improvement 1767459752113

// Test improvement 1767459752309
