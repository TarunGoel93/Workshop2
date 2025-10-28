"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is the 3-Day Kaggle, GitHub & n8n Workshop?",
    answer:
      "A comprehensive 3-day hands-on workshop covering data science with Kaggle, open-source collaboration with GitHub, and workflow automation with n8n. Each day focuses on a different platform with practical exercises and expert guidance.",
  },
  {
    question: "Who can participate?",
    answer:
      "The workshop is open to students, professionals, and anyone interested in learning data science, version control, and automation. It is primarily designed for 1st and 2nd year students, and no prior experience is required, though basic programming knowledge is helpful.",
  },
  {
    question: "Are there any prerequisites?",
    answer:
      "Basic familiarity with programming concepts is helpful but not required. We recommend having a laptop with internet access and accounts on Kaggle and GitHub (which are free to create).",
  },
  {
    question: "Will certificates be provided?",
    answer:
      "Yes! All participants will receive a certificate of participation. Outstanding projects may also receive special recognition.",
  },
  {
    question: "Is there any fee?",
    answer: "No",
  },
  {
    question: "How can I contact the team?",
    answer:
      "You can reach out through the contact form on this website or email us directly. We are here to help with any questions!",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
