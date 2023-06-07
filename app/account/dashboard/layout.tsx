'use client'
import { useAuth } from '@/context/AuthContext'
import { redirect } from 'next/navigation'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth()

  if (user == null) redirect('/account/login')
  return <main>{children}</main>
}
