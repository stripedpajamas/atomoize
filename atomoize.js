#!/usr/bin/env node

const vowels = ['a', 'e', 'i', 'o', 'u']
const thing = process.argv[2]

if (!thing) {
  console.log('Usage: atomoize <thing>\n')
  process.exit(1)
}

let prefix = 'atomo'
if (vowels.includes(thing[0])) {
  prefix = 'atom'
}

const atomoizedThing = `${prefix}${thing}`

console.log(atomoizedThing)
