import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { LayoutContent } from "@/components/layout-content"

const inter = Inter({ subsets: ["latin"] })

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
    <LanguageProvider>
      <LayoutContent>
        <div className={inter.className}>
          {children}
        </div>
      </LayoutContent>
    </LanguageProvider>
  )
}

