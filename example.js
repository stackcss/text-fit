const vdom = require('virtual-dom')
const hyperx = require('hyperx')
const textFit = require('./')

const hx = hyperx(vdom.h)

const long = 'The quick brown fox jumped over the lazy dog'
const medium = 'The quick brown fox jumped'
const short = 'The quick brown'

const scale = {
  scale: [
    { 'font-size': 24 },
    { 'font-size': 32, max: 30 },
    { 'font-size': 48, max: 15 }
  ]
}

const tree = hx`
  <section>
    <h1 style=${textFit(short, scale)}>${short}</h1>
    <h1 style=${textFit(medium, scale)}>${medium}</h1>
    <h1 style=${textFit(long, scale)}>${long}</h1>
  </section>
`

document.body.appendChild(vdom.create(tree))
