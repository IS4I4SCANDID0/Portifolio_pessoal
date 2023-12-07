import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { IBM_Plex_Sans, Raleway } from "next/font/google";
import Head from "next/head";
import icon from "../public/icon.svg"
// ! ADICIONAR FAVICON
const IBMPlexSans: NextFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export const metadata: Metadata = {
  title: "Portifólio pessoal",
  description: "Portifólio do desenvolvedor  web FullStack Isaias Candido",
  icons: {
    icon: "/icon.svg",
    // apple: ""
  }
};
//https://example.com/apple-icon.svg
//https://example.com/icon.svg

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <Head>
        <link rel="icon" href={icon} />
      </Head>
      <body className={`${IBMPlexSans.className} relative overflow-x-hidden scrollbar-thin scrollbar-thumb-gradient scrollbar-track-gray-950`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
// ! fazer uma página de errro 404 personalizada