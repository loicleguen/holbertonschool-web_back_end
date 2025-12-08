module.exports = {
    "env": {
        "browser": true,
        node: true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        semi: ['error', 'always'],           // Require semicolons
        'prefer-const': 'error',             // Prefer const
        indent: ['error', 2],                // 2 spaces indentation
        quotes: ['error', 'single'],         // Single quotes
        'no-unused-vars': 'warn',            // Warn for unused variables
        'no-console': 'warn',                // Warn for console.log
        'eol-last': ['error', 'always'],     // Newline at end of file
    }
};