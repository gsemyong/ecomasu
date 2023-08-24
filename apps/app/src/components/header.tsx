import { Button } from "./ui/button";
import { H3, Small } from "./typography";
import { ShadowIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <div className="sticky top-0 z-20 flex w-full items-center gap-4 border-b bg-background/80 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center justify-center gap-2">
        <ShadowIcon className="inline h-6 w-6" />
        <H3>
          e<span className="hidden sm:inline">coma</span>
          <span className="text-primary">
            s<span className="hidden sm:inline">u</span>
          </span>
          <sup>
            <Small className="text-xs">[ALPHA]</Small>
          </sup>
        </H3>
      </div>
      <div className="grow">
        <Button variant="link">Docs</Button>
      </div>
      <div>
        <Button variant="ghost">Log in</Button>
      </div>
    </div>
  );
};

export default Header;
