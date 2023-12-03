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
import { all, states, lgas, senatorial_districts } from 'naija-state-local-government';

// Get all states and LGAs
console.log(NaijaStates.all());

// Get all state names
console.log(NaijaStates.states());

// Get LGAs for a specific state
console.log(NaijaStates.lgas("Lagos"));

// Get senatorial districts
console.log(NaijaStates.senatorial_districts("Oyo"));
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

## TypeScript Support

This library includes TypeScript definitions. The main types are:

```typescript
interface StateData {
  state: string;
  capital: string;
  lgas: string[];
  senatorial_districts: SenatorialDistrict[];
}

interface SenatorialDistrict {
  district: string;
  lgas: string[];
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

