import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";
import { useForm } from "react-hook-form";

import { Button } from "../common/Button";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";
import { createContactRequest } from "../../lib/api/contacts.api";
import { normalizeApiError } from "../../lib/api/errors";
import { contactSchema, type ContactFormValues } from "../../lib/validation/contact";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    }
  });
  const mutation = useMutation({
    mutationFn: createContactRequest,
    onSuccess: () => form.reset()
  });
  const apiError = mutation.isError ? normalizeApiError(mutation.error) : null;

  return (
    <form className="grid gap-5" onSubmit={form.handleSubmit((values) => mutation.mutate(values))}>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Атыңыз"
          error={form.formState.errors.name?.message || apiError?.fields.name?.[0]}
          {...form.register("name")}
        />
        <Input
          label="Email"
          type="email"
          error={form.formState.errors.email?.message || apiError?.fields.email?.[0]}
          {...form.register("email")}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="Телефон"
          error={form.formState.errors.phone?.message || apiError?.fields.phone?.[0]}
          {...form.register("phone")}
        />
        <Input
          label="Тема"
          error={form.formState.errors.subject?.message || apiError?.fields.subject?.[0]}
          {...form.register("subject")}
        />
      </div>
      <Textarea
        label="Билдирүү"
        error={form.formState.errors.message?.message || apiError?.fields.message?.[0]}
        {...form.register("message")}
      />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={mutation.isPending}>
          {mutation.isPending ? "Жөнөтүлүүдө" : "Жөнөтүү"}
        </Button>
        {mutation.isSuccess ? (
          <p className="flex items-center gap-2 text-sm font-semibold text-success">
            <CheckCircle aria-hidden className="h-4 w-4" />
            Билдирүү жөнөтүлдү.
          </p>
        ) : null}
      </div>
      {apiError ? <p className="text-sm text-error">{apiError.message}</p> : null}
    </form>
  );
}
