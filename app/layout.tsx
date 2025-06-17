import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Clínica de Estética e Nutrologia em Fortaleza | Instituto Luar",
  description: "Instituto Luar, sua clínica de estética avançada no Cambeba, Fortaleza. Oferecemos harmonização facial, nutrologia, endolaser e mais. Agende sua avaliação!",
  generator: 'v0.dev',
  keywords: ["clínica de estética fortaleza", "nutrologia fortaleza", "harmonização facial fortaleza", "endolaser", "bioestimulador de colágeno", "emagrecimento cambeba"],
  authors: [{ name: "Instituto Luar" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}