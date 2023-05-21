import { COLOR_CODES, FONT_CODES, DECORATION_CODES } from './codes'
import type { Code, Color, Decoration, Font, StyleFn, Styles } from '../types'

function attachStyles(text: string, colorCode: Code, styles: Styles) {
  const { font, decoration } = styles

  const startColor = getANSI(colorCode[0], true)
  const endColor = getANSI(colorCode[1], true)

  const [startFont, endFont] = generateStyle(FONT_CODES, font)
  const [startDecoration, endDecoration] = generateStyle(
    DECORATION_CODES,
    decoration
  )

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

function generateStyle(
  codes: Record<string, Code>,
  style: Decoration | Font | Font[] | undefined
) {
  let start = ''
  let end = ''

  if (style !== undefined) {
    if (Array.isArray(style)) {
      style.forEach(s => {
        start += getANSI(codes[s]?.[0])
        end += getANSI(codes[s]?.[1])
      })
    } else {
      start = getANSI(codes[style]?.[0])
      end = getANSI(codes[style]?.[1])
    }
  }

  return [start, end]
}

function getANSI(code = 0, isColor = false) {
  return `\x1b[${isColor ? '38;5;' : ''}${code}m`
}

function generateColorsObject() {
  const clObject = {} as Record<Color, StyleFn>
  const colorsKeys = Object.keys(COLOR_CODES) as Color[]

  colorsKeys.forEach(key => {
    clObject[key] = (text, styles = {}) =>
      attachStyles(text, COLOR_CODES[key], styles)
  })

  return clObject // Main object containing functions in charge of generating all the styles
}

export { generateColorsObject }
