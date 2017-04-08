# Featurex
Library to detect ECMAScript 6+ features in the codebase

`Note: this library is in development and API may(and will) be changed!`

## Usage

```js
const featurex = require('featurex');

featurex('./myModule.js').then(features => {
    console.log(`Next features are used in my code: ${features.join(', ')}`);
})
```

## Features

- [ ] Arrow functions
- [x] const