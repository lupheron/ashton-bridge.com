'use client'

import DefaultButton from '../Button/DefaultButton'
import { useQuoteModal } from '../../context/QuoteModalContext'

type Props = {
  customClasses?: string
}

export default function ServiceConsultationButton({ customClasses }: Props) {
  const { openQuote } = useQuoteModal()
  return (
    <DefaultButton
      text="Request a consultation"
      onClick={openQuote}
      customClasses={
        customClasses ??
        'min-w-[200px] h-12 text-base font-semibold text-white rounded-[35px] bg-text hover:bg-text/90 transition-all duration-300 shadow-lg shadow-text/20 px-8 border-0'
      }
    />
  )
}
