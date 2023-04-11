import { COLOR_CODES, FONT_CODES, DECORATION_CODES } from './codes'
import type { Code, Color, Decoration, Font, StyleFn, Styles } from '../types'

function attachStyles(
  text: string,
  colorCode: Code,
  styles: Styles | undefined = {}
) {
  const { font, decoration } = styles

  const startColor = getANSI(colorCode[0])
  const endColor = getANSI(colorCode[1])

  const [startFont, endFont] = generateFont(font)
  const [startDecoration, endDecoration] = generateDecoration(decoration)

  return (
    startFont +
    startDecoration +
    startColor +
    text +
    endColor +
    endDecoration +
    endFont
  )
}

function generateFont(font: Font | Font[] | undefined) {
  let start = ''
  let end = ''

  if (font !== undefined) {
    if (Array.isArray(font)) {
      font.forEach(f => {
        start += getANSI(FONT_CODES[f][0])
        end += getANSI(FONT_CODES[f][1])
      })
    } else {
      start = getANSI(FONT_CODES[font][0])
      end = getANSI(FONT_CODES[font][1])
    }
  }

  return [start, end]
}

function generateDecoration(decoration: Decoration | undefined) {
  let start = ''
  let end = ''

  if (decoration !== undefined) {
    start = getANSI(DECORATION_CODES[decoration][0])
    end = getANSI(DECORATION_CODES[decoration][1])
  }

  return [start, end]
}

function getANSI(code: number) {
  return '\x1b[' + code + 'm'
}

function generateColorsObject() {
  const clObject = {} as Record<Color, StyleFn>
  const colorsKeys = Object.keys(COLOR_CODES) as Color[]

  colorsKeys.forEach(key => {
    clObject[key] = (text, styles) =>
      attachStyles(text, COLOR_CODES[key], styles)
  })

  return clObject // Main object containing functions in charge of generating all the styles
}

export { generateColorsObject }
