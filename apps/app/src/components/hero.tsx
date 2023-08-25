import { cn } from "@/lib/utils";
import { H1, Large, P } from "./typography";
import LinearGradient from "./magicui/linear-gradient";
import DotPattern from "./magicui/dot-pattern";
import { Button } from "./ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-lg px-6 py-32 text-center sm:py-48 lg:py-56">
        <H1>Typesafe headless commerce</H1>
        <P className="opacity-90">
          Build Shopify storefronts faster than ever with the set of powerfull
          typesafe primitives
        </P>
        <div className="mt-8 flex justify-center gap-4">
          <Button className="p-6">
            <Large>Get started</Large>
          </Button>
          <Button className="p-6" variant="outline">
            <Large>Read docs</Large>
            <ArrowTopRightIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
      <LinearGradient
        to={"hsla(47.9,95.8%,53.1%,0.005)"}
        from="rgba(0,0,0,0.0)"
        direction="top right"
      />
    </div>
  );
};

export default Hero;
