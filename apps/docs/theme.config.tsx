import { DocsThemeConfig } from "nextra-theme-docs";
import { ShadowIcon } from "@radix-ui/react-icons";

export default {
  logo: (
    <ShadowIcon
      style={{
        color: "hsl(47.9,95.8%,53.1%)",
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
  footer: {
    component: null,
  },
  // ... other theme options
} satisfies DocsThemeConfig;
