"use client"
import { Button } from "@/components/ui/button"
import { GraduationCap, Award, Users } from "lucide-react"
import Image from "next/image"

export default function EquipePage() {
  const equipe = [
    {
      name: "Dra. Luciana Araujo",
      specialty: "Nutrologia e Harmonização Masculina",
      description:
        "Especialista em nutrologia e harmonização facial masculina, com foco em resultados naturais e elegantes. Formada em Medicina pela UFC, com especialização em Nutrologia e Medicina Estética.",
      qualifications: [
        "Medicina - UFC",
        "Especialização em Nutrologia",
        "Pós-graduação em Medicina Estética",
        "Membro da ABRAN",
      ],
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Dra. Maira Brandão",
      specialty: "Emagrecimento e Harmonização Feminina",
      description:
        "Especialista em emagrecimento e harmonização facial feminina, dedicada à beleza natural e sofisticada. Médica com vasta experiência em procedimentos estéticos minimamente invasivos.",
      qualifications: [
        "Medicina - UNIFOR",
        "Especialização em Dermatologia",
        "Pós-graduação em Medicina Estética",
        "Certificação em Harmonização Facial",
      ],
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Dr. Arthur",
      specialty: "Medicina Integrativa e Performance",
      description:
        "Especialista em medicina integrativa com foco em performance e longevidade. Combina medicina tradicional com abordagens inovadoras para otimização da saúde e bem-estar.",
      qualifications: [
        "Medicina - UECE",
        "Especialização em Medicina do Esporte",
        "Pós-graduação em Medicina Integrativa",
        "Certificação em Terapia Hormonal",
      ],
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Alessandra",
      specialty: "Fisioterapia Dermatofuncional e Massoterapia",
      description:
        "Especialista em fisioterapia dermatofuncional e massoterapia, focada no bem-estar e recuperação. Profissional dedicada aos cuidados corporais e tratamentos de reabilitação estética.",
      qualifications: [
        "Fisioterapia - UNIFOR",
        "Especialização em Dermatofuncional",
        "Certificação em Massoterapia",
        "Curso de Drenagem Linfática",
      ],
      image: "/placeholder.svg?height=400&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-6">Nossa Equipe</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conheça os especialistas dedicados a realçar sua beleza e cuidar da sua saúde com excelência, tecnologia e
            cuidado personalizado.
          </p>
          <div className="w-24 h-1 bg-[#B9A985] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-[#B9A985] p-4 rounded-full mb-4">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif text-gray-800 mb-2">15+</h3>
              <p className="text-gray-600">Anos de Experiência</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#B9A985] p-4 rounded-full mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Certificações</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-[#B9A985] p-4 rounded-full mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl font-serif text-gray-800 mb-2">1000+</h3>
              <p className="text-gray-600">Pacientes Atendidos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {equipe.map((member, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
              >
                <div className={`text-center ${index % 2 === 1 ? "md:col-start-2" : ""}`}>
                  <div className="relative inline-block">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="w-80 h-80 object-cover rounded-full shadow-lg mx-auto"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#B9A985]/20 to-transparent"></div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                  <h2 className="text-3xl md:text-4xl font-serif text-gray-800 mb-2">{member.name}</h2>
                  <p className="text-[#B9A985] font-medium text-xl mb-6">{member.specialty}</p>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{member.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-serif text-gray-800 mb-4">Qualificações</h3>
                    <ul className="space-y-2">
                      {member.qualifications.map((qualification, qualIndex) => (
                        <li key={qualIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-[#B9A985] rounded-full mr-3"></div>
                          {qualification}
                        </li>
                      ))}
                    </ul>
                  </div>

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
          <h2 className="text-4xl font-serif text-white mb-6">Pronto para conhecer nossa equipe?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agende uma consulta e descubra como nossos especialistas podem ajudar você a alcançar seus objetivos.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#B9A985] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium"
            onClick={() => window.open("https://wa.me/5585996531655", "_blank")}
          >
            Agendar Consulta
          </Button>
        </div>
      </section>
    </div>
  )
}
