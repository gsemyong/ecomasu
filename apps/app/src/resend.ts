import { Resend } from "@trigger.dev/resend";
import { env } from "./env.mjs";

const globalForResend = globalThis as unknown as {
  resend: Resend | undefined;
};

export const resend =
  globalForResend.resend ??
  new Resend({
    id: "resend",
    apiKey: env.RESEND_API_KEY,
  });

if (env.NODE_ENV !== "production") globalForResend.resend = resend;
