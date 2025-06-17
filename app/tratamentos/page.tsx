"use client"

import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

export default function TratamentosPage() {
  const tratamentos = [
    {
      title: "Contorno Corporal & Emagrecimento",
      description: "Alcance a forma desejada com a associação de Nutrologia, Endolaser e Harmonização Corporal.",
      details: [
        "Nutrologia personalizada",
        "Endolaser para gordura localizada",
        "Harmonização corporal",
        "Acompanhamento nutricional",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Harmonização Facial",
      description: "Realce sua beleza natural com procedimentos masculinos e femininos que equilibram e rejuvenescem.",
      details: ["Preenchimento facial", "Toxina botulínica", "Bioestimuladores", "Fios de sustentação"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Design do Sorriso",
      description: "Conquiste um sorriso perfeito e confiante com nossas lentes dentais de porcelana.",
      details: ["Lentes de porcelana", "Clareamento dental", "Restaurações estéticas", "Planejamento digital"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Vitalidade e Performance",
      description: "Renove suas energias e otimize sua saúde com vitaminas injetáveis e terapias de bem-estar.",
      details: ["Vitaminas injetáveis", "Terapia hormonal", "Suplementação personalizada", "Check-up completo"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Fisioterapia Dermatofuncional",
      description: "Tratamentos especializados para recuperação e melhoria da função da pele e músculos.",
      details: ["Drenagem linfática", "Massoterapia", "Radiofrequência", "Ultrassom estético"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Medicina Integrativa",
      description: "Abordagem holística combinando medicina tradicional e terapias complementares.",
      details: [
        "Consulta médica completa",
        "Exames laboratoriais",
        "Prescrição personalizada",
        "Acompanhamento contínuo",
      ],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-6">Nossos Tratamentos</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubra nossa gama completa de tratamentos estéticos e de saúde, desenvolvidos com tecnologia de ponta e
            cuidado personalizado para cada paciente.
          </p>
          <div className="w-24 h-1 bg-[#B9A985] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Tratamentos Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {tratamentos.map((tratamento, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                  <Image
                    src={tratamento.image || "/placeholder.svg"}
                    alt={tratamento.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-4">{tratamento.title}</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{tratamento.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tratamento.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-700">
                        <ChevronRight className="h-5 w-5 text-[#B9A985] mr-3 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="bg-[#B9A985] hover:bg-[#A89674] text-white px-8 py-3 rounded-full"
                    onClick={() => window.open("https://wa.me/5585996531655", "_blank")}
                  >
                    Agendar Consulta
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#B9A985]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Qual tratamento é ideal para você?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agende uma avaliação gratuita e descubra o plano de tratamento personalizado para seus objetivos.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#B9A985] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium"
            onClick={() => window.open("https://wa.me/5585996531655", "_blank")}
          >
            Agendar Avaliação Gratuita
          </Button>
        </div>
      </section>
    </div>
  )
}
