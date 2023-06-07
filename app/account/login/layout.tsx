'use client'
import { useAuth } from '@/context/AuthContext'
import { redirect } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()

  if (user) redirect('/account/dashboard')
  return <main>{children}</main>
}
