import { api } from '@/lib/axios'

interface GetAnamnesisParams {
  id: string
}

export interface GetAnamnesisResponse {
  id: string
  athleteId: string
  createdAt: string

  athlete: {
    name: string
  }

  sections: {
    id: number
    icon: string
    title: string
    description?: string

    questions: {
      id: number
      title: string
      description: string

      answers: {
        id: string
        value: string
        question_id: number
      }

      observation: string
      question_type:
        | 'ESSAY'
        | 'MULTIPLE_CHOICE'
        | 'TRUE_FALSE'
        | 'SHORT_ANSWER'
        | 'RATING'
        | 'DATE'
        | 'TIME'
        | 'NUMBER'
        | 'MULTI_SELECT'
        | 'DROPDOWN'
    }[]
  }[]
}

export async function getAnamnesis({ id }: GetAnamnesisParams) {
  const response = await api.get<GetAnamnesisResponse>(`/anamnesis/${id}`)

  return response.data
}
