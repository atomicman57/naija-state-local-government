const NaijaStates = require('../');

// Example 1: Get all states and their data
console.log('=== All States and LGAs ===');
console.log(NaijaStates.all());

// Example 2: Get list of all states
console.log('\n=== All States Names ===');
console.log(NaijaStates.states());

// Example 3: Get LGAs for a specific state
console.log('\n=== Lagos LGAs ===');
console.log(NaijaStates.lgas('Lagos'));

// Example 4: Get senatorial districts
console.log('\n=== Lagos Senatorial Districts ===');
console.log(NaijaStates.senatorial_districts('Lagos'));

// Example 5: Case-insensitive state names
console.log('\n=== Case Insensitive (oyo) ===');
console.log(NaijaStates.lgas('oyo'));

// Example 6: FCT Abuja aliases
console.log('\n=== FCT (Abuja) ===');
console.log(NaijaStates.lgas('FCT'));
console.log(NaijaStates.lgas('Abuja'));

// Example 7: Error handling
try {
    console.log('\n=== Invalid State ===');
    NaijaStates.lgas('InvalidState');
} catch (error) {
    console.error('Error:', error.message);
}
