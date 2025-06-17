"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Sua melhor versão, revelada com exclusividade
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Tecnologia, arte e medicina integradas para resultados que transformam
          </p>
          <Link href="/tratamentos">
            <Button
              size="lg"
              className="bg-[#B9A985] hover:bg-[#A89674] text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              Descubra seus tratamentos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Tratamentos Preview */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Nossos Tratamentos Assinados</h2>
            <div className="w-24 h-1 bg-[#B9A985] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Contorno Corporal"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Contorno Corporal</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Alcance a forma desejada com tecnologia avançada.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Harmonização Facial"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Harmonização Facial</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Realce sua beleza natural com procedimentos personalizados.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Design do Sorriso"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Design do Sorriso</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Conquiste um sorriso perfeito e confiante.</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Vitalidade"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Vitalidade & Performance</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Renove suas energias e otimize sua saúde.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link href="/tratamentos">
              <Button className="bg-[#B9A985] hover:bg-[#A89674] text-white px-8 py-3 rounded-full">
                Ver Todos os Tratamentos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Resultados que Inspiram Confiança</h2>
            <div className="w-24 h-1 bg-[#B9A985] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg bg-[#FDFBF8] p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B9A985] text-[#B9A985]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Atendimento impecável e resultados que superaram minhas expectativas. O Instituto Luar é sinônimo de
                excelência."
              </p>
              <p className="text-[#B9A985] font-medium">- R.M.</p>
            </Card>

            <Card className="border-0 shadow-lg bg-[#FDFBF8] p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B9A985] text-[#B9A985]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Profissionais excepcionais e ambiente luxuoso. Cada detalhe pensado para proporcionar a melhor
                experiência."
              </p>
              <p className="text-[#B9A985] font-medium">- C.S.</p>
            </Card>

            <Card className="border-0 shadow-lg bg-[#FDFBF8] p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B9A985] text-[#B9A985]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Tecnologia de ponta e cuidado personalizado. Recomendo para quem busca o melhor em estética."
              </p>
              <p className="text-[#B9A985] font-medium">- L.F.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#B9A985]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Pronto para iniciar sua jornada?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            O primeiro passo para a sua transformação é uma avaliação detalhada. Nossa equipe está pronta para criar um
            plano de tratamento personalizado e exclusivo para você.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#B9A985] hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-medium"
            onClick={() => window.open("https://wa.me/5585996531655", "_blank")}
          >
            QUERO AGENDAR MINHA AVALIAÇÃO EXCLUSIVA
          </Button>
        </div>
      </section>
    </div>
  )
}
