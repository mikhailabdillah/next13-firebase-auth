'use client'
import { useAuth } from '@/context/AuthContext'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user } = useAuth()

  useEffect(() => {
    if (user) redirect('/admin')
  }, [user])
  return <main>{children}</main>
}
