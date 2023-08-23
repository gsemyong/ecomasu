import { MagicCard, MagicContainer } from "./magicui/magic-card";
import { SiTypescript } from "@icons-pack/react-simple-icons";

import {
  BoltIcon,
  MagnifyingGlassIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Fully typesafe",
    description:
      "All of our packages are fully typed. Experience frictionless development.",
    icon: SiTypescript,
  },
  {
    name: "Extremely fast",
    description:
      "All of the data is coming from in-memory stores and is agressively cached for maximum performance.",
    icon: BoltIcon,
  },
  {
    name: "Search is the key",
    description:
      "We are shipping primitives for building search and autocomplete from day zero.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Fully open source",
    description: "All of our code is open source and available on GitHub.",
    icon: CodeBracketIcon,
  },
];

const Features = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Develop faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to develop complex features with confidence
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Developing custom Shopify storefronts is hard. Our goal is to change
            that once and for all.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <MagicContainer className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 lg:gap-10">
            {features.map((feature) => (
              <MagicCard
                key={feature.name}
                borderWidth={3}
                spotlightColor="hsla(47.9,95.8%,53.1%,0.1)"
                size={800}
                className="relative flex w-full max-w-lg cursor-pointer items-start gap-6 overflow-hidden py-6 pl-6 pr-8 shadow-2xl"
              >
                <div className="z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-base font-semibold leading-7">
                  <feature.icon
                    className="h-6 w-6 text-primary-foreground"
                    aria-hidden="true"
                  />
                </div>
                <div className="z-10">
                  <div className="text-base font-semibold leading-7">
                    {feature.name}
                  </div>
                  <dd className="mt-2 text-base leading-7 text-muted-foreground">
                    {feature.description}
                  </dd>
                </div>
                <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_120%,hsla(47.9,95.8%,53.1%,0.05),rgba(255,255,255,0))]" />
              </MagicCard>
            ))}
          </MagicContainer>
        </div>
      </div>
    </div>
  );
};

export default Features;
