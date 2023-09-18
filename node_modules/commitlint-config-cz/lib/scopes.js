'use strict';

const czConfig = require('./cz-config')();

const defaults = [];

/**
 * Gets the `value` for `scope-enum` rule of commitlint config.
 *
 * @param {Object} czConfig A cz-customizable config.
 *
 * @returns {Object} The `value`.
 */
function get(czConfig) {
    const scopes = [];

    if (typeof czConfig.scopes === 'undefined') {
        return defaults;
    }

    for (const scope of czConfig.scopes) {
        scopes.push(scope.name);
    }

    if (typeof czConfig.scopeOverrides === 'undefined') {
        return scopes;
    }

    for (const type of Object.keys(czConfig.scopeOverrides)) {
        for (const scope of czConfig.scopeOverrides[type]) {
            scopes.push(scope.name);
        }
    }

    return scopes.filter(function (value, index, scope) {
        return scope.indexOf(value) === index;
    });
}

module.exports          = () => get(czConfig);
module.exports.defaults = defaults;
module.exports.get      = get;
