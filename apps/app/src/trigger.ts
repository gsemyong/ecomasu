import { TriggerClient } from "@trigger.dev/sdk";
import { env } from "./env.mjs";

const globalForTrigger = globalThis as unknown as {
  trigger: TriggerClient | undefined;
};

export const trigger =
  globalForTrigger.trigger ??
  new TriggerClient({
    id: "ecomasu-qQXj",
    apiKey: env.TRIGGER_API_KEY,
    apiUrl: env.TRIGGER_API_URL,
  });

if (env.NODE_ENV !== "production") globalForTrigger.trigger = trigger;
