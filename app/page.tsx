import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { ServicesPreview } from "@/components/sections/services-preview"
import { ProjectsPreview } from "@/components/sections/projects-preview"
import { ImageGallery } from "@/components/sections/image-gallery"
import { AboutPreview } from "@/components/sections/about-preview"
import { Testimonials } from "@/components/sections/testimonials"
import { FAQ } from "@/components/sections/faq"
import { CTA } from "@/components/sections/cta"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesPreview />
        <ImageGallery />
        <ProjectsPreview />
        <AboutPreview />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
