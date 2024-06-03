import { api } from '@/lib/axios'

export type GetAthletesByGenderAmountBody = {
  gender: string
  amount: number
}[]

export async function getAthletesByGenderAmount() {
  const response = await api.get<GetAthletesByGenderAmountBody>(
    '/metrics/athletes-gender-amount',
  )

  return response.data
}
