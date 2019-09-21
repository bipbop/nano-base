# nano-base@1.0.2
 [![npm version](https://badge.fury.io/js/nano-base.svg)](https://npmjs.org/package/nano-base)  [![build status](https://travis-ci.org/bipbop/nano-base.svg)](https://travis-ci.org/bipbop/nano-base)  [![dependency status](https://david-dm.org/bipbop/nano-base.svg?theme=shields.io)](https://david-dm.org/bipbop/nano-base)  [![devDependency status](https://david-dm.org/bipbop/nano-base/dev-status.svg)](https://david-dm.org/bipbop/nano-base#info=devDependencies)

Simple and nano base for your project.

## Installation
Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm install nano-base --save
```

```js
const Base = require('nano-base');
const base = Base({ customConfig: 'myCustomConfig' });
base.define('applicationDefinition', 'thisIsAFact');
Object.assign(base, { people: 'LoveEachOther' });
```

This package is provided in these module formats:

- CommonJS

## Dependencies

None

## Dev Dependencies

- [amdefine](https://github.com/jrburke/amdefine): Provide AMD's define() API for declaring modules in the AMD format
- [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic.
- [eslint-config-airbnb-base](https://github.com/airbnb/javascript): Airbnb's base JS ESLint config, following our styleguide
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import): Import with sanity.
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework

## License
[MIT](https://opensource.org/licenses/MIT)
