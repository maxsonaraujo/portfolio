import "@/app/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import { getDictionaries } from "@/lib/dictionary";
import { PortfolioHead } from "@/components/atoms/portifolioHead";
export default function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {


  return (<>
    {children}
  </>
  )
}
