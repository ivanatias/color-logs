const COLOR_CODES = {
  blue: [34, 89],
  yellow: [33, 89],
  red: [31, 89],
  cyan: [36, 89],
  green: [32, 89],
  magenta: [35, 89],
  white: [37, 89],
  gray: [30, 89],
  brightRed: [91, 39],
  brightGreen: [92, 39],
  brightYellow: [93, 39],
  brightBlue: [94, 39],
  brightMagenta: [95, 39],
  brightCyan: [96, 39],
  brightWhite: [97, 39]
} as const

const FONT_CODES = {
  bold: [1, 22],
  italic: [3, 23]
} as const

const DECORATION_CODES = {
  underline: [4, 24],
  strikethrough: [9, 29]
} as const

export { COLOR_CODES, FONT_CODES, DECORATION_CODES }
