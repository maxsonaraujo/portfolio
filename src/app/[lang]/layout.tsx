import "@/app/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import { getDictionaries } from "@/lib/dictionary";
import { PortfolioHead } from "@/components/atoms/portifolioHead";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children, params }: Readonly<{
  children: React.ReactNode;
  params: { lang: string }
}>) {

  const lang = params.lang;
  const dictionary = getDictionaries(lang)

  return (<>
    {children}
  </>
  )
}
