import type { COLOR_CODES, FONT_CODES, DECORATION_CODES } from './utils/codes'

type Color = keyof typeof COLOR_CODES

type Font = keyof typeof FONT_CODES

type Decoration = keyof typeof DECORATION_CODES

type Code = number[]

type ColorCodes = {
  [key in Color]: Code
}

type FontCodes = {
  [key in Font]: Code
}

type DecorationCodes = {
  [key in Decoration]: Code
}

type Styles = {
  font?: Font | Font[]
  decoration?: Decoration
}

type StyleFn = (text: string, styles?: Styles) => string

export {
  Code,
  ColorCodes,
  FontCodes,
  DecorationCodes,
  Color,
  Font,
  Decoration,
  Styles,
  StyleFn
}
