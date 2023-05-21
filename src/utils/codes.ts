const COLOR_CODES = {
  red: [1, 0],
  green: [2, 0],
  yellow: [3, 0],
  blue: [4, 0],
  cyan: [6, 0],
  magenta: [201, 0],
  gray: [7, 0],
  white: [15, 0],
  brightRed: [196, 0],
  brightGreen: [82, 0],
  brightYellow: [226, 0],
  brightBlue: [33, 0],
  brightMagenta: [5, 0],
  brightCyan: [51, 0],
  brightWhite: [231, 0]
} as const

const FONT_CODES = {
  bold: [1, 0],
  italic: [3, 0]
} as const

const DECORATION_CODES = {
  underline: [4, 0],
  strikethrough: [9, 0]
} as const

export { COLOR_CODES, FONT_CODES, DECORATION_CODES }
