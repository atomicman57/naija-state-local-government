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