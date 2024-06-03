import { api } from '@/lib/axios'

export type SignInBody = {
  email: string
  password: string
}

export async function signIn({ email, password }: SignInBody) {
  await api.post('/sessions', {
    email,
    password,
  })
}
