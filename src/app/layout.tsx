import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { LayoutContent } from "@/components/layout-content"
import { ErrorBoundary } from "@/components/error-boundary"

export const metadata: Metadata = {
  title: "Madfoatech",
  description: "POS Solution for your business",
  icons: {
    icon: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/images/logo.png',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ErrorBoundary>
          <LanguageProvider>
            <LayoutContent>
              {children}
            </LayoutContent>
          </LanguageProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}

