import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Атыңызды жазыңыз."),
  email: z.string().trim().email("Email дарегин туура жазыңыз."),
  phone: z.string().trim().optional(),
  subject: z.string().trim().optional(),
  message: z.string().trim().min(10, "Билдирүү кеминде 10 белгиден турушу керек.")
});

export type ContactFormValues = z.infer<typeof contactSchema>;
