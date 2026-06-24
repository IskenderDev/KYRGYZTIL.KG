import { z } from "zod";

export const subscriptionSchema = z.object({
  email: z.string().trim().email("Email дарегин туура жазыңыз.")
});

export type SubscriptionFormValues = z.infer<typeof subscriptionSchema>;
