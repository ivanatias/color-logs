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

console.log(cl.blue('Hello, world!', { font: 'bold', decoration: 'underline' }))
    
// Or passing an array of font styles:
console.log(cl.blue('Hello, world!', {
  font: ['bold', 'italic'],
  decoration: 'underline'
}))`
  }
]

export function Steps() {
  return (
    <section className='relative flex flex-col gap-8'>
      <h2 className='text-4xl font-bold text-slate-100'>Steps to use</h2>
      <ul className='flex flex-col gap-8'>
        {STEPS.map((step, i) => (
          <li className='flex flex-col gap-4' key={i}>
            <h3 className='text-2xl font-bold text-slate-200'>{step.title}</h3>
            <Code code={step.code} />
          </li>
        ))}
      </ul>
    </section>
  )
}
