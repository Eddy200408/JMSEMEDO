"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Proprietário Residencial",
    content: "A JM SEMEDO superou todas as nossas expectativas. A equipa foi profissional, pontual e o resultado final ficou incrível. Recomendo vivamente!",
    rating: 5
  },
  {
    name: "Maria Santos",
    role: "Empresária",
    content: "Contratámos a JM SEMEDO para a construção do nosso escritório comercial. O trabalho foi impecável e entregue dentro do prazo estabelecido.",
    rating: 5
  },
  {
    name: "João Silva",
    role: "Investidor Imobiliário",
    content: "Já realizámos vários projetos com a JM SEMEDO e a qualidade é sempre consistente. São parceiros de confiança para qualquer projeto de construção.",
    rating: 5
  },
  {
    name: "Ana Rodrigues",
    role: "Proprietária",
    content: "A reforma da nossa casa foi feita com muito profissionalismo. A equipa foi atenciosa e preocupou-se com cada detalhe. Ficámos muito satisfeitos!",
    rating: 5
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Testemunhos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background mt-3 mb-4">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="text-background/60">
            A satisfação dos nossos clientes é a nossa maior conquista.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background/5 backdrop-blur-sm rounded-2xl p-8 md:p-12">
            <Quote className="absolute top-8 left-8 h-12 w-12 text-primary/30" />
            
            <div className="text-center pt-8">
              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-xl md:text-2xl text-background/90 leading-relaxed mb-8 italic">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </p>

              {/* Author */}
              <div>
                <div className="text-lg font-semibold text-background">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-background/60 text-sm">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="border-background/20 text-background hover:bg-background/10 rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentIndex ? "bg-primary w-6" : "bg-background/30"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="border-background/20 text-background hover:bg-background/10 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
