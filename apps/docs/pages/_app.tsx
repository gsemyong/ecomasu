import type { AppProps } from "next/app";

import { Space_Grotesk } from "next/font/google";

import "./styles/globals.css";

// If loading a variable font, you don't need to specify the font weight
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
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
}
