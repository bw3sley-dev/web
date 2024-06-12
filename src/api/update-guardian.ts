/* eslint-disable camelcase */
import { api } from '@/lib/axios'

export interface UpdateGuardianAddressParams {
  name?: string
  email?: string
  relationship_degree?: string
}

export async function updateGuardian({
  name,
  email,
  relationship_degree,
}: UpdateGuardianAddressParams) {
  await api.put(`/guardian`, {
    name,
    email,
    relationship_degree,
  })
}
