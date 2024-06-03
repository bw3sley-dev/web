import { api } from '@/lib/axios'

export type GetLastWeekAthletesAmountBody = {
  date: string
  athletes: number
}[]

export async function getLastWeekAthletesAmount() {
  const response = await api.get<GetLastWeekAthletesAmountBody>(
    '/metrics/last-week-athletes-amount',
  )

  return response.data
}
