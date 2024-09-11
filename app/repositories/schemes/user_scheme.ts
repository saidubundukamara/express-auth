import {z} from 'zod'

export const createUserScheme = z.object({
    name: z.string(),
    email: z.string().email(),
    mobile_number: z.string(),
    password: z.string().min(8)
})