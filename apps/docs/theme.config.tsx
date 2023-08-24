import { DocsThemeConfig } from "nextra-theme-docs";
import { DiscordLogoIcon, ShadowIcon } from "@radix-ui/react-icons";

export default {
  logo: (
    <ShadowIcon
      style={{
        width: "2rem",
        height: "2rem",
      }}
    />
  ),
  primaryHue: 47.9,
  nextThemes: {
    defaultTheme: "dark",
  },
  project: {
    link: "https://github.com/shuding/nextra",
  },
  chat: {
    icon: <DiscordLogoIcon width={"24px"} height={"24px"} />,
    link: "https://discord.gg/2UQRJWJ",
  },
  footer: {
    text: "MIT License",
  },
  // ... other theme options
} satisfies DocsThemeConfig;
