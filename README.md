# naija-state-local-government

[![NPM](https://nodei.co/npm/naija-state-local-government.png)](https://nodei.co/npm/naija-state-local-government/)

[![npm version](https://badge.fury.io/js/naija-state-local-government.svg)](https://www.npmjs.com/package/naija-state-local-government)

A simple utility library that lists Nigeria states and local governments with zero dependency

### Installation

``` Javascript

npm install naija-state-local-government

```

### Example

``` Javascript
//ES5
const NaijaStates = require('naija-state-local-government');

// ES6
import NaijaStates from 'naija-state-local-government';

console.log(NaijaStates.all());
console.log(NaijaStates.states());
console.log(NaijaStates.lgas("Oyo"))

```

### Sample Usage
#### States
![alt](https://preview.ibb.co/iGaoGw/Screen_Shot_2018_01_22_at_12_39_46_PM.png)

#### LGAs
![alt](https://preview.ibb.co/mxrjpG/Screen_Shot_2018_01_22_at_12_40_09_PM.png)


| function    | argument                                            | response                                            |   |   |
|-------------|-----------------------------------------------------|-----------------------------------------------------|---|---|
| .all()      | none                                                | it returns all states and local government          |   |   |
| .states()   | none                                                | it returns all Nigeria states                       |   |   |
| .lga(state) | state(Nigeria state. Note: it's not case sensitive) | it returns the local government of the input state. |   |   |

### Features

List all local government areas and state in Nigeria

## Contributing

* Fork this repositry to your account.
* Clone your repositry: git clone git@github.com:your-username/naija-state-local-government.git
* Create your feature branch: git checkout -b feature/<3-4 word feature description>
* Commit your changes: git commit -m "feature(scope): (subject) <BLANK LINE> (body) <BLANK LINE> (footer)"
* Push to the remote branch: git push origin new-feature
* Open a pull request.

- Commit Message Convention
    - scope should be something specific to the commit change e.g logo
    - subject text should:
        - use present tense: "save" not "saved" or "saving"
        - not capitalize first letter i.e no "Carry to safety"
        - not end with a dot (.)
    - Message body (optional) If a body is to be written, it should:
      - written in present tense.
      - include reason for change and difference in the previous behaviour

    - Message Footer This should be used for referencing the issues using the following keywords: Start, Delivers, Fixes and Finishes. It should be written as:
      - [Start #345]
    
## License

This project is authored by Philips Blessing and is licensed 
for your use, modification and distribution under [the MIT license](https://en.wikipedia.org/wiki/MIT_License). 
