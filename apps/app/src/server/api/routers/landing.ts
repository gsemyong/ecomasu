import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { redis } from "@/redis";
import { trigger } from "@/trigger";

export const landingRouter = createTRPCRouter({
  subscribe: publicProcedure
    .input(z.object({ email: z.string().email() }))
    .query(async ({ input }) => {
      const { email } = input;

      const added = await redis.sadd("newsletter", email);

      if (added === 0) {
        return {
          message: `${email} is already subscribed!`,
        };
      }

      await trigger.sendEvent({
        name: "send.email",
      });

      return {
        message: `Thanks for subscribing ${email}!`,
      };
    }),
});
