import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layout/app'
import { AuthLayout } from './pages/_layout/auth'
import { PrivateRoutes } from './pages/_layout/private'

import { NotFound } from './pages/404'
import { Error } from './pages/error'

import { Dashboard } from './pages/app/dashboard/dashboard'

import { SignIn } from './pages/app/auth/sign-in'
import { Forgot } from './pages/app/auth/forgot'

import { AuthProvider } from './contexts/auth-context'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <AuthProvider>
        <PrivateRoutes>
          <AppLayout />
        </PrivateRoutes>
      </AuthProvider>
    ),

    errorElement: <Error />,

    children: [{ path: '/', element: <Dashboard /> }],
  },

  {
    path: '/',
    element: <AuthLayout />,

    errorElement: <Error />,

    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },

      {
        path: '/forgot',
        element: <Forgot />,
      },
    ],
  },

  {
    path: '*',
    element: <NotFound />,
  },
])
