/* eslint-disable camelcase */
import { api } from '@/lib/axios'

export interface UpdateAthleteParams {
  athleteId: string
  name: string
  birth_date: string
  blood_type:
    | 'A_POSITIVE'
    | 'A_NEGATIVE'
    | 'B_POSITIVE'
    | 'B_NEGATIVE'
    | 'AB_POSITIVE'
    | 'AB_NEGATIVE'
    | 'O_POSITIVE'
    | 'O_NEGATIVE'
  gender: 'MALE' | 'FEMALE'
  handedness: 'RIGHT' | 'LEFT'
}

export async function updateAthleteStatus({
  athleteId,
  gender,
  name,
  birth_date,
  handedness,
  blood_type,
}: UpdateAthleteParams) {
  await api.patch(`/athletes/${athleteId}`, {
    athleteId,
    gender,
    name,
    birth_date,
    handedness,
    blood_type,
  })
}
