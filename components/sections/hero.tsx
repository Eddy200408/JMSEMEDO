import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/2.png"
          alt="Construção moderna"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <span className="inline-block text-primary font-medium tracking-wider uppercase text-sm mb-4">
            Construção e Comércio
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-background mb-6 leading-tight">
            <span className="block">Construímos</span>
            <span className="block">o Seu <span className="text-primary">Futuro</span></span>
          </h1>
          <p className="text-background/80 text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Com anos de experiência e dedicação, a JM SEMEDO transforma os seus sonhos em 
            realidade através de projetos de construção de alta qualidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              <Link href="/portfolio">
                Ver Projetos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-background/10 text-background/100 bg-background/10">
              <Link href="/sobre">
                <Play className="mr-2 h-4 w-4" />
                Conhecer a Empresa
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-background/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">15+</div>
              <div className="text-background/60 text-sm mt-1">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">200+</div>
              <div className="text-background/60 text-sm mt-1">Projetos Concluídos</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
              <div className="text-background/60 text-sm mt-1">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-background/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-background/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
