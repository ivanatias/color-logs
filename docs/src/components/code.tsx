import { ClipboardCopyBtn } from './clipboard-copy-btn'
import { toHtml } from 'hast-util-to-html'
import { refractor } from 'refractor'
import javascript from 'refractor/lang/javascript'

refractor.register(javascript)

export default function Code({ code }: { code: string }) {
  return (
    <div className='relative'>
      <pre
        dangerouslySetInnerHTML={{
          __html: toHtml(refractor.highlight(code, 'javascript'))
        }}
      />
      <ClipboardCopyBtn code={code} />
    </div>
  )
}
