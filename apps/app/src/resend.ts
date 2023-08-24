import { Resend } from "@trigger.dev/resend";
import { env } from "./env.mjs";

export const resend = new Resend({
  id: "resend",
  apiKey: env.RESEND_API_KEY,
});
