import Link from "next/link"
import { Building2, Hammer, FileText, Paintbrush, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Building2,
    title: "Construção de Obras",
    description: "Construção de casas unifamiliares, multifamiliares e edifícios residenciais e comerciais com qualidade superior.",
    href: "/servicos#construcao"
  },
  {
    icon: Hammer,
    title: "Reformas e Reabilitação",
    description: "Remodelação de interiores, reabilitação de edifícios antigos, ampliações e reparações estruturais.",
    href: "/servicos#reformas"
  },
  {
    icon: FileText,
    title: "Projetos e Planeamento",
    description: "Elaboração de projetos arquitetónicos, engenharia estrutural, consultoria técnica e licenciamento.",
    href: "/servicos#projetos"
  },
  {
    icon: Paintbrush,
    title: "Acabamentos",
    description: "Reboco, estuque, pintura interna e externa, colocação de pisos em mosaico, madeira e muito mais.",
    href: "/servicos#acabamentos"
  }
]

export function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Os Nossos Serviços
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Soluções Completas em Construção
          </h2>
          <p className="text-muted-foreground">
            Oferecemos uma gama completa de serviços de construção civil, 
            desde o projeto até à entrega final.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.href}
              className="group bg-background p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                Saber Mais
                <ArrowRight className="ml-1 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background">
            <Link href="/servicos">
              Ver Todos os Serviços
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
