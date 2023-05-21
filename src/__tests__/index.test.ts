import { expect, test, describe } from 'vitest'
import { cl } from '../index'
import { COLOR_CODES, FONT_CODES, DECORATION_CODES } from '../utils/codes'
import type { Color } from '../types'

const { yellow, brightGreen } = COLOR_CODES
const { bold, italic } = FONT_CODES
const { underline, strikethrough } = DECORATION_CODES
const STR = 'Text'

describe('color-logs', () => {
  test('properties are named after supported colors', () => {
    const colorsKeys = Object.keys(COLOR_CODES) as Color[]
    colorsKeys.forEach(key => {
      expect(cl[key]).toBeDefined()
    })
  })

  test('properties values are functions that return strings', () => {
    expect(typeof cl.red).toBe('function')
    expect(typeof cl.red(STR)).toBe('string')
  })

  test('returns the expected color string', () => {
    const yellowText = `\x1b[38;5;${yellow[0]}m${STR}\x1b[38;5;${yellow[1]}m`

    expect(cl.yellow(STR)).toBe(yellowText)
  })

  test('returns the expected color string with font and decoration variants', () => {
    // Italic, underlined, bright green text
    const text = `\x1b[${italic[0]}m\x1b[${underline[0]}m\x1b[38;5;${brightGreen[0]}m${STR}\x1b[38;5;${brightGreen[1]}m\x1b[${italic[1]}m\x1b[${underline[1]}m`

    expect(
      cl.brightGreen(STR, { font: 'italic', decoration: 'underline' })
    ).toBe(text)
  })

  test('returns the expected color string if font or decoration variant is missing', () => {
    // Strikethrough, bright green text
    const strikeThroughText = `\x1b[${strikethrough[0]}m\x1b[38;5;${brightGreen[0]}m${STR}\x1b[38;5;${brightGreen[1]}m\x1b[${strikethrough[1]}m`
    // Bold, bright green text
    const boldText = `\x1b[${bold[0]}m\x1b[38;5;${brightGreen[0]}m${STR}\x1b[38;5;${brightGreen[1]}m\x1b[${bold[1]}m`

    expect(cl.brightGreen(STR, { decoration: 'strikethrough' })).toBe(
      strikeThroughText
    )
    expect(cl.brightGreen(STR, { font: 'bold' })).toBe(boldText)
  })

  test('returns the expected color string if passed an array of font styles', () => {
    // Bold, italic bright green text
    const boldItalicText = `\x1b[${bold[0]}m\x1b[${italic[0]}m\x1b[38;5;${brightGreen[0]}m${STR}\x1b[38;5;${brightGreen[1]}m\x1b[${bold[1]}m\x1b[${italic[1]}m`

    expect(cl.brightGreen(STR, { font: ['bold', 'italic'] })).toBe(
      boldItalicText
    )
  })

  test('should not throw and use default values if invalid font or decoration is passed', () => {
    expect(
      // @ts-ignore
      cl.brightGreen(STR, { font: 'invalid', decoration: '' })
    ).toBe(
      `\x1b[0m\x1b[0m\x1b[38;5;${brightGreen[0]}m${STR}\x1b[38;5;${brightGreen[1]}m\x1b[0m\x1b[0m`
    )
  })
})
