module.exports = {
    "extends":["airbnb/base"],
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "es6": true,
        "node":true
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "indent": ["error", "tab"],
        "quotes": "off",
        "no-tabs": "off"
    }
};