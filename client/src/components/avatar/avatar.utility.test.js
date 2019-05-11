import each from 'mocha-each'

import {generateMonogram, generateBackgroundColor} from './avatar.utility'

describe('generateMonogram_', () => {
  it('Should work for Sherlock', () => {
    expect(generateMonogram({name: 'Sherlock Holmes'})).toEqual('SH')
  })
  it('Should work for Superman', () => {
    expect(generateMonogram({name: 'Superman'})).toEqual('S')
  })
  it('Should work for Kennedy', () => {
    expect(generateMonogram({name: 'John F. Kennedy'})).toEqual('JF')
  })
  it('Should work for JRR Tolkien', () => {
    expect(generateMonogram({name: 'John Ronald Reuel Tolkien'})).toEqual('JR')
  })
})

describe('generateBackgroundColor', () => {
  // Yes I stole the regex from StackOverflow:
  // https://bit.ly/2JhIIO3
  // eslint-disable-next-line unicorn/no-unsafe-regex
  const hslColorRegex = /hsl\(\s*(\d+)\s*,\s*(\d+(?:\.\d+)?%)\s*,\s*(\d+(?:\.\d+)?%)\)/
  const names = [
    'Sherlock Holmes',
    'Miss Marple',
    'Hercule Poirot',
    'Columbo',
    'Jules Maigret'
  ]

  each(names.map(name => [`Should generate HSL color for ${name}`, name]))
    .it('%s', (_, name) => {
      expect(generateBackgroundColor({name})).toMatch(hslColorRegex)
    })

  it('Should generate the same color for the same name', () => {
    const [name1, name2, name3] = names
    const areAllTheSame = colors => colors
      .every((color, _, [firstColor]) => (color === firstColor))
    const colorsArray1 = Array(100).fill()
      .map(() => generateBackgroundColor({name: name1}))
    expect(areAllTheSame(colorsArray1)).toEqual(true)
    const colorsArray2 = Array(100).fill()
      .map(() => generateBackgroundColor({name: name2}))
    expect(areAllTheSame(colorsArray2)).toEqual(true)
    const colorsArray3 = Array(100).fill()
      .map(() => generateBackgroundColor({name: name3}))
    expect(areAllTheSame(colorsArray3)).toEqual(true)
  })

  it('Should generate different colors for people with different names but same monograms', () => {
    const [name1, name2] = ['Anna James', 'Andrew Johnson']
    const color1 = generateBackgroundColor({name: name1})
    const color2 = generateBackgroundColor({name: name2})
    expect(color1).not.toEqual(color2)
  })

  it('Should generate different colors for people with slightly different names', () => {
    const [name1, name2] = ['Sara Smith', 'Sarah Smith']
    const color1 = generateBackgroundColor({name: name1})
    const color2 = generateBackgroundColor({name: name2})
    expect(color1).not.toEqual(color2)
  })
})
