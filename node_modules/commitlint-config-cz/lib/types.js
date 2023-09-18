'use strict';

const czConfig = require('./cz-config')();

const defaults = [
    // 'feat',
    // 'fix',
    // 'docs',
    // 'style',
    // 'refactor',
    // 'perf',
    // 'test',
    // 'chore',
    // 'revert',
];

/**
 * Gets the `value` for `type-enum` rule of commitlint config.
 *
 * @param {Object} czConfig A cz-customizable config.
 *
 * @returns {Object} The `value`.
 */
function get(czConfig) {
    const types = [];

    if (typeof czConfig.types === 'undefined') {
        return defaults;
    }

    for (const type of czConfig.types) {
        types.push(type.value);
    }

    return types;
}

module.exports          = () => get(czConfig);
module.exports.defaults = defaults;
module.exports.get      = get;
