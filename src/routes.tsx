import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layout/app'
import { AuthLayout } from './pages/_layout/auth'
import { PrivateRoutes } from './pages/_layout/private'
import { ProfileLayout } from './pages/_layout/profile'

import { NotFound } from './pages/404'
import { Error } from './pages/error'

import { Dashboard } from './pages/app/dashboard/dashboard'

import { Athletes } from './pages/app/athletes/athletes'

import { AthleteProfile } from './pages/app/profile/athlete-profile'

import { SignIn } from './pages/app/auth/sign-in'
import { Forgot } from './pages/app/auth/forgot'

import { AuthProvider } from './contexts/auth-context'

import { getAthleteProfile } from './api/get-athlete-profile'

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

    children: [
      { path: '/', element: <Dashboard /> },

      {
        path: '/athletes',
        element: <Athletes />,
      },
    ],
  },

  {
    path: '/',

    element: (
      <AuthProvider>
        <PrivateRoutes>
          <ProfileLayout />
        </PrivateRoutes>
      </AuthProvider>
    ),

    children: [
      {
        path: '/athletes/:id',
        element: <AthleteProfile />,

        loader: async ({ params }) => {
          try {
            return await getAthleteProfile({ athleteId: params.id! })
          } catch (error) {
            console.error(error)
          }
        },
      },
    ],
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
