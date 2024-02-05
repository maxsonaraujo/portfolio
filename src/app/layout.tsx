import "@/app/globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider";
import Head from "next/head";
import { PortfolioHead } from "@/components/atoms/portifolioHead";
import { getDictionaries } from "@/lib/dictionary";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children, params }: Readonly<{
  children: React.ReactNode;
  params: { lang: string }
}>) {

  const lang = "en-US";
  const dictionary = getDictionaries(lang)

  return (
    <>

      <html lang={lang} suppressHydrationWarning>
        <PortfolioHead dictionary={dictionary} />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
