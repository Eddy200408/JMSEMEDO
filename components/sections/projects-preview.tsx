import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Residência Moderna Vista Mar",
    category: "Construção Residencial",
    image: "/images/project-1.jpg",
    year: "2025"
  },
  {
    title: "Edifício Comercial Centro",
    category: "Construção Comercial",
    image: "/images/project-2.jpg",
    year: "2024"
  },
  {
    title: "Apartamento Luxo Renovado",
    category: "Reforma Interior",
    image: "/images/project-3.jpg",
    year: "2024"
  }
]

export function ProjectsPreview() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground">
              Conheça alguns dos nossos projetos mais recentes e veja como 
              transformamos ideias em realidade.
            </p>
          </div>
          <Button asChild variant="outline" className="border-foreground text-foreground hover:bg-foreground hover:text-background self-start md:self-auto">
            <Link href="/portfolio">
              Ver Todos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link 
              key={project.title}
              href="/portfolio"
              className="group relative overflow-hidden rounded-lg aspect-[4/5] block"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <span className="text-primary text-sm font-medium mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-background mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-background/60 text-sm">{project.year}</span>
                  <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <ArrowUpRight className="h-5 w-5 text-primary-foreground" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
