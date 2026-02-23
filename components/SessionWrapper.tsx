'use client'


import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'

interface SessionWrapperProps {
  children: React.ReactNode
}

export const SessionWrapper: NextPage<SessionWrapperProps> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}
