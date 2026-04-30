import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/sections/cta"
import { 
  Building2, 
  Hammer, 
  FileText, 
  Paintbrush,
  Home,
  Building,
  Wrench,
  RefreshCw,
  Maximize,
  Shield,
  PenTool,
  Zap,
  Droplets,
  ClipboardCheck,
  FileCheck,
  Brush,
  Square,
  Layers
} from "lucide-react"

export const metadata: Metadata = {
  title: "Serviços | JM SEMEDO",
  description: "Conheça os nossos serviços de construção civil: construção de obras, reformas e reabilitação, projetos e planeamento, e acabamentos de qualidade.",
}

const services = [
  {
    id: "construcao",
    icon: Building2,
    title: "Construção de Obras",
    description: "Realizamos construções de raiz com qualidade superior, desde casas unifamiliares até edifícios comerciais de grande porte.",
    image: "/images/service-construction.jpg",
    items: [
      { icon: Home, title: "Casas Unifamiliares", description: "Construção de moradias personalizadas de acordo com as suas necessidades e preferências." },
      { icon: Building, title: "Casas Multifamiliares", description: "Edifícios residenciais com múltiplas unidades habitacionais." },
      { icon: Building2, title: "Edifícios Residenciais", description: "Prédios de apartamentos com todas as infraestruturas necessárias." },
      { icon: Building, title: "Edifícios Comerciais", description: "Lojas, escritórios e espaços comerciais prontos para o seu negócio." },
    ]
  },
  {
    id: "reformas",
    icon: Hammer,
    title: "Reformas e Reabilitação",
    description: "Damos nova vida aos espaços existentes, modernizando e adaptando-os às suas necessidades atuais.",
    image: "/images/service-renovation.jpg",
    items: [
      { icon: Wrench, title: "Remodelação de Interiores", description: "Transformação completa de cozinhas, casas de banho e outros espaços." },
      { icon: RefreshCw, title: "Reabilitação de Edifícios", description: "Recuperação de edifícios antigos preservando o seu carácter." },
      { icon: Maximize, title: "Ampliação de Imóveis", description: "Aumento da área útil do seu imóvel de forma harmoniosa." },
      { icon: Shield, title: "Reparações Estruturais", description: "Correção de problemas estruturais para maior segurança." },
    ]
  },
  {
    id: "projetos",
    icon: FileText,
    title: "Projetos e Planeamento",
    description: "Oferecemos serviços completos de planeamento e projeto para garantir o sucesso da sua obra.",
    image: "/images/service-projects.jpg",
    items: [
      { icon: PenTool, title: "Projetos Arquitetónicos", description: "Elaboração de projetos de arquitetura funcionais e esteticamente atraentes." },
      { icon: Zap, title: "Engenharia Elétrica", description: "Projetos de instalações elétricas seguras e eficientes." },
      { icon: Droplets, title: "Engenharia Hidráulica", description: "Sistemas de água e saneamento bem dimensionados." },
      { icon: ClipboardCheck, title: "Consultoria Técnica", description: "Aconselhamento especializado em todas as fases do projeto." },
      { icon: FileCheck, title: "Licenciamento de Obras", description: "Tratamento de toda a documentação junto às entidades competentes." },
    ]
  },
  {
    id: "acabamentos",
    icon: Paintbrush,
    title: "Acabamentos",
    description: "Finalizamos os projetos com acabamentos de alta qualidade que fazem toda a diferença.",
    image: "/images/service-finishing.jpg",
    items: [
      { icon: Layers, title: "Reboco e Estuque", description: "Aplicação profissional de rebocos e estuques decorativos." },
      { icon: Brush, title: "Pintura Interna", description: "Pintura de interiores com tintas de qualidade e acabamento perfeito." },
      { icon: Brush, title: "Pintura Externa", description: "Proteção e embelezamento de fachadas com tintas resistentes." },
      { icon: Square, title: "Colocação de Pisos", description: "Instalação de mosaico, madeira, vinílico e outros materiais." },
    ]
  }
]

export default function ServicosPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 text-background overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/2.png"
              alt="Serviços de Construção Civil"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Os Nossos Serviços
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
                Soluções Completas em <span className="text-primary">Construção Civil</span>
              </h1>
              <p className="text-background/70 text-lg leading-relaxed">
                Da conceção à conclusão, oferecemos uma gama completa de serviços 
                de construção para transformar os seus projetos em realidade.
              </p>
            </div>
          </div>
        </section>

        {/* Services Sections */}
        {services.map((service, index) => (
          <section 
            key={service.id}
            id={service.id}
            className={`py-24 ${index % 2 === 0 ? 'bg-background' : 'bg-secondary'}`}
          >
            <div className="container mx-auto px-4">
              {/* Service Header with Image */}
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center shrink-0">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground max-w-xl">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`relative overflow-hidden rounded-xl ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                  </div>
                </div>
              </div>

              {/* Service Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {service.items.map((item) => (
                  <div 
                    key={item.title}
                    className="bg-background border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <CTA />
      </main>
      <Footer />
    </>
  )
}
