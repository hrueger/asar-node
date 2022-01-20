const log = (...args) => {
  console.log('[_app-node-modules-asar/subdir/test.js]', ...args)
}

log(__filename)

const fs = require('fs')
const path = require('path')
const assert = require('assert')
// eslint-disable-next-line no-template-curly-in-string
fs.writeFileSync(path.join(__dirname, '../../out.js'), `

const log = (...args) => {
  console.log('[out.js]', ...args)
}

log(__filename)
log(__dirname)

module.exports = 'out'`)

assert.ok(fs.existsSync(path.join(__dirname, '../../out.js')))

const out = require('../../out.js')
module.exports = {
  inner: 'inner',
  out: out
}
