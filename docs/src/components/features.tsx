const SUPPORTED_STYLES = {
  colors: [
    {
      name: 'Blue',
      className: 'bg-blue-400'
    },
    {
      name: 'Yellow',
      className: 'bg-yellow-200'
    },
    {
      name: 'Red',
      className: 'bg-red-400'
    },
    {
      name: 'Cyan',
      className: 'bg-cyan-400'
    },
    {
      name: 'Green',
      className: 'bg-green-200'
    },
    {
      name: 'Magenta',
      className: 'bg-fuchsia-600'
    },
    {
      name: 'White',
      className: 'bg-gray-100'
    },
    {
      name: 'Gray',
      className: 'bg-gray-400'
    },
    {
      name: 'Bright red',
      className: 'bg-red-500'
    },
    {
      name: 'Bright green',
      className: 'bg-green-400'
    },
    {
      name: 'Bright yellow',
      className: 'bg-yellow-400'
    },
    {
      name: 'Bright blue',
      className: 'bg-blue-600'
    },
    {
      name: 'Bright magenta',
      className: 'bg-fuchsia-500'
    },
    {
      name: 'Bright cyan',
      className: 'bg-cyan-300'
    },
    {
      name: 'Bright white',
      className: 'bg-white'
    }
  ],
  fonts: [
    {
      name: 'Bold',
      className: 'font-extrabold'
    },
    {
      name: 'Italic',
      className: 'italic'
    }
  ],
  decorations: [
    {
      name: 'Underline',
      className: 'underline'
    },
    {
      name: 'Strikethrough',
      className: 'line-through'
    }
  ]
}

export function Features() {
  return (
    <section className='flex flex-col gap-8'>
      <h2 className='text-4xl font-bold text-slate-100'>
        Currently supported styles
      </h2>
      <FeatureTitle>Colors</FeatureTitle>
      <ul className='grid grid-cols-2 gap-4 md:grid-cols-3'>
        {SUPPORTED_STYLES.colors.map(color => (
          <ColorItem key={color.name} color={color} />
        ))}
      </ul>
      <FeatureTitle>Fonts</FeatureTitle>
      <ul className='grid grid-cols-1 gap-4'>
        {SUPPORTED_STYLES.fonts.map(font => (
          <VariantItem key={font.name} variant={font} />
        ))}
      </ul>
      <FeatureTitle>Decorations</FeatureTitle>
      <ul className='grid grid-cols-1 gap-4'>
        {SUPPORTED_STYLES.decorations.map(decoration => (
          <VariantItem key={decoration.name} variant={decoration} />
        ))}
      </ul>
    </section>
  )
}

interface FeatureItem {
  name: string
  className: string
}

function ColorItem({ color }: { color: FeatureItem }) {
  return (
    <li className='flex items-center gap-2 text-slate-200'>
      <div className={`w-8 h-8 rounded-full ${color.className}`} />
      <span className='font-bold'>{color.name}</span>
    </li>
  )
}

function VariantItem({ variant }: { variant: FeatureItem }) {
  return (
    <li className='flex items-center gap-2 text-slate-200'>
      <span className='text-xl'>{variant.name}</span>
      <span className={variant.className}>Some sample text</span>
    </li>
  )
}

function FeatureTitle({ children }: { children: string }) {
  return <h3 className='text-2xl font-bold text-slate-200'>{children}</h3>
}
