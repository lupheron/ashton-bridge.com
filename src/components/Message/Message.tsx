'use client'

import React from 'react'
import { Alert, AlertTitle, Snackbar } from '@mui/material'

export type MessageSeverity = 'success' | 'error' | 'warning' | 'info'

export interface MessageProps {
  /** Message content */
  message: string
  /** Severity / type of message */
  severity?: MessageSeverity
  /** Optional title shown above the message */
  title?: string
  /** Whether the message is visible */
  open?: boolean
  /** Callback when close/dismiss is triggered */
  onClose?: () => void
  /** Show as snackbar (toast) instead of inline alert */
  variant?: 'inline' | 'snackbar'
  /** Snackbar position (only used when variant="snackbar") */
  anchorOrigin?: {
    vertical: 'top' | 'bottom'
    horizontal: 'left' | 'center' | 'right'
  }
  /** Auto-hide duration in ms (only used when variant="snackbar"). Set to null to disable. */
  autoHideDuration?: number | null
  /** Additional className for the container */
  className?: string
  /** Icon to show (MUI icon component). If not provided, uses default per severity. */
  icon?: React.ReactNode
}

const defaultAnchorOrigin = { vertical: 'bottom' as const, horizontal: 'center' as const }

const Message = ({
  message,
  severity = 'info',
  title,
  open = true,
  onClose,
  variant = 'inline',
  anchorOrigin = defaultAnchorOrigin,
  autoHideDuration = 6000,
  className = '',
  icon,
}: MessageProps) => {
  const alertContent = (
    <Alert
      severity={severity}
      onClose={onClose}
      icon={icon}
      sx={{
        '& .MuiAlert-message': { width: '100%' },
      }}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
    </Alert>
  )

  if (variant === 'snackbar') {
    return (
      <Snackbar
        open={open}
        autoHideDuration={autoHideDuration}
        onClose={onClose}
        anchorOrigin={anchorOrigin}
        className={className}
        sx={{ '& .MuiPaper-root': { alignItems: 'flex-start' } }}
      >
        {alertContent}
      </Snackbar>
    )
  }

  if (!open) return null

  return <div className={className}>{alertContent}</div>
}

export default Message
