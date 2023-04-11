# Color-logs

Prettify Node.js console logs with some nice colors, easily.

## Install

```
npm install @ivnatsr/color-logs
```

## Basic usage

```javascript
import { cl } from '@ivnatsr/color-logs'

console.log(cl.blue('Hello, world!'))
```

You can also pass a styles object to set font style and decorations:

```javascript
console.log(cl.blue('Hello, world!', { font: 'bold', decoration: 'underline' }))
```

Combining font styles:

```javascript
console.log(
  cl.blue('Hello, world!', {
    font: ['bold', 'italic'],
    decoration: 'underline'
  })
)
```

## Supported styles:

### Colors

- `blue`
- `yellow`
- `red`
- `cyan`
- `green`
- `magenta`
- `white`
- `gray`
- `brightRed`
- `brightGreen`
- `brightYellow`
- `brightBlue`
- `brightMagenta`
- `brightCyan`
- `brightWhite`

### Font

- `bold`
- `italic`

### Decoration

- `underline`
- `strikethrough`
