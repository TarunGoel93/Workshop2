"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Zap, Users, Lightbulb, Trophy } from "lucide-react"

const highlights = [
  {
    icon: Zap,
    title: "Hands-on Practice",
    description: "Learn by doing with real projects and datasets",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work with peers and learn from industry experts",
  },
  {
    icon: Lightbulb,
    title: "Real Projects",
    description: "Build practical solutions you can showcase",
  },
  {
    icon: Trophy,
    title: "Certificates & Prizes",
    description: "Earn recognition and win exciting rewards",
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About the Workshop</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This 3-Day Workshop aims to bridge the gap between data science, collaboration, and automation.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          <div className="animate-slide-in-left group">
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Day 1: Kaggle</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
              Master datasets, competitions, and practical model building. Learn how to explore data, clean it,
              visualize insights, and build competitive models.
            </p>
          </div>

          <div className="animate-slide-in-right group" style={{ animationDelay: "0.1s" }}>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Day 2: GitHub</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
              Deep dive into version control, open-source contributions, and teamwork. Understand branching, pull
              requests, and collaborative development.
            </p>
          </div>

          <div className="animate-slide-in-left group" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Day 3: n8n</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors">
              Introduce yourself to n8n, an open-source automation tool to streamline your workflows with no code.
              Connect APIs and automate data science tasks.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={item.title}
                className="animate-fade-in-up border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-6">
                  <Icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
