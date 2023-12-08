import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { IBM_Plex_Sans } from "next/font/google";
const IBMPlexSans: NextFont = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});


export const metadata: Metadata = {
  title: {
    default: "Isaias Candido - Desenvolvedor FullStack | Portifólio Pessoal",
    template: "%s | Isaias Candido - Desenvolvedor FullStack | Portifólio",
    absolute: "Isaias Candido - Desenvolvedor FullStack"
  },
  description:
  "Explore o portfólio do habilidoso desenvolvedor Full Stack Isaias Candido. Descubra projetos recentes, habilidades e entre em contato para colaborações!", 
  
  keywords: ["Isaias Candido", "Desenvolvedor FullStack", "Portifólio", "Desenvolvedor Front-End", "Desenvolvedor Back-End", "Projetos", "Desenvolvedor web"],

  robots: {
    follow: true,
    index: true
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/favicon-apple.ico"
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${IBMPlexSans.className} scrollbar-thumb-gradient relative overflow-x-hidden scrollbar-thin scrollbar-track-gray-950`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;