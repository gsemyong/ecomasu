import { Button } from "./ui/button";
import { H3, Small } from "./typography";

const Header = () => {
  return (
    <div className="sticky top-0 z-20 flex w-full items-center justify-between gap-4 border-b bg-background/80 px-6 py-4 backdrop-blur-md">
      <H3>
        ecoma
        <span className="text-primary">su</span>
        <sup>
          <Small className="text-xs">[alpha]</Small>
        </sup>
      </H3>
      <Button variant="ghost">Log in</Button>
    </div>
  );
};

export default Header;
