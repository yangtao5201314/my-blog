# commitlint-config-cz 

[![npm][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Build status][appveyor-image]][appveyor-url]
[![Coverage Status][coveralls-image]][coveralls-url]

[commitlint][] sharable configuration files for [cz-customizable][]
(customizable [Commitizen][commitizen] adapter for [conventional commits][conventional-commits] and [conventional changelog][conventional-changelog]).

You can now **consistently manage your commit types/scopes** for cz-customizable and commitlint **in one place**.

commitlint-config-cz **merges** `{types,scopes,scopeOverrides}` (cz-customizable config) with
`rules.{type-enum,scope-enum}` (commitlint config) and **includes some modules and API** for config conversion.

## Supported Config

commitlint-config-cz use only one config in the following order of precedence.

1. [`config.cz-customizable.config`][cz-customizable-configure] in `package.json`.
2. `.cz-config.js` in your package root (supported by cz-customizable).

## Installation

1. [Install & setup (commitizen &) cz-customizable.][cz-customizable]
2. [Install commitlint.][commitlint-getting-started]
3. Install `commitlint-config-cz` as a local dependency.

   ```sh
   npm install commitlint-config-cz --save-dev
   ```

## Usage

Extend your commitlint config by `cz` in `commitlint.config.js`.

```js
module.exports = {
    extends: [
        'other-config',
        'cz'
    ]
};
```

## Modules & API

commitlint-config-cz includes some modules and API for config conversion.

### `config.js`

Gets the converted commitlint config from the cz-customizable config which is defined in `package.json` or `.cz-config.js` in your package root.

```js
const config = require('commitlint-config-cz/lib/config')();
````

#### `get(pathOrCzConfig: string | Object, defaultConfig?: Object): Object`

Gets the commitlint config from a path to config file.

```js
const getConfig = require('commitlint-config-cz/lib/config').get;

// From a path.
const config = getConfig('path/to/.cz-config.js');
````

```js
const getConfig = require('commitlint-config-cz/lib/config').get;
const czConfig  = { /* `cz-customizable` config object. */ };

// From a `cz-customizable` config object.
const config = getConfig(czConfig);
````

```js
const getConfig     = require('commitlint-config-cz/lib/config').get;
const czConfig      = { /* `cz-customizable` config object. */ };
const defaultConfig = {  // The default `commitlint` config.
    rules: {
        'scope-enum': [  // rule
            2,           // [1] level
            'always',    // [2] applicability
            [],          // [3] value
        ],
        'type-enum' : [  // rule
            2,           // [1] level
            'always',    // [2] applicability
            [],          // [3] value
        ],
    },
};

// Converts and merges the `cz-customizable` config with the default `commitlint` config.
const config = getConfig(czConfig, defaultConfig);
````

1. If cz-customizable config has `scopes`, `scopeOverrides` or `types` field,
   the value(s) [3] of the default commitlint config is/are **REPLACED** by converted value(s).  
   Level [1] and applicability [2] remain as they are.
2. `scope-enum` rule or/and `type-enum` rule is/are **REMOVED**, if its value is an empty array.

---

### `cz-config.js`

Gets the cz-customizable config as an object from `package.json` or `.cz-config.js` in your package root.

```js
const czConfig = require('commitlint-config-cz/lib/cz-config')();
````

#### `get(path: string): Object`

Gets the cz-customizable config as an object from a path.

```js
const getCzConfig = require('commitlint-config-cz/lib/cz-config').get;

const czConfig = getCzConfig('path/to/.cz-config.js');
````

---

### `scopes.js`

Gets the value for [scope-enum][] rule from `package.json` or `.cz-config.js` in your package root.

```js
const scopes = require('commitlint-config-cz/lib/scopes')();
````

#### `get(czConfig: Object): string[]`

Gets the value for [scope-enum][] rule from a cz-customizable config object.

```js
const getScopes = require('commitlint-config-cz/lib/scopes').get;
const czConfig  = { /* cz-customizable config object. */ };

const scopes = getScopes(czConfig);
````

---

### `types.js`

Gets the value for [type-enum][] rule from `package.json` or `.cz-config.js` in your package root.

```js
const types = require('commitlint-config-cz/lib/types')();
````

#### `get(czConfig: Object): string[]`

Gets the value for [type-enum][] rule from `package.json` or `cz-customizable` config object.

```js
const getTypes = require('commitlint-config-cz/lib/types').get;
const czConfig = { /* `cz-customizable` config object. */ };

const types = getTypes(czConfig);
````

[commitlint]: https://github.com/conventional-changelog/commitlint
[commitlint-getting-started]: https://github.com/conventional-changelog/commitlint#getting-started
[cz-customizable]: https://github.com/leonardoanalista/cz-customizable
[commitizen]: https://github.com/commitizen/cz-cli
[conventional-commits]: https://www.conventionalcommits.org
[conventional-changelog]: https://github.com/conventional-changelog/conventional-changelog
[cz-customizable-configure]: https://github.com/leonardoanalista/cz-customizable#configure

[npm-image]: https://img.shields.io/npm/v/commitlint-config-cz.svg
[npm-url]: https://www.npmjs.com/commitlint-config-cz

[coveralls-image]: https://coveralls.io/repos/whizark/commitlint-config-cz/badge.svg?branch=master&service=github
[coveralls-url]: https://coveralls.io/github/whizark/commitlint-config-cz?branch=master

[travis-image]: https://travis-ci.org/whizark/commitlint-config-cz.svg?branch=master
[travis-url]: https://travis-ci.org/whizark/commitlint-config-cz

[appveyor-image]: https://ci.appveyor.com/api/projects/status/github/whizark/commitlint-config-cz?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/whizark/commitlint-config-cz/branch/master

[scope-enum]: https://commitlint.js.org/#/reference-rules?id=scope-enum
[type-enum]: https://commitlint.js.org/#/reference-rules?id=type-enum
