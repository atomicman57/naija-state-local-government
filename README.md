# naija-state-local-government

[![NPM](https://nodei.co/npm/naija-state-local-government.png)](https://nodei.co/npm/naija-state-local-government/)
[![npm version](https://badge.fury.io/js/naija-state-local-government.svg)](https://www.npmjs.com/package/naija-state-local-government)
![Tests](https://github.com/atomicman57/naija-state-local-government/workflows/Tests/badge.svg)

A modern, zero-dependency utility library that lists Nigeria states and local governments.

## ✨ Features

- 🚀 Zero dependencies
- 📦 ES Modules & CommonJS support
- 💪 TypeScript definitions included
- 🎯 Comprehensive test coverage
- 🌐 Node.js 18+ support
- ⚡ Lightweight and fast

## Installation

```bash
npm install naija-state-local-government
```

## Usage

### ES6+ / TypeScript

```javascript
import NaijaStates from 'naija-state-local-government';

// Or use named imports
import { 
  all, 
  states, 
  lgas, 
  senatorial_districts,
  geopolitical_zones,
  states_in_zone,
  state_by_capital,
  lga_state,
  search_state,
  search_lga,
  statistics
} from 'naija-state-local-government';

// Get all states and LGAs
console.log(NaijaStates.all());

// Get all state names
console.log(NaijaStates.states());

// Get LGAs for a specific state
console.log(NaijaStates.lgas("Lagos"));

// Get senatorial districts
console.log(NaijaStates.senatorial_districts("Oyo"));

// Get geopolitical zones
console.log(NaijaStates.geopolitical_zones());

// Get states in a zone
console.log(NaijaStates.states_in_zone("South West"));

// Find state by capital
console.log(NaijaStates.state_by_capital("Ikeja"));

// Find which state an LGA belongs to
console.log(NaijaStates.lga_state("Alimosho"));

// Search for states
console.log(NaijaStates.search_state("Lag"));

// Get statistics
console.log(NaijaStates.statistics());
```

### Example Outputs

#### Get All States

```javascript
const allStates = NaijaStates.all();
// Returns array of 37 states with their data
[
  {
    state: "Lagos",
    capital: "Ikeja",
    geopolitical_zone: "South West",
    lgas: ["Agege", "Ajeromi-Ifelodun", ...],
    senatorial_districts: [...]
  },
  ...
]
```

#### Get State Names Only

```javascript
const stateNames = NaijaStates.states();
// Returns: ["Abia", "Adamawa", "Akwa Ibom", ...]
```

#### Get LGAs for a State

```javascript
const lagosData = NaijaStates.lgas("Lagos");
// Returns:
{
  state: "Lagos",
  capital: "Ikeja",
  geopolitical_zone: "South West",
  lgas: ["Agege", "Ajeromi-Ifelodun", "Alimosho", ...],
  senatorial_districts: [...]
}
```

#### Get Senatorial Districts

```javascript
const districts = NaijaStates.senatorial_districts("Oyo");
// Returns array of senatorial districts for Oyo state
```

## API Reference

### `all()`

Returns all states with their complete data including local governments and senatorial districts.

- **Parameters:** None
- **Returns:** `StateData[]` - Array of all state objects
- **Example:**

```javascript
const allData = NaijaStates.all();
console.log(allData.length); // 37
```

### `states()`

Returns an array of all Nigeria state names.

- **Parameters:** None
- **Returns:** `string[]` - Array of state names
- **Example:**

```javascript
const stateNames = NaijaStates.states();
console.log(stateNames); // ["Abia", "Adamawa", ...]
```

### `lgas(state)`

Returns the complete data for a specific state including all local governments.

- **Parameters:**
  - `state` (string) - Name of the state (case-insensitive)
- **Returns:** `StateData` - State object with LGAs
- **Throws:** Error if state is invalid or not found
- **Example:**

```javascript
const lagos = NaijaStates.lgas("lagos"); // Case insensitive
console.log(lagos.lgas.length); // 20
```

### `senatorial_districts(state)`

Returns the senatorial districts for a specific state.

- **Parameters:**
  - `state` (string) - Name of the state (case-insensitive)
- **Returns:** `SenatorialDistrict[]` - Array of senatorial districts
- **Throws:** Error if state is invalid or not found
- **Example:**

```javascript
const districts = NaijaStates.senatorial_districts("Lagos");
console.log(districts.length); // 3
```

### `geopolitical_zones()`

Returns all geopolitical zones with their respective states.

- **Parameters:** None
- **Returns:** `Record<string, string[]>` - Object with zone names as keys and state arrays as values
- **Example:**

```javascript
const zones = NaijaStates.geopolitical_zones();
console.log(zones["South West"]); // ["Lagos", "Ogun", "Oyo", ...]
```

### `states_in_zone(zone)`

Returns all states in a specific geopolitical zone.

- **Parameters:**
  - `zone` (string) - Name of the geopolitical zone (case-insensitive)
- **Returns:** `string[]` - Array of state names
- **Throws:** Error if zone is invalid or not found
- **Example:**

```javascript
const states = NaijaStates.states_in_zone("South West");
console.log(states); // ["Lagos", "Ogun", "Oyo", ...]
```

### `state_by_capital(capital)`

Returns the state data by its capital city name.

- **Parameters:**
  - `capital` (string) - Name of the capital city (case-insensitive)
- **Returns:** `StateData` - Complete state object
- **Throws:** Error if capital is invalid or not found
- **Example:**

```javascript
const state = NaijaStates.state_by_capital("Ikeja");
console.log(state.state); // "Lagos"
```

### `lga_state(lgaName)`

Finds which state an LGA belongs to and returns detailed information.

- **Parameters:**
  - `lgaName` (string) - Name of the LGA (case-insensitive)
- **Returns:** `LGAInfo` - Object with lga, state, capital, and geopolitical_zone
- **Throws:** Error if LGA is invalid or not found
- **Example:**

```javascript
const info = NaijaStates.lga_state("Alimosho");
console.log(info);
// { lga: "Alimosho", state: "Lagos", capital: "Ikeja", geopolitical_zone: "South West" }
```

### `lga_count(state)`

Returns the number of LGAs in a state.

- **Parameters:**
  - `state` (string) - Name of the state (case-insensitive)
- **Returns:** `number` - Count of LGAs
- **Example:**

```javascript
const count = NaijaStates.lga_count("Lagos");
console.log(count); // 20
```

### `senatorial_district_count(state)`

Returns the number of senatorial districts in a state.

- **Parameters:**
  - `state` (string) - Name of the state (case-insensitive)
- **Returns:** `number` - Count of senatorial districts
- **Example:**

```javascript
const count = NaijaStates.senatorial_district_count("Lagos");
console.log(count); // 3
```

### `is_valid_state(state)`

Checks if a state name is valid.

- **Parameters:**
  - `state` (string) - Name of the state (case-insensitive)
- **Returns:** `boolean` - True if valid, false otherwise
- **Example:**

```javascript
console.log(NaijaStates.is_valid_state("Lagos")); // true
console.log(NaijaStates.is_valid_state("InvalidState")); // false
```

### `is_valid_lga(lgaName, stateName?)`

Checks if an LGA exists, optionally within a specific state.

- **Parameters:**
  - `lgaName` (string) - Name of the LGA (case-insensitive)
  - `stateName` (string, optional) - Name of the state to narrow search
- **Returns:** `boolean` - True if valid, false otherwise
- **Example:**

```javascript
console.log(NaijaStates.is_valid_lga("Alimosho")); // true
console.log(NaijaStates.is_valid_lga("Alimosho", "Lagos")); // true
console.log(NaijaStates.is_valid_lga("Alimosho", "Oyo")); // false
```

### `random_state()`

Returns a random state with all its data.

- **Parameters:** None
- **Returns:** `StateData` - Random state object
- **Example:**

```javascript
const state = NaijaStates.random_state();
console.log(state.state); // Random state name
```

### `random_lga()`

Returns a random LGA with its state information.

- **Parameters:** None
- **Returns:** `LGAInfo` - Random LGA with state details
- **Example:**

```javascript
const lga = NaijaStates.random_lga();
console.log(lga); // { lga: "...", state: "...", capital: "...", geopolitical_zone: "..." }
```

### `search_state(query)`

Searches for states by partial name match.

- **Parameters:**
  - `query` (string) - Search query (case-insensitive)
- **Returns:** `StateData[]` - Array of matching states
- **Throws:** Error if query is empty
- **Example:**

```javascript
const results = NaijaStates.search_state("Lag");
console.log(results); // States containing "Lag" in their name
```

### `search_lga(query)`

Searches for LGAs across all states by partial name match.

- **Parameters:**
  - `query` (string) - Search query (case-insensitive)
- **Returns:** `LGAInfo[]` - Array of matching LGAs with state info
- **Throws:** Error if query is empty
- **Example:**

```javascript
const results = NaijaStates.search_lga("Iba");
console.log(results); // All LGAs containing "Iba"
```

### `capitals()`

Returns all state capitals.

- **Parameters:** None
- **Returns:** `CapitalInfo[]` - Array of state-capital pairs
- **Example:**

```javascript
const caps = NaijaStates.capitals();
console.log(caps); // [{ state: "Lagos", capital: "Ikeja" }, ...]
```

### `statistics()`

Returns comprehensive statistics about Nigeria's states and LGAs.

- **Parameters:** None
- **Returns:** `Statistics` - Object containing various statistics
- **Example:**

```javascript
const stats = NaijaStates.statistics();
console.log(stats);
// {
//   totalStates: 37,
//   totalLGAs: 774,
//   averageLGAsPerState: 20.92,
//   stateWithMostLGAs: { state: "Kano", count: 44 },
//   stateWithLeastLGAs: { state: "...", count: ... }
// }
```

## TypeScript Support

This library includes TypeScript definitions. The main types are:

```typescript
interface StateData {
  state: string;
  capital: string;
  geopolitical_zone: string;
  lgas: string[];
  senatorial_districts: SenatorialDistrict[];
}

interface SenatorialDistrict {
  district: string;
  lgas: string[];
}

interface LGAInfo {
  lga: string;
  state: string;
  capital: string;
  geopolitical_zone: string;
}

interface CapitalInfo {
  state: string;
  capital: string;
}

interface Statistics {
  totalStates: number;
  totalLGAs: number;
  averageLGAsPerState: number;
  stateWithMostLGAs: {
    state: string;
    count: number;
  };
  stateWithLeastLGAs: {
    state: string;
    count: number;
  };
}
```

## Features & Notes

- ✅ **Case Insensitive:** All state name inputs are case-insensitive
- ✅ **FCT Support:** Accepts "Abuja", "FCT", "F.C.T" as aliases for Federal Capital Territory
- ✅ **Error Handling:** Throws descriptive errors for invalid inputs
- ✅ **Zero Dependencies:** No external dependencies required
- ✅ **Modern JavaScript:** Uses ES6+ features and ES Modules

## Testing

```bash
npm test
```

## Contributing

We welcome contributions! Here's how you can help:

1. Fork this repository to your account
2. Clone your repository: `git clone git@github.com:your-username/naija-state-local-government.git`
3. Create your feature branch: `git checkout -b feature/amazing-feature`
4. Make your changes and run tests: `npm test`
5. Ensure code quality: `npm run lint`
6. Commit your changes: `git commit -m "feat: add amazing feature"`
7. Push to the remote branch: `git push origin feature/amazing-feature`
8. Open a pull request

### Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `docs:` - Documentation changes
- `test:` - Test changes
- `refactor:` - Code refactoring
- `chore:` - Build process or auxiliary tool changes

## License

This project is authored by **Philips Blessing** and is licensed under the [MIT License](https://en.wikipedia.org/wiki/MIT_License).

## Changelog

### Version 2.0.0

- ✨ Migrated to ES6+ modules
- 💪 Added TypeScript definitions
- 🧪 Improved test coverage
- 📚 Enhanced documentation
- ⚡ Modernized codebase
- 🔧 Added ESLint and Prettier
- 🤖 Added GitHub Actions CI/CD

### Version 1.1.2

- Initial stable release with CommonJS

## Support

If you find this library helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs
- 💡 Suggesting new features
- 🤝 Contributing code

## Author

**Philips Blessing**

- GitHub: [@atomicman57](https://github.com/atomicman57)

---

Made with ❤️ for Nigeria 🇳🇬

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.



## Update 2026-01-03

Documentation improvements and updates.

