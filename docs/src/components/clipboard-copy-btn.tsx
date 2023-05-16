'use client'
import { useState } from 'react'
import { CopyToClipboardIcon, CheckIcon } from '@/components/icons'

export function ClipboardCopyBtn({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    window.navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 3500)
    })
  }

  return (
    <button
      onClick={copyToClipboard}
      className={`top-[8px] right-[8px] absolute flex items-center justify-center ${
        copied
          ? 'text-emerald-400 cursor-not-allowed'
          : 'text-slate-200 cursor-copy'
      }`}
      disabled={copied}
    >
      {copied ? <CheckIcon /> : <CopyToClipboardIcon />}
    </button>
  )
}
