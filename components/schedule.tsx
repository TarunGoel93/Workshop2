"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock } from "lucide-react"

const scheduleData = [
  {
    day: "Day 1",
    title: "Kaggle: Data Science & Competitions",
    sessions: [
      { time: "9:30–10:00 AM", topic: "Introduction to Kaggle & Setting up Account" },
      { time: "10:00–11:00 AM", topic: "Exploring Datasets & Notebooks" },
      { time: "11:00–12:30 PM", topic: "Data Cleaning & Visualization" },
      { time: "12:30–1:30 PM", topic: "Lunch Break" },
      { time: "1:30–3:00 PM", topic: "Building & Submitting a Kaggle Model" },
      { time: "3:00–3:30 PM", topic: "Q&A and Quiz" },
    ],
  },
  {
    day: "Day 2",
    title: "GitHub: Collaboration & Open Source",
    sessions: [
      { time: "9:30–10:00 AM", topic: "Understanding Git & GitHub" },
      { time: "10:00–11:00 AM", topic: "Version Control Commands" },
      { time: "11:00–12:30 PM", topic: "Branching, Pull Requests & Issues" },
      { time: "12:30–1:30 PM", topic: "Lunch Break" },
      { time: "1:30–3:00 PM", topic: "Open Source Contribution & Project Showcase" },
      { time: "3:00–3:30 PM", topic: "Q&A and Recap" },
    ],
  },
  {
    day: "Day 3",
    title: "n8n: Workflow Automation",
    sessions: [
      { time: "9:30–10:00 AM", topic: "Introduction to n8n & Installation" },
      { time: "10:00–11:00 AM", topic: "Building Your First Workflow" },
      { time: "11:00–12:30 PM", topic: "Connecting APIs (Google, Slack, Notion etc.)" },
      { time: "12:30–1:30 PM", topic: "Lunch Break" },
      { time: "1:30–3:00 PM", topic: "Automating Data Science Tasks" },
      { time: "3:00–3:30 PM", topic: "Live Demo & Wrap-Up" },
    ],
  },
]

export default function Schedule() {
  return (
    <section id="schedule" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Workshop Schedule</h2>
          <p className="text-lg text-muted-foreground">Detailed breakdown of all three days</p>
        </div>

        <Tabs defaultValue="Day 1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50">
            {scheduleData.map((item) => (
              <TabsTrigger key={item.day} value={item.day} className="transition-all duration-300">
                {item.day}
              </TabsTrigger>
            ))}
          </TabsList>

          {scheduleData.map((dayData) => (
            <TabsContent key={dayData.day} value={dayData.day} className="animate-fade-in-up">
              <Card className="border-primary/20 hover:border-primary/40 transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-secondary/10">
                  <CardTitle className="text-2xl">{dayData.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {dayData.sessions.map((session, index) => (
                      <div
                        key={index}
                        className="flex gap-4 pb-4 border-b last:border-b-0 animate-slide-in-left hover:translate-x-2 transition-transform duration-300 group"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <div className="flex items-start gap-3 flex-1">
                          <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:animate-pulse" />
                          <div className="flex-1">
                            <div className="font-mono text-sm font-bold text-primary">{session.time}</div>
                            <div className="text-muted-foreground group-hover:text-foreground transition-colors">
                              {session.topic}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
