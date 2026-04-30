"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Quanto tempo demora a construção de uma casa?",
    answer: "O tempo de construção varia conforme o tamanho e complexidade do projeto. Em média, uma casa unifamiliar pode levar entre 8 a 12 meses. Fornecemos sempre um cronograma detalhado antes do início da obra."
  },
  {
    question: "A JM SEMEDO oferece garantia nos trabalhos?",
    answer: "Sim, oferecemos garantia em todos os nossos trabalhos. A garantia cobre defeitos estruturais e de acabamento por um período mínimo de 5 anos, conforme o tipo de serviço prestado."
  },
  {
    question: "Como posso obter um orçamento?",
    answer: "Pode solicitar um orçamento através do nosso formulário de contacto, por telefone ou email. Após análise do seu projeto, agendamos uma visita técnica para elaborar um orçamento detalhado e sem compromisso."
  },
  {
    question: "Trabalham com materiais sustentáveis?",
    answer: "Sim, priorizamos o uso de materiais sustentáveis e técnicas de construção ecológicas sempre que possível. Podemos orientá-lo sobre as melhores opções para um projeto mais sustentável."
  },
  {
    question: "É possível acompanhar o andamento da obra?",
    answer: "Absolutamente! Mantemos os nossos clientes informados através de relatórios regulares e reuniões de acompanhamento. Também pode visitar a obra a qualquer momento, mediante agendamento."
  },
  {
    question: "A empresa trata do licenciamento da obra?",
    answer: "Sim, oferecemos serviços completos de consultoria e tratamento de licenciamento junto às entidades competentes, facilitando todo o processo burocrático para o cliente."
  }
]

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <span className="text-primary font-medium tracking-wider uppercase text-sm">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground mb-6">
              Encontre respostas às perguntas mais comuns sobre os nossos serviços. 
              Se não encontrar o que procura, não hesite em contactar-nos.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-muted-foreground">Ainda tem dúvidas?</span>
              <a href="/contactos" className="text-primary font-medium hover:underline">
                Contacte-nos
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 data-[state=open]:border-primary/50"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
