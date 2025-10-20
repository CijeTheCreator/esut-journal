import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Libre_Baskerville } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ConvexClientProvider } from "./convex-client-provider"
import "./globals.css"

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "The Enugu State University Journal of Guidance and Counselling",
  description:
    "Department of Guidance and Counselling, ESUT",
  icons: {
    icon: "/esut-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${libreBaskerville.variable}`}>
        <ConvexClientProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </ConvexClientProvider>
        <Analytics />
      </body>
    </html>
  )
}
