import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Image
              src="/images/LOGO.png"
              alt="JM SEMEDO"
              width={160}
              height={70}
              
            />
            <p className="text-background/70 text-sm leading-relaxed">
              Transformamos os seus sonhos em realidade. Com anos de experiência no setor da construção civil, 
              garantimos qualidade e profissionalismo em cada projeto.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Navegação</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Início" },
                { href: "/servicos", label: "Serviços" },
                { href: "/portfolio", label: "Projetos" },
                { href: "/sobre", label: "Sobre Nós" },
                { href: "/contactos", label: "Contactos" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Serviços</h4>
            <ul className="space-y-3">
              {[
                "Construção de Obras",
                "Reformas e Reabilitação",
                "Projetos e Planeamento",
                "Acabamentos",
              ].map((service) => (
                <li key={service}>
                  <Link 
                    href="/servicos"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-background">Contactos</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-background/70 text-sm">
                  Rua Principal, n.º 123<br />
                  Cidade da Praia, Cabo Verde
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a href="tel:+238000000000" className="text-background/70 hover:text-primary transition-colors text-sm">
                  +238 000 00 00
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a href="mailto:info@jmsemedo.cv" className="text-background/70 hover:text-primary transition-colors text-sm">
                  info@jmsemedo.cv
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} JM SEMEDO. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-background/50 hover:text-primary transition-colors text-sm">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-background/50 hover:text-primary transition-colors text-sm">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
