"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Tratamentos", href: "/tratamentos" },
    { name: "Nossa Equipe", href: "/equipe" },
    { name: "A Clínica", href: "/clinica" },
    { name: "Contato", href: "/contato" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo-instituto-luar.png" alt="Instituto Luar" width={180} height={60} className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`font-medium transition-colors ${
                pathname === item.href ? "text-[#B9A985]" : "text-gray-800 hover:text-[#B9A985]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <Button
          className="hidden md:block bg-[#B9A985] hover:bg-[#A89674] text-white px-6 py-2 rounded-full font-medium"
          onClick={() => window.open("https://wa.me/5585996531655", "_blank")}
        >
          Agendar Avaliação
        </Button>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block font-medium transition-colors ${
                    pathname === item.href ? "text-[#B9A985]" : "text-gray-800 hover:text-[#B9A985]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="w-full bg-[#B9A985] hover:bg-[#A89674] text-white px-6 py-2 rounded-full font-medium"
                onClick={() => {
                  window.open("https://wa.me/5585996531655", "_blank")
                  setIsMenuOpen(false)
                }}
              >
                Agendar Avaliação
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
