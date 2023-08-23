import { DiscordLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { type IconProps } from "@radix-ui/react-icons/dist/types";

const navigation = [
  {
    name: "Discord",
    href: "#",
    icon: (props: IconProps) => <DiscordLogoIcon {...props} />,
  },
  {
    name: "GitHub",
    href: "#",
    icon: (props: IconProps) => <GitHubLogoIcon {...props} />,
  },
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-foreground"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-muted-foreground">
            Brought to you by{" "}
            <span className="cursor-pointer text-foreground underline">
              gsemy
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
