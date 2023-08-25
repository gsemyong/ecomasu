import { type DocsThemeConfig } from "nextra-theme-docs";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

export default {
  logo: (
    <>
      <span
        style={{
          fontWeight: "bold",
          letterSpacing: "-0.02em",
          fontSize: "1.8em",
          marginRight: "0.2em",
        }}
      >
        ecoma
        <span
          style={{
            color: "hsl(47.9,95.8%,53.1%)",
          }}
        >
          su
        </span>
        <sub
          style={{
            fontSize: "0.5em",
            marginLeft: "0.2em",
          }}
        >
          [docs]
        </sub>
      </span>
    </>
  ),
  project: {
    link: "https://github.com/gsemyong/ecomasu",
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null as unknown as React.FC,
  },
  footer: {
    text: null,
    component: null,
  },
  chat: {
    icon: <DiscordLogoIcon width={"24px"} height={"24px"} />,
    link: "https://discord.gg/2W3e3UZ",
  },
  primaryHue: 47.9,
} as DocsThemeConfig;
