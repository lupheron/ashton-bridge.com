'use client'

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'
import ModalDefault from '../components/Modal/ModalDefault'

type QuoteModalContextValue = {
  openQuote: () => void
  closeQuote: () => void
}

const QuoteModalContext = createContext<QuoteModalContextValue | null>(null)

export function QuoteModalProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const openQuote = useCallback(() => setOpen(true), [])
  const closeQuote = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ openQuote, closeQuote }),
    [openQuote, closeQuote]
  )

  return (
    <QuoteModalContext.Provider value={value}>
      {children}
      <ModalDefault open={open} handleClose={closeQuote} />
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const ctx = useContext(QuoteModalContext)
  if (!ctx) {
    throw new Error('useQuoteModal must be used within QuoteModalProvider')
  }
  return ctx
}
