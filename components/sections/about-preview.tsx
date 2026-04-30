import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const features = [
  "Equipa profissional qualificada",
  "Materiais de alta qualidade",
  "Cumprimento de prazos",
  "Orçamentos transparentes",
  "Garantia nos trabalhos",
  "Acompanhamento personalizado"
]

export function AboutPreview() {
  return (
    <section className="py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/team.jpg"
                alt="Equipa JM SEMEDO"
                fill
                className="object-cover"
              />
            </div>
            {/* Accent Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
            
            {/* Experience Badge */}
            <div className="absolute -bottom-4 left-8 bg-primary text-primary-foreground px-6 py-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm opacity-90">Anos de Experiência</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              Excelência em Construção Civil
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              A JM SEMEDO é uma empresa de referência no setor da construção civil em Cabo Verde. 
              Com mais de 15 anos de experiência, temos vindo a construir uma reputação baseada 
              na qualidade, profissionalismo e dedicação aos nossos clientes.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              A nossa equipa de profissionais qualificados trabalha com os melhores materiais 
              e técnicas modernas para garantir resultados que superam as expectativas.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/sobre">
                Conhecer Mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
