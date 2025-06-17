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
    email: "",
    phone: "",
    message: "",
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
          <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-6">Contato</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco e agende sua consulta. Estamos prontos para cuidar de você com toda a atenção e
            carinho que você merece.
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
              <h2 className="text-3xl font-serif text-gray-800 mb-8">Fale Conosco</h2>

              <div className="space-y-8">
                <Card className="border-0 shadow-lg bg-[#FDFBF8] p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#B9A985] p-3 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif text-gray-800 mb-2">Telefone</h3>
                      <p className="text-gray-600 mb-2">(85) 9 9653-1655</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#B9A985] text-[#B9A985] hover:bg-[#B9A985] hover:text-white"
                        onClick={() => window.open("https://wa.me/5585996531655", "_blank")}
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        WhatsApp
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
                      <p className="text-gray-600 mb-2">Siga-nos no Instagram</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#B9A985] text-[#B9A985] hover:bg-[#B9A985] hover:text-white"
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
              <h2 className="text-3xl font-serif text-gray-800 mb-8">Envie uma Mensagem</h2>

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
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#B9A985] focus:ring-[#B9A985]"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-gray-300 focus:border-[#B9A985] focus:ring-[#B9A985]"
                      placeholder="(85) 9 9999-9999"
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

          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">Mapa interativo da localização</p>
              <p className="text-gray-400">Av. Dep. Joaquim de Figueiredo Correia, 72 - Cambeba</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#B9A985]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-white mb-6">Pronto para começar?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Entre em contato agora mesmo e agende sua avaliação gratuita. Nossa equipe está pronta para atendê-lo.
          </p>
          <Button
            size="lg"
            className="bg-white text-[#B9A985] hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-medium"
            onClick={() => window.open("https://wa.me/5585996531655", "_blank")}
          >
            Agendar Agora
          </Button>
        </div>
      </section>
    </div>
  )
}
