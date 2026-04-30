"use client"

import { useState } from "react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CTA } from "@/components/sections/cta"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { ProjectModal } from "@/components/project-modal"
import { MapPin, Calendar, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Residência Moderna Vista Mar",
    category: "Construção Residencial",
    location: "Praia, Cabo Verde",
    year: "2025",
    image: "/images/project-1.jpg",
    description: "Moradia de luxo com vista para o mar, arquitetura contemporânea e acabamentos premium. Este projeto de dois andares foi concebido para maximizar a entrada de luz natural e proporcionar vistas panorâmicas do oceano Atlântico.",
    area: "450 m²",
    duration: "14 meses",
    details: [
      "Arquitetura contemporânea com linhas minimalistas",
      "Janelas panorâmicas do chão ao teto",
      "Piscina infinita com vista mar",
      "Sistema de domótica integrado",
      "Acabamentos em mármore e madeira nobre"
    ]
  },
  {
    title: "Edifício Comercial Centro",
    category: "Construção Comercial",
    location: "Mindelo, São Vicente",
    year: "2024",
    image: "/images/project-2.jpg",
    description: "Edifício comercial de 5 pisos com lojas e escritórios no centro da cidade. Projeto moderno que combina funcionalidade comercial com eficiência energética.",
    area: "2.500 m²",
    duration: "18 meses",
    details: [
      "5 pisos de espaços comerciais",
      "Estacionamento subterrâneo",
      "Sistema de ar condicionado central",
      "Elevadores de alta velocidade",
      "Certificação de eficiência energética"
    ]
  },
  {
    title: "Apartamento Luxo Renovado",
    category: "Reforma Interior",
    location: "Praia, Cabo Verde",
    year: "2024",
    image: "/images/project-3.jpg",
    description: "Renovação completa de apartamento T3 com design moderno e funcional. Transformação total do espaço com conceito open space e acabamentos de alta qualidade.",
    area: "180 m²",
    duration: "4 meses",
    details: [
      "Conceito open space sala e cozinha",
      "Cozinha equipada com ilha central",
      "3 suites com casas de banho privativas",
      "Pavimento em madeira natural",
      "Iluminação LED embutida"
    ]
  },
  {
    title: "Escritório Corporate Tower",
    category: "Construção Comercial",
    location: "Praia, Cabo Verde",
    year: "2023",
    image: "/images/project-4.jpg",
    description: "Torre de escritórios com design contemporâneo e certificação de sustentabilidade. Espaços flexíveis para empresas de diferentes dimensões.",
    area: "4.200 m²",
    duration: "24 meses",
    details: [
      "Torre de 8 andares",
      "Fachada de vidro duplo",
      "Painéis solares no telhado",
      "Espaços de coworking",
      "Terraço panorâmico"
    ]
  },
  {
    title: "Villa Tropical Paradise",
    category: "Construção Residencial",
    location: "Sal, Cabo Verde",
    year: "2023",
    image: "/images/project-5.jpg",
    description: "Villa de luxo com piscina infinita e jardim tropical em condomínio privado. Projeto exclusivo para desfrutar do clima tropical de Cabo Verde.",
    area: "380 m²",
    duration: "12 meses",
    details: [
      "Piscina infinita aquecida",
      "Jardim tropical com paisagismo",
      "Cozinha exterior com churrasqueira",
      "4 suites com varanda",
      "Garagem para 3 carros"
    ]
  },
  {
    title: "Condomínio Residencial Miramar",
    category: "Construção Residencial",
    location: "Praia, Cabo Verde",
    year: "2024",
    image: "/images/project-6.jpg",
    description: "Complexo residencial com 12 townhouses modernas, áreas comuns ajardinadas e segurança 24 horas. Projeto pensado para famílias que procuram qualidade de vida.",
    area: "3.600 m²",
    duration: "20 meses",
    details: [
      "12 townhouses de 3 quartos",
      "Piscina e jardins comuns",
      "Parque infantil",
      "Segurança 24 horas",
      "Estacionamento privativo"
    ]
  },
  {
    title: "Loja Premium Fashion Store",
    category: "Construção Comercial",
    location: "Mindelo, São Vicente",
    year: "2024",
    image: "/images/project-7.jpg",
    description: "Espaço comercial de luxo para marca de moda internacional. Interior minimalista com iluminação dramática para destacar os produtos.",
    area: "320 m²",
    duration: "3 meses",
    details: [
      "Design interior minimalista",
      "Sistema de iluminação premium",
      "Provadores VIP",
      "Área de atendimento privado",
      "Fachada em vidro temperado"
    ]
  },
  {
    title: "Penthouse Vista Panorâmica",
    category: "Reforma Interior",
    location: "Praia, Cabo Verde",
    year: "2025",
    image: "/images/project-8.jpg",
    description: "Renovação de penthouse com vistas 360° da cidade. Projeto de luxo com terraço privativo e acabamentos exclusivos importados da Europa.",
    area: "250 m²",
    duration: "6 meses",
    details: [
      "Vista panorâmica 360°",
      "Terraço de 80 m²",
      "Jacuzzi exterior",
      "Cozinha Bulthaup",
      "Casas de banho em Travertino"
    ]
  }
]

const beforeAfterProjects = [
  {
    title: "Reabilitação de Moradia Colonial",
    category: "Reabilitação",
    location: "Cidade Velha, Cabo Verde",
    beforeImage: "/images/before-1.jpg",
    afterImage: "/images/after-1.jpg",
    description: "Recuperação completa de moradia histórica, preservando o carácter original enquanto modernizamos o interior com confortos contemporâneos."
  },
  {
    title: "Renovação Cozinha Moderna",
    category: "Reforma Interior",
    location: "Praia, Cabo Verde",
    beforeImage: "/images/before-2.jpg",
    afterImage: "/images/after-2.jpg",
    description: "Transformação total de cozinha datada em espaço moderno e funcional com ilha central, eletrodomésticos de última geração e acabamentos em mármore."
  },
  {
    title: "Casa de Banho Spa",
    category: "Reforma Interior",
    location: "Mindelo, São Vicente",
    beforeImage: "/images/before-3.jpg",
    afterImage: "/images/after-3.jpg",
    description: "Renovação de casa de banho antiga em espaço spa com duche walk-in, banheira de hidromassagem e acabamentos em mármore Carrara."
  }
]

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
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
                Portfolio
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-3 mb-6">
                Os Nossos <span className="text-primary">Projetos</span>
              </h1>
              <p className="text-background/70 text-lg leading-relaxed">
                Explore a nossa galeria de projetos concluídos e descubra como transformamos 
                espaços e construímos sonhos com qualidade e profissionalismo.
              </p>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Transformações
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
                Antes e Depois
              </h2>
              <p className="text-muted-foreground">
                Veja as transformações impressionantes que realizamos. 
                Arraste o cursor para comparar o antes e depois.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {beforeAfterProjects.map((project) => (
                <div key={project.title} className="bg-background rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                  />
                  <div className="p-6">
                    <span className="text-primary text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {project.description}
                    </p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Projects Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-medium tracking-wider uppercase text-sm">
                Projetos Recentes
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
                Galeria de Projetos
              </h2>
              <p className="text-muted-foreground">
                Uma seleção dos nossos projetos mais recentes em construção civil, 
                reformas e reabilitação. Clique para ver mais detalhes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {projects.map((project) => (
                <button 
                  key={project.title}
                  onClick={() => handleProjectClick(project)}
                  className="group relative overflow-hidden rounded-xl bg-muted text-left transition-all hover:shadow-xl"
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Content */}
                    <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-primary text-xs font-medium mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold text-background mb-2 line-clamp-2">
                        {project.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-background/60 text-xs">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {project.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {project.year}
                          </span>
                        </div>
                        <span className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <ArrowUpRight className="h-4 w-4 text-primary-foreground" />
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Default Content */}
                  <div className="p-4 group-hover:opacity-0 transition-opacity absolute bottom-0 left-0 right-0 bg-background">
                    <span className="text-primary text-xs font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-sm font-semibold text-foreground mt-1 line-clamp-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</div>
                <div className="text-background/60">Projetos Concluídos</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
                <div className="text-background/60">Anos de Experiência</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-background/60">Profissionais</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
                <div className="text-background/60">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  )
}
