import { TriggerClient } from "@trigger.dev/sdk";
import { env } from "./env.mjs";

export const client = new TriggerClient({
  id: "ecomasu-qQXj",
  apiKey: env.TRIGGER_API_KEY,
  apiUrl: env.TRIGGER_API_URL,
});
