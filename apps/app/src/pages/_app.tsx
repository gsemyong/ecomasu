import { type AppType } from "next/app";
import { api } from "@/utils/api";
import "@/styles/globals.css";

import { Space_Grotesk } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${spaceGrotesk.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
};

export default api.withTRPC(MyApp);
