"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const workshops = [
  {
    title: "Kaggle Workshop",
    date: "24th March 2025",
    description: "Hands-on workshop on data science and Kaggle competitions.",
    image: "/t5.jpg",
  },
  {
    title: "Github Workshop",
    date: "27th March 2025",
    description: "Hands-on workshop on GitHub, version control, and collaborative coding.",
    image: "/t6.jpg",
  },
]

export default function PreviousWorkshops() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Our Past Workshops</h2>
          <p className="text-lg text-muted-foreground">Explore highlights from previous events</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {workshops.map((workshop, index) => (
            <Card
              key={workshop.title}
              className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-primary font-bold mb-2">{workshop.date}</div>
                <CardTitle>{workshop.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{workshop.description}</p>
                <a href="https://tarungoel93.github.io/Work/" target="_blank" rel="noopener noreferrer" className="w-full">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent text-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
                >
                  View Gallery
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
              </CardContent>
            </Card>
          ))}
        </div>

    <div className="text-center">
      <a href="https://tarungoel93.github.io/Work/index.html" target="_blank" rel="noopener noreferrer">
        <Button size="lg" variant="outline" className="bg-transparent text-foreground hover:bg-primary/10 hover:text-primary transition-smooth">
          See All Works
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </a>
    </div>

      </div>
    </section>
  )
}
