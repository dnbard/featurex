# FeatureX
Library to detect ECMAScript 6+ features in the codebase

`Note: this library is in development and API may(and will) be changed!`

## Usage

```js
const featurex = require('featurex');

featurex('./myModule.js').then(result => {
    console.log(`Next features are used in my code: ${result.features.join(', ')}`);
})
```

```js
featurex('./myModule.js', 'object.assign').then(result => {
    console.log(!!result.features ? 'Object.assign found!' : 'Object.assign not found!');
})
```

## Features

- [ ] Array.from
- [ ] Array.of
- [ ] Array.prototype.copyWithin
- [ ] Array.prototype.entries
- [ ] Array.prototype.find
- [ ] Array.prototype.findIndex
- [ ] Array.prototype.fill
- [ ] Array.prototype.keys
- [ ] Array.prototype.values
- [ ] Arrow functions
- [ ] Default function parameters
- [ ] For..of loops
- [ ] Class
- [x] Constants
- [ ] Destructuring (assigment, parameters)
- [ ] Generators
- [ ] Let
- [ ] Map
- [ ] Number.EPSILON
- [ ] Number.isInteger
- [ ] Number.isNaN
- [ ] Number.isSafeInteger
- [ ] Number.MAX_SAFE_INTEGER
- [ ] Number.MIN_SAFE_INTEGER
- [x] Object.assign
- [ ] Object.is
- [ ] Object.freeze
- [ ] Object.getOwnPropertyDescriptor
- [ ] Object.getOwnPropertySymbols
- [ ] Object.getOwnPropertyNames
- [ ] Object.isExtensible
- [ ] Object.isFrozen
- [ ] Object.isSealed
- [ ] Object.keys
- [ ] Object.preventExtensions
- [ ] Object.seal
- [ ] Object.setPrototypeOf
- [ ] Object literal extensions
- [ ] Octal and binary literals
- [ ] Promise
- [ ] Proxy
- [ ] RegExp "y" and "u" flags
- [ ] Rest parameters
- [ ] Set
- [ ] Spread (...) operator
- [ ] String.fromCodePoint
- [ ] String.prototype.codePointAt
- [ ] String.prototype.endsWith
- [ ] String.prototype.includes
- [ ] String.prototype.normalize
- [ ] String.prototype.repeat
- [ ] String.prototype.startsWith
- [ ] String.raw
- [ ] Super (function)
- [ ] Symbol
- [ ] Template literals
- [ ] Typed arrays
- [ ] WeakMap
- [ ] WeakSet
