"use client"

import { useEffect } from "react"
import Image from "next/image"
import { X, MapPin, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Project {
  title: string
  category: string
  location: string
  year: string
  image: string
  description: string
  details?: string[]
  area?: string
  duration?: string
}

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    
    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEsc)
    }
    
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5 text-foreground" />
        </button>

        <div className="grid md:grid-cols-2 h-full">
          {/* Image */}
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent md:hidden" />
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
            <span className="inline-block text-primary text-sm font-medium tracking-wider uppercase mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              {project.title}
            </h2>
            
            <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-6">
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                {project.year}
              </span>
              {project.area && (
                <span className="flex items-center gap-2">
                  <span className="text-primary">Area:</span>
                  {project.area}
                </span>
              )}
              {project.duration && (
                <span className="flex items-center gap-2">
                  <span className="text-primary">Duração:</span>
                  {project.duration}
                </span>
              )}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            {project.details && project.details.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  Detalhes do Projeto
                </h3>
                <ul className="space-y-2">
                  {project.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contactos">Solicitar Orçamento</Link>
              </Button>
              <Button variant="outline" onClick={onClose}>
                Fechar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
