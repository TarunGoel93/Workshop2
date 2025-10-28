"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const eventDate = new Date("2025-11-18T00:00:00").getTime()
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleRegisterClick = () => {
    window.open("https://forms.gle/Tba4Wru8WCxVT91z6", "_blank")
  }

  if (!mounted) return null

  return (
    <section
      id="home"
      className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden bg-background"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-40 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium animate-pulse-subtle">
          <Sparkles size={16} />
          Join 500+ Innovators
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse-subtle">
              Kaggle × GitHub × n8n
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground font-light">3 Days of Innovation, Automation & AI</p>
        </div>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Join us from November 18th–20th, 2025 for an immersive 3-day hands-on workshop covering data science with Kaggle,
          open-source collaboration with GitHub, and automation workflows with n8n.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto py-12">
          {[
            { label: "Days", value: timeLeft.days },
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item, index) => (
            <div
              key={item.label}
              className="bg-gradient-to-br from-card to-card/50 border border-primary/20 rounded-xl p-4 sm:p-6 backdrop-blur-sm hover:border-primary/50 transition-smooth animate-glow hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-mono">
                {String(item.value).padStart(2, "0")}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-2 font-medium">{item.label}</div>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 text-lg font-semibold transition-smooth hover:scale-105"
            onClick={handleRegisterClick}
          >
            Register Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg font-semibold border-primary/30 bg-transparent text-foreground hover:bg-primary/10 hover:text-primary transition-smooth hover:scale-105"
          >
            View Schedule
          </Button>
        </div>
      </div>
    </section>
  )
}
