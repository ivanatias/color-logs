import { Steps } from '@/components/steps'
import { Features } from '@/components/features'

export default function Home() {
  return (
    <section className='flex flex-col gap-10'>
      <Steps />
      <Features />
    </section>
  )
}
