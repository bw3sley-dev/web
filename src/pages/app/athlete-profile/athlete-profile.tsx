import { getAthleteProfile } from '@/api/get-athlete-profile'

import { useParams } from 'react-router-dom'

export function AthleteProfile() {
  const { id } = useParams()

  const data = getAthleteProfile({
    athleteId: id!,
  })

  return <h1>{JSON.stringify(data, null, 4)}</h1>
}
