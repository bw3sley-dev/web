import { useEffect } from 'react'

import { api } from '@/lib/axios'

import { Outlet, useNavigate } from 'react-router-dom'

import { isAxiosError } from 'axios'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true })
          }
        }
      },
    )

    return () => {
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])

  return (
    <div className="min-h-screen w-full bg-slate-900 text-slate-200">
      <div className="flex-1 flex flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  )
}
