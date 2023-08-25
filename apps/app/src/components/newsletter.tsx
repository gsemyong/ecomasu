import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { api } from "@/utils/api";
import { useToast } from "./ui/use-toast";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const subscribeMutation = api.landing.subscribe.useMutation({
    onSuccess: () => {
      setEmail("");
      toast({
        title: "Subscribed!",
        description: "You will be notified when we launch.",
      });
    },
    onError: () => {
      setEmail("");
      toast({
        title: "You are already subscribed!",
        description: "You will be notified when we launch.",
      });
    },
  });

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden border border-border px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Get notified when we’re launching.
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
            Also don’t forget to join our discord server! There you can talk
            with us directly about anything you want.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              subscribeMutation.mutate({ email });
            }}
            className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row"
          >
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <Input
              id="email-address"
              name="email"
              type="email"
              autoComplete="off"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 min-w-0 px-4"
              placeholder="Enter your email"
            />

            <Button
              disabled={subscribeMutation.isLoading}
              className="text-md h-12 shrink-0"
            >
              {subscribeMutation.isLoading && (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              )}
              Notify me
            </Button>
          </form>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="hsl(47.9,95.8%,53.1%)" />
                <stop offset={1} stopColor="black" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
