import { api } from '@/lib/axios'

export interface GetAthleteProfileParams {
  athleteId: string
}

export interface GetAthleteProfileBody {
  name: string
}

export async function getAthleteProfile({
  athleteId,
}: GetAthleteProfileParams) {
  const response = await api.get<GetAthleteProfileBody>(
    `/athletes/${athleteId}`,
  )

  return response.data
}
