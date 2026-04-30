"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/servicos", label: "Serviços" },
  { href: "/portfolio", label: "Projetos" },
  { href: "/sobre", label: "Sobre Nós" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-[70]">
            <Image
            src="/images/LOGO.png"
            alt="JM SEMEDO"
            width={0}
            height={0}
            sizes="100vw"
            className="h-19 w-auto"
            priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
              "relative text-sm font-medium tracking-wide uppercase transition-colors duration-300",
              "after:content-[''] after:absolute after:left-0 after:-bottom-2",
              "after:h-[2px] after:w-0 after:bg-red-500 after:rounded-full",
              "after:transition-all after:duration-300 ease-out",
              "hover:text-red-500 hover:after:w-full",
              isScrolled ? "text-foreground/80" : "text-white/90"
            )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/contactos">Contactos</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-[60] p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className={cn(
                "h-6 w-6 transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fixed Overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-50 bg-background transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <div className="fixed inset-0 flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-medium text-foreground hover:text-primary transition-colors tracking-wide uppercase"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="lg" className="mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/contactos" onClick={() => setIsOpen(false)}>
              Contactos
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
