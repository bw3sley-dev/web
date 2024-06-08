import { api } from '@/lib/axios'

export interface Address {
  id: number
  street?: string
  neighborhood?: string
  zipcode?: string
  state?: string
  complement?: string
  number?: string
  city?: string
  uf?: string
  country?: string
}

export interface GetProfileResponse {
  id: string
  name: string
  initials: string
  email: string
  status: boolean
  birth_date?: string
  gender?: 'MALE' | 'FEMALE'
  cpf?: string
  phone?: string
  role: 'ADMINISTRATOR' | 'VOLUNTEER'
  created_at: string
  area:
    | 'UNSPECIFIED'
    | 'PSYCHOLOGY'
    | 'PHYSIOTHERAPY'
    | 'NUTRITION'
    | 'NURSING'
    | 'PSYCHOPEDAGOGY'
    | 'PHYSICAL_EDUCATION'
  address?: Address
}

export async function getProfile() {
  const response = await api.get<GetProfileResponse>('/me')

  return response.data
}
