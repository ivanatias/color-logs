import { expect, test, describe } from 'vitest'
import { cl } from '../index'
import { COLOR_CODES } from '../utils/codes'
import type { Color } from '../types'

describe('color-logs', () => {
  test('properties are named after supported colors', () => {
    const colorsKeys = Object.keys(COLOR_CODES) as Color[]
    colorsKeys.forEach(key => {
      expect(cl[key]).toBeDefined()
    })
  })

  test('properties values are functions that return strings', () => {
    expect(typeof cl.red).toBe('function')
    expect(typeof cl.red('Text')).toBe('string')
  })

  test('returns the expected color string', () => {
    const yellowText = '\x1b[38;5;3mText\x1b[38;5;0m'

    expect(cl.yellow('Text')).toBe(yellowText)
  })

  test('returns the expected color string with font and decoration variants', () => {
    const text = '\x1b[3m\x1b[4m\x1b[38;5;82mText\x1b[38;5;0m\x1b[0m\x1b[0m' // Italic, underlined, bright green text

    expect(
      cl.brightGreen('Text', { font: 'italic', decoration: 'underline' })
    ).toBe(text)
  })

  test('returns the expected color string if font or decoration variant is missing', () => {
    const strikeThroughText = '\x1b[9m\x1b[38;5;82mText\x1b[38;5;0m\x1b[0m' // strikethrough, bright green text
    const boldText = '\x1b[1m\x1b[38;5;82mText\x1b[38;5;0m\x1b[0m' // Bold, bright green text

    expect(cl.brightGreen('Text', { decoration: 'strikethrough' })).toBe(
      strikeThroughText
    )
    expect(cl.brightGreen('Text', { font: 'bold' })).toBe(boldText)
  })

  test('returns the expected color string if passed an array of font styles', () => {
    const boldItalicText =
      '\x1b[1m\x1b[3m\x1b[38;5;82mText\x1b[38;5;0m\x1b[0m\x1b[0m' // Bold, italic bright green text

    expect(cl.brightGreen('Text', { font: ['bold', 'italic'] })).toBe(
      boldItalicText
    )
  })

  test('should not throw and use default values if invalid font or decoration is passed', () => {
    expect(
      // @ts-ignore
      cl.brightGreen('Text', { font: 'invalid', decoration: '' })
    ).toBe('\x1B[0m\x1B[0m\x1b[38;5;82mText\x1b[38;5;0m\x1B[0m\x1B[0m')
  })
})
