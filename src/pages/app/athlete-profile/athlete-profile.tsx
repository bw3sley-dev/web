import { useLoaderData } from 'react-router-dom'

export function AthleteProfile() {
  const data = useLoaderData()

  return <h1>{JSON.stringify(data, null, 4)}</h1>
}
