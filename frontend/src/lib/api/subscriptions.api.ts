import { endpoints } from "./endpoints";
import { postResource } from "./helpers";
import type { EmailSubscription, EmailSubscriptionPayload } from "../../types/content";

export function createSubscription(payload: EmailSubscriptionPayload) {
  return postResource<EmailSubscription, EmailSubscriptionPayload>(
    endpoints.subscriptions,
    payload
  );
}
