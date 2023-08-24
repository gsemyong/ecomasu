import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { redis } from "@/redis";
import { trigger } from "@/trigger";
import { TRPCClientError } from "@trpc/client";

export const landingRouter = createTRPCRouter({
  subscribe: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .mutation(async ({ input }) => {
      const { email } = input;

      const added = await redis.sadd("newsletter", email);

      if (added === 0) {
        throw new TRPCClientError("Already subscribed");
      }

      await trigger.sendEvent({
        name: "send.email.newsletter.subscribe",
        payload: {
          to: email,
          subject: "Thanks for subscribing!",
        },
      });

      return {
        message: `Thanks for subscribing ${email}!`,
      };
    }),
});
