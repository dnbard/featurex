# FeatureX
Library to detect ECMAScript 6+ features in the codebase

`Note: this library is in development and API may(and will) be changed!`

## Usage

```js
const featurex = require('featurex');

featurex('./myModule.js').then(features => {
    console.log(`Next features are used in my code: ${features.join(', ')}`);
})
```

```js
featurex('./myModule.js', 'object.assign').then(feature => {
    console.log(!!feature ? 'Object.assign found!' : 'Object.assign not found!');
})
```

## Features

- [ ] Arrow functions
- [x] const
- [x] object.assign
