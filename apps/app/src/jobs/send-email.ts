import { eventTrigger } from "@trigger.dev/sdk";
import { trigger } from "@/trigger";
import { z } from "zod";
import { resend } from "@/resend";

trigger.defineJob({
  id: "send-resend-email",
  name: "Send Resend Email",
  version: "0.1.0",
  trigger: eventTrigger({
    name: "send.email",
    schema: z.object({
      to: z.union([z.string(), z.array(z.string())]),
      subject: z.string(),
      text: z.string(),
    }),
  }),
  integrations: {
    resend,
  },
  run: async (payload, io, ctx) => {
    await io.resend.sendEmail("send-email", {
      to: payload.to,
      subject: payload.subject,
      text: payload.text,
      from: "Acme <onboarding@resend.dev>",
    });
  },
});
