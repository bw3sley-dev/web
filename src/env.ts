import { z } from 'zod'

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_DELAY: z.string().transform((value) => value === 'true'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.log('❌ Invalid environment variables.')

  throw new Error('Invalid environment variables.')
}

export const env = envSchema.parse(import.meta.env)
