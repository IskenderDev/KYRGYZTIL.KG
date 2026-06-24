import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { createSubscription } from "../../lib/api/subscriptions.api";
import { normalizeApiError } from "../../lib/api/errors";
import { subscriptionSchema, type SubscriptionFormValues } from "../../lib/validation/subscription";

export function NewsletterForm() {
  const form = useForm<SubscriptionFormValues>({
    resolver: zodResolver(subscriptionSchema),
    defaultValues: { email: "" }
  });
  const mutation = useMutation({
    mutationFn: createSubscription,
    onSuccess: () => form.reset()
  });
  const apiError = mutation.isError ? normalizeApiError(mutation.error) : null;

  return (
    <form
      className="rounded-lg border border-border bg-white p-5"
      onSubmit={form.handleSubmit((values) => mutation.mutate(values))}
    >
      <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
        <Input
          label="Email"
          placeholder="you@example.com"
          type="email"
          error={form.formState.errors.email?.message || apiError?.fields.email?.[0]}
          {...form.register("email")}
        />
        <Button className="sm:mt-7" type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Жөнөтүлүүдө" : "Жазылуу"}
        </Button>
      </div>
      <p className="mt-3 text-sm leading-6 text-ink-muted">
        Жаңы материалдар жарыяланганда кабар алып туруңуз.
      </p>
      {mutation.isSuccess ? (
        <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-success">
          <CheckCircle aria-hidden className="h-4 w-4" />
          Жазылуу кабыл алынды.
        </p>
      ) : null}
      {apiError ? <p className="mt-3 text-sm text-error">{apiError.message}</p> : null}
    </form>
  );
}
