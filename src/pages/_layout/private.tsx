import { ReactNode } from 'react'

import { Navigate } from 'react-router-dom'

import { useAuth } from '@/hooks/use-auth'

interface PrivateRoutesProps {
  children: ReactNode
}

export function PrivateRoutes({ children }: PrivateRoutesProps) {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <div>Carregando...</div>
  }

  if (!isAuthenticated) {
    return <Navigate to="/sign-in?logout=true" replace />
  }

  return <>{children}</>
}
