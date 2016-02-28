const xtend = require('xtend/mutable')
const assert = require('assert')

module.exports = textFit

// Turn constraints into an object of styles
// (str, obj) -> obj
function textFit (text, opts) {
  assert.equal(typeof text, 'string', 'text should be a string')
  assert.equal(typeof opts, 'object', 'opts should be an object')
  assert.ok(Array.isArray(opts.scale), 'opts.scale should be an array')

  const textLength = text.length
  var styles = {}

  opts.scale.forEach(function (vals) {
    if (vals.max) {
      if (textLength <= vals.max) xtend(styles, vals)
    }
    else xtend(styles, vals)
  })

  if (styles['line-height']) styles['line-height'] += 'px'
  if (styles['font-size']) styles['font-size'] += 'px'

  return styles
}
