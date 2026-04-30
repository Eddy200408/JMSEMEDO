"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Instagram,
  Linkedin
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Telefone",
    details: ["+238 000 00 00", "+238 000 00 01"],
    action: "tel:+238000000000"
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@jmsemedo.cv", "orcamentos@jmsemedo.cv"],
    action: "mailto:info@jmsemedo.cv"
  },
  {
    icon: MapPin,
    title: "Morada",
    details: ["Rua Principal, n.º 123", "Cidade da Praia, Cabo Verde"],
    action: null
  },
  {
    icon: Clock,
    title: "Horário",
    details: ["Segunda - Sexta: 8h - 18h", "Sábado: 8h - 12h"],
    action: null
  }
]

const services = [
  "Construção de Obras",
  "Reformas e Reabilitação",
  "Projetos e Planeamento",
  "Acabamentos",
  "Outro"
]

export default function ContactosPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Contactos
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
                Fale <span className="text-primary">Connosco</span>
              </h1>
              <p className="text-background/70 text-lg leading-relaxed">
                Estamos prontos para ajudá-lo a concretizar o seu projeto. 
                Entre em contacto para um orçamento gratuito e sem compromisso.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24">
              {contactInfo.map((info) => (
                <div 
                  key={info.title}
                  className="bg-background border border-border rounded-lg p-6 shadow-lg"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    info.action ? (
                      <a 
                        key={i}
                        href={info.action}
                        className="block text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      <p key={i} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    )
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form */}
              <div>
                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                  Pedir Orçamento
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
                  Envie-nos uma Mensagem
                </h2>
                <p className="text-muted-foreground mb-8">
                  Preencha o formulário abaixo e entraremos em contacto consigo 
                  o mais brevemente possível.
                </p>

                {isSubmitted ? (
                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-8 text-center">
                    <CheckCircle2 className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Mensagem Enviada com Sucesso!
                    </h3>
                    <p className="text-muted-foreground">
                      Obrigado pelo seu contacto. A nossa equipa irá responder-lhe em breve.
                    </p>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      Enviar Nova Mensagem
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input 
                          id="name" 
                          name="name"
                          placeholder="O seu nome" 
                          required 
                          className="border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="seu@email.com" 
                          required 
                          className="border-border focus:border-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone</Label>
                        <Input 
                          id="phone" 
                          name="phone"
                          type="tel" 
                          placeholder="+238 000 00 00" 
                          className="border-border focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Serviço de Interesse</Label>
                        <Select name="service">
                          <SelectTrigger className="border-border">
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service.toLowerCase()}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto *</Label>
                      <Input 
                        id="subject" 
                        name="subject"
                        placeholder="Assunto da mensagem" 
                        required 
                        className="border-border focus:border-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea 
                        id="message" 
                        name="message"
                        placeholder="Descreva o seu projeto ou dúvida..."
                        rows={5}
                        required 
                        className="border-border focus:border-primary resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">
                            <svg className="h-4 w-4" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                          </span>
                          A Enviar...
                        </>
                      ) : (
                        <>
                          Enviar Mensagem
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Map & Additional Info */}
              <div>
                <div className="bg-secondary rounded-lg overflow-hidden mb-8">
                  {/* Map Placeholder */}
                  <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        A Nossa Localização
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Rua Principal, n.º 123<br />
                        Cidade da Praia, Cabo Verde
                      </p>
                      <Button 
                        variant="outline" 
                        asChild
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        <a 
                          href="https://maps.google.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Ver no Google Maps
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-foreground text-background rounded-lg p-8">
                  <h3 className="text-xl font-semibold mb-4">Siga-nos nas Redes Sociais</h3>
                  <p className="text-background/60 mb-6">
                    Acompanhe os nossos projetos e novidades nas redes sociais.
                  </p>
                  <div className="flex gap-4">
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Quick Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Tem Perguntas?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Consulte a nossa secção de perguntas frequentes ou entre em contacto 
              diretamente connosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
                <a href="/#faq">Ver FAQ</a>
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:+238000000000">
                  <Phone className="mr-2 h-4 w-4" />
                  Ligar Agora
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
