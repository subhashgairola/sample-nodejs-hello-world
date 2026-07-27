const assert = require('assert')
const { greet } = require('./index.js')

assert.strictEqual(greet('World'), 'Hello, World!')
console.log('All tests passed')
