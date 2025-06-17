import { Phone, MapPin, Mail, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <Image
              src="/logo-instituto-luar.png"
              alt="Instituto Luar"
              width={200}
              height={80}
              className="h-16 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 leading-relaxed">
              Centro Médico Integrado dedicado à excelência em estética avançada e saúde.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#B9A985] mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Av. Dep. Joaquim de Figueiredo Correia, 72
                  <br />
                  Cambeba, Fortaleza - CE
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#B9A985]" />
                <Link
                  href="https://wa.me/5585996531655"
                  className="text-gray-300 hover:text-[#B9A985] transition-colors"
                >
                  (85) 9 9653-1655
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#B9A985]" />
                <Link
                  href="mailto:contato@institutoluar.com.br"
                  className="text-gray-300 hover:text-[#B9A985] transition-colors"
                >
                  contato@institutoluar.com.br
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6">Redes Sociais</h3>
            <div className="flex space-x-4">
              <Link href="#" className="bg-[#B9A985] p-3 rounded-full hover:bg-[#A89674] transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Instituto Luar - Centro Médico Integrado. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
