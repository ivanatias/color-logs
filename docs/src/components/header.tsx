import { GitHubIcon } from '@/components/icons'

export function Header() {
  return (
    <header className='flex flex-col max-w-3xl gap-8 px-4 pt-10 mx-auto text-center'>
      <div className='flex flex-col items-center gap-3'>
        <h1 className='text-5xl font-bold tracking-wide text-transparent'>
          <span className='py-1 bg-clip-text bg-gradient-to-r from-emerald-400 to-red-400'>
            Color-
          </span>
          <span className='py-1 bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400'>
            logs
          </span>
        </h1>
        <a
          className='flex items-center gap-2 transition text-slate-400 hover:text-slate-100'
          href='https://github.com/ivanatias/color-logs'
          target='_blank'
          rel='noreferrer noopener'
        >
          <GitHubIcon />
          <span className='text-xs'>ivanatias/color-logs</span>
          <span className='sr-only'>
            go to color logs project github repository opens a new window
          </span>
        </a>
      </div>
      <div className='flex flex-col items-center gap-2'>
        <p className='text-base font-semibold text-slate-300 2xl:text-lg'>
          Prettify your Node.js console logs with some nice colors, easily.
        </p>
        <div className='flex flex-wrap items-center justify-center gap-4 italic text-white'>
          <p className='text-sm underline text-slate-400 2xl:text-base'>
            0 dependencies
          </p>
          <p className='text-sm underline text-slate-400 2xl:text-base'>
            less than 1kB gzipped
          </p>
        </div>
      </div>
    </header>
  )
}
