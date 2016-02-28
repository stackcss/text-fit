const test = require('tape')
const textFit = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(textFit)
})
