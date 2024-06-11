import { api } from '@/lib/axios'

interface DeleteVolunteerParams {
  volunteerId: string
}

export async function deleteVolunteer({ volunteerId }: DeleteVolunteerParams) {
  const response = await api.patch(`/volunteers/${volunteerId}`)

  return response.data
}
