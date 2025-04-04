"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { ThemeProvider } from "@/components/theme-provider"

export function LayoutContent({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage()
  const isRTL = language === 'ar'

  return (
    <html lang={language} dir={isRTL ? 'rtl' : 'ltr'} suppressHydrationWarning>
      <body>
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
  )
} 