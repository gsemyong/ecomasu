import { eventTrigger } from "@trigger.dev/sdk";
import { trigger } from "@/trigger";
import { z } from "zod";
import { resend } from "@/resend";
import { NewsletterSubscribeEmail } from "~/emails/newsletter-subscribe";

trigger.defineJob({
  id: "send-newsletter-subscribe-email",
  name: "Send newsletter subscribe email",
  version: "0.1.0",
  trigger: eventTrigger({
    name: "send.email.newsletter.subscribe",
    schema: z.object({
      to: z.union([z.string(), z.array(z.string())]),
      subject: z.string(),
    }),
  }),
  integrations: {
    resend,
  },
  run: async (payload, io, ctx) => {
    await io.resend.sendEmail("send-email", {
      to: payload.to,
      subject: payload.subject,
      react: <NewsletterSubscribeEmail />,
      from: "Ecomasu <onboarding@resend.dev>",
    });
  },
});
