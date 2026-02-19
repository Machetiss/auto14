import { z } from 'zod';

export const leadSchema = z.object({
    service: z.string().optional(),
    name: z.string().min(2, "Имя должно содержать минимум 2 символа").optional().or(z.literal('')),
    phone: z.string().min(10, "Введите корректный номер телефона"),
    car: z.string().optional(),
    description: z.string().optional(),
    utm: z.object({
        source: z.string().optional(),
        medium: z.string().optional(),
        campaign: z.string().optional(),
        term: z.string().optional(),
        content: z.string().optional(),
    }).optional()
});

export type LeadInput = z.infer<typeof leadSchema>;
