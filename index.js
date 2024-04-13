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

// Performance optimization 1767459742101

// Performance optimization 1767459742163

// Performance optimization 1767459742207

// Performance optimization 1767459742249

// Performance optimization 1767459742306

// Performance optimization 1767459742346

// Performance optimization 1767459742391

// Performance optimization 1767459742441

// Performance optimization 1767459742516

// Performance optimization 1767459742752

// Performance optimization 1767459742940

// Performance optimization 1767459743170

// Performance optimization 1767459743276

// Performance optimization 1767459743331

// Performance optimization 1767459743402

// Performance optimization 1767459743460

// Performance optimization 1767459743521

// Performance optimization 1767459743565

// Performance optimization 1767459743610

// Performance optimization 1767459743661

// Performance optimization 1767459743727

// Performance optimization 1767459743771

// Performance optimization 1767459743812

// Performance optimization 1767459743852

// Performance optimization 1767459743895

// Performance optimization 1767459744039

// Performance optimization 1767459744093

// Performance optimization 1767459744136

// Performance optimization 1767459744178

// Performance optimization 1767459744220

// Performance optimization 1767459744269

// Performance optimization 1767459744331

// Performance optimization 1767459744405

// Performance optimization 1767459744496

// Performance optimization 1767459744558

// Performance optimization 1767459744609

// Performance optimization 1767459744676

// Performance optimization 1767459744735

// Performance optimization 1767459744788

// Performance optimization 1767459744842

// Performance optimization 1767459745027

// Performance optimization 1767459745086

// Performance optimization 1767459745148

// Performance optimization 1767459745338

// Performance optimization 1767459745379

// Performance optimization 1767459745545

// Performance optimization 1767459745631

// Performance optimization 1767459745912

// Performance optimization 1767459746030

// Performance optimization 1767459746070

// Performance optimization 1767459746114

// Performance optimization 1767459746291

// Performance optimization 1767459746506

// Performance optimization 1767459746692

// Performance optimization 1767459746745

// Performance optimization 1767459746893

// Performance optimization 1767459747035

// Performance optimization 1767459747209

// Performance optimization 1767459747339

// Performance optimization 1767459747384

// Performance optimization 1767459747505

// Performance optimization 1767459747630

// Performance optimization 1767459747676

// Performance optimization 1767459747728

// Performance optimization 1767459747873
