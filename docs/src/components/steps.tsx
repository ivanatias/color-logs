import Code from '@/components/code'

const STEPS = [
  {
    title: 'Install',
    code: 'npm install @ivnatsr/color-logs'
  },
  {
    title: 'Basic usage',
    code: `import { cl } from '@ivnatsr/color-logs'

console.log(cl.blue('Hello, world!'))`
  },
  {
    title: 'Passing styles object',
    code: `import { cl } from '@ivnatsr/color-logs'

console.log(cl.blue('Hello, world!'), { font: 'bold', decoration: 'underline' })
    
// Or passing an array of font styles:
console.log(cl.blue('Hello, world!'), {
  font: ['bold', 'italic'],
  decoration: 'underline'
})`
  }
]

export function Steps() {
  return (
    <section className='relative flex flex-col gap-8'>
      <h2 className='text-slate-100 font-bold text-4xl'>Steps to use</h2>
      <ul className='flex flex-col gap-8'>
        {STEPS.map((step, i) => (
          <li className='flex flex-col gap-4 text-slate-200' key={i}>
            <h3 className='font-bold text-2xl'>{step.title}</h3>
            <Code code={step.code} />
          </li>
        ))}
      </ul>
    </section>
  )
}
