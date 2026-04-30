import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/sections/cta"
import { 
  Target, 
  Eye, 
  Heart, 
  Shield, 
  Users, 
  Award,
  CheckCircle2,
  Building2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre Nós | JM SEMEDO",
  description: "Conheça a história da JM SEMEDO, a nossa missão, visão e valores. Mais de 15 anos de experiência em construção civil em Cabo Verde.",
}

const values = [
  {
    icon: Shield,
    title: "Qualidade",
    description: "Compromisso com os mais altos padrões de qualidade em todos os projetos."
  },
  {
    icon: Heart,
    title: "Integridade",
    description: "Atuamos com honestidade e transparência em todas as relações."
  },
  {
    icon: Users,
    title: "Respeito",
    description: "Valorizamos as pessoas e as suas necessidades individuais."
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Buscamos a excelência em cada detalhe do nosso trabalho."
  }
]

const timeline = [
  {
    year: "2009",
    title: "Fundação",
    description: "A JM SEMEDO foi fundada com a visão de transformar o setor da construção civil em Cabo Verde."
  },
  {
    year: "2012",
    title: "Expansão",
    description: "Ampliamos os nossos serviços para incluir projetos arquitetónicos e consultoria técnica."
  },
  {
    year: "2016",
    title: "Crescimento",
    description: "Alcançamos a marca de 100 projetos concluídos e expandimos a nossa equipa."
  },
  {
    year: "2020",
    title: "Modernização",
    description: "Investimos em tecnologias e equipamentos modernos para maior eficiência."
  },
  {
    year: "2024",
    title: "Liderança",
    description: "Consolidámos a nossa posição como empresa líder no setor da construção civil."
  }
]

const team = [
  {
    name: "José Manuel Semedo",
    role: "Fundador e Diretor Geral",
    description: "Com mais de 20 anos de experiência no setor da construção civil."
  },
  {
    name: "Maria Santos",
    role: "Diretora de Projetos",
    description: "Arquiteta com especialização em projetos sustentáveis."
  },
  {
    name: "António Silva",
    role: "Diretor de Operações",
    description: "Engenheiro civil com vasta experiência em gestão de obras."
  },
  {
    name: "Ana Rodrigues",
    role: "Diretora Comercial",
    description: "Especialista em desenvolvimento de negócios e relações com clientes."
  }
]

export default function SobrePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Sobre Nós
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
                Construindo <span className="text-primary">Confiança</span> Desde 2009
              </h1>
              <p className="text-background/70 text-lg leading-relaxed">
                A JM SEMEDO é uma empresa de referência no setor da construção civil em Cabo Verde, 
                comprometida com a qualidade, inovação e satisfação dos clientes.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-24 bg-background">
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
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-lg -z-10" />
              </div>

              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  A Nossa História
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Fundada em 2009, a JM SEMEDO nasceu da paixão pela construção e do desejo de 
                  contribuir para o desenvolvimento de Cabo Verde. Ao longo dos anos, construímos 
                  uma reputação sólida baseada na qualidade do nosso trabalho e no compromisso 
                  com os nossos clientes.
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Hoje, somos uma das empresas mais reconhecidas do setor, com uma equipa de 
                  profissionais qualificados e uma carteira de projetos que demonstra a nossa 
                  capacidade de entregar resultados excecionais.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-primary">15+</div>
                    <div className="text-muted-foreground text-sm">Anos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">200+</div>
                    <div className="text-muted-foreground text-sm">Projetos</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">50+</div>
                    <div className="text-muted-foreground text-sm">Profissionais</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {/* Mission */}
              <div className="bg-background p-8 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Missão</h3>
                <p className="text-muted-foreground">
                  Oferecer soluções de construção de excelência, superando as expectativas 
                  dos nossos clientes através de qualidade, inovação e compromisso.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-background p-8 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Visão</h3>
                <p className="text-muted-foreground">
                  Ser a empresa de referência em construção civil em Cabo Verde, reconhecida 
                  pela qualidade, inovação e contributo para o desenvolvimento do país.
                </p>
              </div>

              {/* Why Choose Us */}
              <div className="bg-background p-8 rounded-lg">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Building2 className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Porquê a JM SEMEDO?</h3>
                <p className="text-muted-foreground">
                  Combinamos experiência, profissionalismo e dedicação para entregar 
                  projetos que superam expectativas e resistem ao tempo.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="text-center mb-12">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Os Nossos Valores
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
                Princípios que Nos Guiam
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="text-center p-6"
                >
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                A Nossa Jornada
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
                História de Crescimento
              </h2>
              <p className="text-muted-foreground">
                Uma linha do tempo dos marcos mais importantes da nossa trajetória.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

              {timeline.map((item, index) => (
                <div 
                  key={item.year}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                  }`}>
                    <span className="text-primary font-bold text-xl">{item.year}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>

                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 ring-4 ring-background" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-foreground text-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                A Nossa Equipa
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mt-3 mb-4">
                Liderança
              </h2>
              <p className="text-background/60">
                Conheça os profissionais que lideram a JM SEMEDO.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member) => (
                <div 
                  key={member.name}
                  className="bg-background/5 backdrop-blur-sm rounded-lg p-6 text-center"
                >
                  <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-background mb-1">
                    {member.name}
                  </h3>
                  <span className="text-primary text-sm font-medium">
                    {member.role}
                  </span>
                  <p className="text-background/60 text-sm mt-3">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <span className="text-primary font-medium tracking-wider uppercase text-sm">
                  Porquê Escolher-nos
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
                  Razões para Confiar na JM SEMEDO
                </h2>
                <p className="text-muted-foreground mb-8">
                  Escolher a empresa certa para o seu projeto de construção é fundamental. 
                  Eis algumas razões pelas quais os nossos clientes confiam em nós.
                </p>

                <div className="space-y-4">
                  {[
                    "Equipa de profissionais qualificados e experientes",
                    "Utilização de materiais de primeira qualidade",
                    "Cumprimento rigoroso de prazos estabelecidos",
                    "Orçamentos detalhados e transparentes",
                    "Garantia estendida em todos os trabalhos",
                    "Acompanhamento personalizado do início ao fim",
                    "Compromisso com práticas sustentáveis",
                    "Comunicação clara e regular com o cliente"
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src="/images/hero-construction.jpg"
                    alt="Construção JM SEMEDO"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-lg -z-10" />
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  )
}
