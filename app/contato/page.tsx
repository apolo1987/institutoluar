"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Mail, Instagram, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "Olá! Gostaria de mais informações sobre os tratamentos.", // Mensagem padrão
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Meu nome é ${formData.name}. ${formData.message}`
    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/5585996531655?text=${encodedMessage}`, "_blank")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-6">Fale Conosco</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estamos prontos para cuidar de você. Entre em contato e agende sua consulta com toda a atenção e carinho que você merece.
          </p>
          <div className="w-24 h-1 bg-[#B9A985] mx-auto mt-8"></div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-serif text-gray-800 mb-8">Nossos Canais de Atendimento</h2>

              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-[#FDFBF8] p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#B9A985] p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-gray-800 mb-2">WhatsApp</h3>
                      <p className="text-gray-600 mb-2">(85) 9 9653-1655</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#B9A985] text-[#B9A985] hover:bg-[#B9A985] hover:text-white"
                        onClick={() => window.open("https://wa.me/5585996531655", "_blank")}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Agende sua Avaliação
                      </Button>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg bg-[#FDFBF8] p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#B9A985] p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-gray-800 mb-2">Endereço</h3>
                      <p className="text-gray-600">
                        Av. Dep. Joaquim de Figueiredo Correia, 72
                        <br />
                        Cambeba, Fortaleza - CE
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg bg-[#FDFBF8] p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#B9A985] p-3 rounded-full">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-gray-800 mb-2">E-mail</h3>
                      <p className="text-gray-600">contato@institutoluar.com.br</p>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg bg-[#FDFBF8] p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#B9A985] p-3 rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-gray-800 mb-2">Horário de Funcionamento</h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 12h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="border-0 shadow-lg bg-[#FDFBF8] p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#B9A985] p-3 rounded-full">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-gray-800 mb-2">Redes Sociais</h3>
                      <p className="text-gray-600 mb-2">Acompanhe nossas novidades</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#B9A985] text-[#B9A985] hover:bg-[#B9A985] hover:text-white"
                        onClick={() => window.open("https://www.instagram.com/institutoluar/", "_blank")}
                      >
                        @institutoluar
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif text-gray-800 mb-8">Envie uma Mensagem Direta</h2>

              <Card className="border-0 shadow-lg bg-[#FDFBF8] p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#B9A985] focus:ring-[#B9A985]"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone / WhatsApp
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#B9A985] focus:ring-[#B9A985]"
                      placeholder="(85) 99999-9999"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#B9A985] focus:ring-[#B9A985]"
                      placeholder="Conte-nos como podemos ajudá-lo..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#B9A985] hover:bg-[#A89674] text-white py-3 rounded-full text-lg font-medium"
                  >
                    Enviar Mensagem via WhatsApp
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#FDFBF8]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-gray-800 mb-4">Como Chegar</h2>
            <div className="w-24 h-1 bg-[#B9A985] mx-auto"></div>
          </div>
          <div className="w-full h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.042334812328!2d-38.4913341888981!3d-3.805871796191439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c75b0789d2399b%3A0x63346b0a6e14781b!2sAv.%20Dep.%20Joaquim%20de%20Figueiredo%20Correia%2C%2072%20-%20Cambeba%2C%20Fortaleza%20-%20CE%2C%2060822-150!5e0!3m2!1spt-BR!2sbr!4v1718134542385!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#B9A985]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Pronto para começar sua jornada?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Nossa equipe de especialistas está à sua espera para oferecer uma experiência única e resultados incríveis.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#B9A985] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium"
            onClick={() => window.open("https://wa.me/5585996531655?text=Olá!%20Gostaria%20de%20agendar%20minha%20avaliação.", "_blank")}
          >
            Agende Sua Avaliação
          </Button>
        </div>
      </section>
    </div>
  )
