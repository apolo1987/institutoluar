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
            backgroundImage: "url('/hero-background.jpg')", // SUGESTÃO: Usar uma imagem real de alta qualidade
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Transforme sua Beleza e Bem-Estar em Fortaleza
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Excelência em estética avançada e nutrologia, com tratamentos personalizados para realçar sua verdadeira essência.
          </p>
          <Link href="/tratamentos">
            <Button
              size="lg"
              className="bg-[#B9A985] hover:bg-[#A89674] text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              Conheça Nossos Tratamentos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Tratamentos Preview */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Tratamentos Exclusivos Para Você</h2>
            <div className="w-24 h-1 bg-[#B9A985] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/tratamento-corporal.jpg" // SUGESTÃO: Imagem real do tratamento
                  alt="Contorno Corporal e Emagrecimento em Fortaleza"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Contorno Corporal</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Defina suas curvas e elimine a gordura localizada com nossas tecnologias avançadas.</p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/harmonizacao-facial.jpg" // SUGESTÃO: Imagem real do tratamento
                  alt="Harmonização Facial em Fortaleza"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Harmonização Facial</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Realce sua beleza natural, com resultados elegantes e personalizados para homens e mulheres.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/design-sorriso.jpg" // SUGESTÃO: Imagem real do tratamento
                  alt="Design do Sorriso com Lentes de Porcelana"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Design do Sorriso</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Conquiste um sorriso alinhado, branco e confiante com nossas lentes de contato dentais.</p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/vitalidade-performance.jpg" // SUGESTÃO: Imagem real do tratamento
                  alt="Tratamento para Vitalidade e Performance"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Vitalidade & Performance</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Otimize sua saúde e renove suas energias com acompanhamento nutrológico e terapias injetáveis.</p>
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
            {/* Depoimento 1 */}
            <Card className="border-0 shadow-lg bg-[#FDFBF8] p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B9A985] text-[#B9A985]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "O atendimento no Instituto Luar é impecável, desde a recepção até o procedimento. A Dra. Luciana tem mãos de fada, meu resultado ficou incrível e super natural. Superou todas as minhas expectativas!"
              </p>
              <p className="text-[#B9A985] font-medium">- Maria Clara S.</p>
            </Card>

            {/* Depoimento 2 */}
            <Card className="border-0 shadow-lg bg-[#FDFBF8] p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B9A985] text-[#B9A985]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Profissionais extremamente qualificados e um ambiente luxuoso. Encontrei no Instituto Luar a segurança que precisava para realizar minha harmonização. Recomendo de olhos fechados!"
              </p>
              <p className="text-[#B9A985] font-medium">- João P.</p>
            </Card>

            {/* Depoimento 3 */}
            <Card className="border-0 shadow-lg bg-[#FDFBF8] p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B9A985] text-[#B9A985]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Tecnologia de ponta e um cuidado genuinamente personalizado. A equipe toda é maravilhosa e os resultados falam por si. Minha autoestima foi renovada. Gratidão!"
              </p>
              <p className="text-[#B9A985] font-medium">- Fernanda L.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#B9A985]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Pronta para Revelar sua Melhor Versão?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            O primeiro passo para a sua transformação é uma avaliação detalhada. Nossa equipe de especialistas está pronta para criar um plano de tratamento exclusivo para você.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#B9A985] hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-medium animate-pulse"
            onClick={() => window.open("https://wa.me/5585996531655?text=Olá!%20Gostaria%20de%20agendar%20minha%20avaliação%20exclusiva.", "_blank")}
          >
            QUERO AGENDAR MINHA AVALIAÇÃO EXCLUSIVA
          </Button>
        </div>
      </section>
    </div>
  )
}"use client"

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
            backgroundImage: "url('/hero-background.jpg')", // SUGESTÃO: Usar uma imagem real de alta qualidade
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            Transforme sua Beleza e Bem-Estar em Fortaleza
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Excelência em estética avançada e nutrologia, com tratamentos personalizados para realçar sua verdadeira essência.
          </p>
          <Link href="/tratamentos">
            <Button
              size="lg"
              className="bg-[#B9A985] hover:bg-[#A89674] text-white px-8 py-4 rounded-full text-lg font-medium"
            >
              Conheça Nossos Tratamentos
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Tratamentos Preview */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Tratamentos Exclusivos Para Você</h2>
            <div className="w-24 h-1 bg-[#B9A985] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/tratamento-corporal.jpg" // SUGESTÃO: Imagem real do tratamento
                  alt="Contorno Corporal e Emagrecimento em Fortaleza"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Contorno Corporal</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Defina suas curvas e elimine a gordura localizada com nossas tecnologias avançadas.</p>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/harmonizacao-facial.jpg" // SUGESTÃO: Imagem real do tratamento
                  alt="Harmonização Facial em Fortaleza"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Harmonização Facial</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Realce sua beleza natural, com resultados elegantes e personalizados para homens e mulheres.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/design-sorriso.jpg" // SUGESTÃO: Imagem real do tratamento
                  alt="Design do Sorriso com Lentes de Porcelana"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Design do Sorriso</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Conquiste um sorriso alinhado, branco e confiante com nossas lentes de contato dentais.</p>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <div className="relative overflow-hidden">
                <Image
                  src="/vitalidade-performance.jpg" // SUGESTÃO: Imagem real do tratamento
                  alt="Tratamento para Vitalidade e Performance"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif text-gray-800 mb-3">Vitalidade & Performance</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">Otimize sua saúde e renove suas energias com acompanhamento nutrológico e terapias injetáveis.</p>
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
            {/* Depoimento 1 */}
            <Card className="border-0 shadow-lg bg-[#FDFBF8] p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B9A985] text-[#B9A985]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "O atendimento no Instituto Luar é impecável, desde a recepção até o procedimento. A Dra. Luciana tem mãos de fada, meu resultado ficou incrível e super natural. Superou todas as minhas expectativas!"
              </p>
              <p className="text-[#B9A985] font-medium">- Maria Clara S.</p>
            </Card>

            {/* Depoimento 2 */}
            <Card className="border-0 shadow-lg bg-[#FDFBF8] p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B9A985] text-[#B9A985]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Profissionais extremamente qualificados e um ambiente luxuoso. Encontrei no Instituto Luar a segurança que precisava para realizar minha harmonização. Recomendo de olhos fechados!"
              </p>
              <p className="text-[#B9A985] font-medium">- João P.</p>
            </Card>

            {/* Depoimento 3 */}
            <Card className="border-0 shadow-lg bg-[#FDFBF8] p-8">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#B9A985] text-[#B9A985]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "Tecnologia de ponta e um cuidado genuinamente personalizado. A equipe toda é maravilhosa e os resultados falam por si. Minha autoestima foi renovada. Gratidão!"
              </p>
              <p className="text-[#B9A985] font-medium">- Fernanda L.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-[#B9A985]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Pronta para Revelar sua Melhor Versão?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            O primeiro passo para a sua transformação é uma avaliação detalhada. Nossa equipe de especialistas está pronta para criar um plano de tratamento exclusivo para você.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#B9A985] hover:bg-gray-100 px-12 py-4 rounded-full text-lg font-medium animate-pulse"
            onClick={() => window.open("https://wa.me/5585996531655?text=Olá!%20Gostaria%20de%20agendar%20minha%20avaliação%20exclusiva.", "_blank")}
          >
            QUERO AGENDAR MINHA AVALIAÇÃO EXCLUSIVA
          </Button>
        </div>
      </section>
    </div>
  )
}