"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Urvashi Rajput",
    role: "1st Year Student",
    videoUrl: "/T1.mp4",
    thumbnail: "/t3.png",
  },
  {
    name: "Vansh Goswami",
    role: "1st Year Student",
    videoUrl: "ev2.mp4",
    thumbnail: "/t4.png",
  },
  {
    name: "Akshay Yadav",
    role: "1st Year Student",
    videoUrl: "ev3.mp4",
    thumbnail: "/t2.png",
  },
]

export default function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">What Participants Say</h2>
          <p className="text-lg text-muted-foreground">Watch real feedback from workshop attendees</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="animate-fade-in-up hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer hover:border-primary/50"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedVideo(testimonial.videoUrl)}
            >
              <CardContent className="p-0 relative overflow-hidden">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={testimonial.thumbnail || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <div className="bg-primary/80 hover:bg-primary p-4 rounded-full transition-all transform group-hover:scale-110">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                  <p className="text-sm text-muted-foreground italic">Click to watch testimonial</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fade-in-up"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo}
              title="Testimonial Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  )
}
