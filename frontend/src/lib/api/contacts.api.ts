import { endpoints } from "./endpoints";
import { postResource } from "./helpers";
import type { ContactRequest, ContactRequestPayload } from "../../types/content";

export function createContactRequest(payload: ContactRequestPayload) {
  return postResource<ContactRequest, ContactRequestPayload>(endpoints.contacts, payload);
}
