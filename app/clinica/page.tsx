"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, Award, Heart, Star } from "lucide-react"
import Image from "next/image"

export default function ClinicaPage() {
  const diferenciais = [
    {
      icon: Shield,
      title: "Segurança e Qualidade",
      description:
        "Protocolos rigorosos de segurança e equipamentos de última geração para garantir os melhores resultados.",
    },
    {
      icon: Award,
      title: "Excelência Profissional",
      description: "Equipe altamente qualificada com certificações nacionais e internacionais em suas especialidades.",
    },
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Atendimento individualizado com planos de tratamento exclusivos para cada paciente.",
    },
    {
      icon: Star,
      title: "Resultados Comprovados",
      description: "Mais de 1000 pacientes satisfeitos com resultados naturais e duradouros.",
    },
  ]

  const ambientes = [
    {
      title: "Recepção Exclusiva",
      description: "Ambiente acolhedor e sofisticado para receber nossos pacientes com todo conforto.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Salas de Procedimento",
      description: "Espaços modernos e equipados com tecnologia de ponta para todos os tratamentos.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Área de Relaxamento",
      description: "Ambiente tranquilo para recuperação e bem-estar após os procedimentos.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Consultórios Médicos",
      description: "Espaços privados e confortáveis para consultas e avaliações personalizadas.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-6">A Clínica</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça o Instituto Luar, um espaço criado especialmente para proporcionar a melhor experiência em estética
            avançada e cuidados com a saúde.
          </p>
          <div className="w-24 h-1 bg-[#B9A985] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif text-gray-800 mb-6">Nossa História</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                O Instituto Luar nasceu da visão de criar um centro médico integrado que combinasse excelência técnica,
                tecnologia de ponta e cuidado humanizado. Localizado no coração de Fortaleza, nossa clínica foi
                projetada para oferecer uma experiência única em estética e saúde.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Com uma equipe multidisciplinar de especialistas, oferecemos tratamentos personalizados que respeitam a
                individualidade de cada paciente, sempre priorizando resultados naturais e a satisfação completa.
              </p>
              <Button
                className="bg-[#B9A985] hover:bg-[#A89674] text-white px-8 py-3 rounded-full"
                onClick={() => window.open("https://wa.me/5585996531655", "_blank")}
              >
                Conheça Nossa Clínica
              </Button>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Instituto Luar - Fachada"
                width={600}
                height={500}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Nossos Diferenciais</h2>
            <div className="w-24 h-1 bg-[#B9A985] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {diferenciais.map((diferencial, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg bg-white text-center p-8 hover:shadow-xl transition-shadow"
              >
                <div className="bg-[#B9A985] p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <diferencial.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-serif text-gray-800 mb-4">{diferencial.title}</h3>
                <p className="text-gray-600 leading-relaxed">{diferencial.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ambientes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Nossos Ambientes</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada espaço foi cuidadosamente projetado para proporcionar conforto, privacidade e bem-estar.
            </p>
            <div className="w-24 h-1 bg-[#B9A985] mx-auto mt-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {ambientes.map((ambiente, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <Image
                    src={ambiente.image || "/placeholder.svg"}
                    alt={ambiente.title}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-serif mb-2">{ambiente.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{ambiente.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">Nossa Localização</h2>
            <div className="w-24 h-1 bg-[#B9A985] mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif text-gray-800 mb-6">Fácil Acesso no Coração de Fortaleza</h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Estrategicamente localizado na Av. Dep. Joaquim de Figueiredo Correia, no bairro Cambeba, o Instituto
                Luar oferece fácil acesso e estacionamento para nossos pacientes.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#B9A985] rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Endereço:</p>
                    <p className="text-gray-600">
                      Av. Dep. Joaquim de Figueiredo Correia, 72 - Cambeba, Fortaleza - CE
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#B9A985] rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Estacionamento:</p>
                    <p className="text-gray-600">Vagas gratuitas para pacientes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#B9A985] rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-800">Transporte Público:</p>
                    <p className="text-gray-600">Próximo a linhas de ônibus principais</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Mapa da localização</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#B9A985]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Venha nos conhecer!</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agende uma visita e conheça pessoalmente nossos ambientes e nossa equipe especializada.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#B9A985] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium"
            onClick={() => window.open("https://wa.me/5585996531655", "_blank")}
          >
            Agendar Visita
          </Button>
        </div>
      </section>
    </div>
  )
}
