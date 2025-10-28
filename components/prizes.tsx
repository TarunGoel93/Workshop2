"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Medal, Award, Share2, Gift } from "lucide-react"

const prizes = [
  {
    icon: Medal,
    title: "Participation Certificates",
    description: "For all attendees",
  },
  {
    icon: Award,
    title: "Best Project Award",
    description: "Recognition for outstanding work",
  },
  {
    icon: Share2,
    title: "Social Media Recognition",
    description: "Featured on official pages",
  },
  {
    icon: Gift,
    title: "Surprise Goodies",
    description: "Exclusive prizes for winners",
  },
]

export default function Prizes() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Recognition for Your Efforts</h2>
          <p className="text-lg text-muted-foreground">Earn certificates, prizes, and recognition</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prizes.map((prize, index) => {
            const Icon = prize.icon
            return (
              <Card
                key={prize.title}
                className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in-up border-accent/20 hover:border-accent/50"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <Icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{prize.title}</h3>
                  <p className="text-sm text-muted-foreground">{prize.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
