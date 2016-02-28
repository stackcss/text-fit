# text-fit [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Fitter, happier text. Apply text styles based on the shape of the text. Useful
to apply styles based on a design system.

## Usage
```js
const textFit = require('text-fit')
const vdom = require('virtual-dom')
const hyperx = require('hyperx')

const hx = hyperx(vdom.h)

const text = 'The quick brown fox jumped over the lazy dog'

const styles = textFit(text, {
  scale: [
    { 'font-size': 24 },
    { 'font-size': 32, max: 30 },
    { 'font-size': 48, max: 15 }
  ]
})

const tree = hx`
  <h1 styles=${styles}>${text}</h1>
`

document.body.appendChild(vdom.create(tree))
```

## API
### textFit(text, opts)
Take a string, analyze the length, and determine the font size based on a
scale. Takes the following options:
- __opts.scale:__ pass in a scale of values to be set. Determines based on
  `.max` if the values should be applied on the text.

## Installation
```sh
$ npm install text-fit
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/text-fit.svg?style=flat-square
[3]: https://npmjs.org/package/text-fit
[4]: https://img.shields.io/travis/yoshuawuyts/text-fit/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/text-fit
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/text-fit/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/text-fit
[8]: http://img.shields.io/npm/dm/text-fit.svg?style=flat-square
[9]: https://npmjs.org/package/text-fit
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
