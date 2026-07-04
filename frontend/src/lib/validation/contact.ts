import { z } from "zod";

const PHONE_REGEX = /^\+996\d{9}$/;
const NAME_REGEX = /^[а-яА-ЯёЁҢңӨөҮүa-zA-Z'-]+(\s+[а-яА-ЯёЁҢңӨөҮүa-zA-Z'-]+)*$/;
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Атыңызды жазыңыз.")
    .regex(NAME_REGEX, "Атыңызды жазыңыз."),
  email: z.string().trim().email("Email дарегин туура жазыңыз."),
  phone: z
    .string()
    .trim()
    .refine((value) => PHONE_REGEX.test(value), {
      message: "Телефон номерин +996XXXXXXXXX форматында жазыңыз.",
    }),
  subject: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || value.length >= 3, {
      message: "Тема кеминде 3 белгиден турушу керек.",
    }),
  message: z
    .string()
    .trim()
    .min(10, "Билдирүү кеминде 10 белгиден турушу керек."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
