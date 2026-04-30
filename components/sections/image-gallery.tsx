"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    title: "Villa de Luxo com Piscina",
    category: "Construção Residencial"
  },
  {
    src: "/images/project-1.jpg",
    title: "Residência Moderna Vista Mar",
    category: "Construção Residencial"
  },
  {
    src: "/images/gallery-2.jpg",
    title: "Suite Master Contemporânea",
    category: "Interiores"
  },
  {
    src: "/images/project-2.jpg",
    title: "Edifício Comercial Centro",
    category: "Construção Comercial"
  },
  {
    src: "/images/gallery-3.jpg",
    title: "Terraço com Vista Panorâmica",
    category: "Exteriores"
  },
  {
    src: "/images/project-5.jpg",
    title: "Villa Tropical Paradise",
    category: "Construção Residencial"
  },
  {
    src: "/images/gallery-4.jpg",
    title: "Sala de Jantar Elegante",
    category: "Interiores"
  },
  {
    src: "/images/project-3.jpg",
    title: "Apartamento de Luxo Renovado",
    category: "Reforma Interior"
  },
]

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }, [])

  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [isPaused, nextSlide])

  const getSlideStyle = (index: number) => {
    const position = (index - currentIndex + galleryImages.length) % galleryImages.length
    
    // Mobile: show only current and adjacent slides
    // Desktop: show more slides with 3D effect
    let translateX = 0
    let scale = 0.6
    let opacity = 0
    let zIndex = 1

    if (position === 0) {
      translateX = 0
      scale = 1
      opacity = 1
      zIndex = 10
    } else if (position === 1) {
      translateX = 85
      scale = 0.75
      opacity = 0.7
      zIndex = 5
    } else if (position === galleryImages.length - 1) {
      translateX = -85
      scale = 0.75
      opacity = 0.7
      zIndex = 5
    } else if (position === 2) {
      translateX = 150
      scale = 0.55
      opacity = 0.4
      zIndex = 2
    } else if (position === galleryImages.length - 2) {
      translateX = -150
      scale = 0.55
      opacity = 0.4
      zIndex = 2
    }

    return { translateX, scale, opacity, zIndex, position }
  }

  return (
    <section className="py-16 md:py-24 bg-foreground overflow-hidden">
      <div className="container mx-auto px-4 mb-8 md:mb-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-medium tracking-wider uppercase text-sm">
            Galeria
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-background mt-3 mb-4">
            Os Nossos Trabalhos
          </h2>
          <p className="text-background/60 text-sm md:text-base">
            Uma amostra dos projetos que realizamos com dedicação e excelência.
          </p>
        </div>
      </div>

      {/* Gallery Slider */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
          aria-label="Imagem anterior"
        >
          <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg"
          aria-label="Próxima imagem"
        >
          <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
        </button>

        {/* Images Container */}
        <div className="relative flex items-center justify-center h-[280px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          {galleryImages.map((image, index) => {
            const { translateX, scale, opacity, zIndex, position } = getSlideStyle(index)
            const isVisible = position <= 2 || position >= galleryImages.length - 2

            if (!isVisible) return null

            return (
              <div
                key={index}
                className="absolute transition-all duration-500 ease-out left-1/2"
                style={{
                  transform: `translateX(-50%) translateX(${translateX}%) scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <div className="relative overflow-hidden rounded-xl w-[260px] sm:w-[320px] md:w-[480px] lg:w-[600px]">
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                    />
                    {position === 0 && (
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent flex flex-col justify-end p-4 md:p-6 lg:p-8">
                        <span className="text-primary text-xs md:text-sm font-medium mb-1">
                          {image.category}
                        </span>
                        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-background">
                          {image.title}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6 md:mt-8">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? "bg-primary w-6" 
                : "bg-background/30 hover:bg-background/50 w-2"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
