"use client"

import { Card, CardContent } from "@/components/ui/card"

const convenors = [
  {
    name: "Dr. Pankaj Agarwal",
    role: "Dean SOET",
    image: "/pankaj.webp",
  },
  {
    name: "Dr. Monika Khatkar",
    role: "Assistant Professor SOET",
    image: "/monika.webp",
  },
]

const resourcePerson = {
  name: "TBH",
  role: "GitHub, Kaggle, n8n Speaker",
  image: "/x.png",
}

const volunteers = [
  {
    name: "TBH",
    role: "Technical Lead",
    image: "/x.png",
  },
  {
    name: "TBH",
    role: "Photographer",
    image: "/x.png",
  },
  {
    name: "TBH",
    role: "Designer",
    image: "/x.png",
  },
  {
    name: "TBH",
    role: "Promotion",
    image: "/x.png",
  },
]

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Convenors Section */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Meet the Experts Behind the Workshop
            </h2>
            <p className="text-lg text-muted-foreground font-light">Our Convenors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {convenors.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden border-primary/20 hover:border-primary/50 transition-smooth hover:shadow-xl hover:shadow-primary/10 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground font-light">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Resource Person Section */}
        <div className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              Resource Person
            </h2>
          </div>

          <div className="flex justify-center">
            <Card className="overflow-hidden border-accent/20 hover:border-accent/50 transition-smooth hover:shadow-xl hover:shadow-accent/10 max-w-sm w-full group animate-fade-in-up">
              <div className="aspect-square overflow-hidden bg-muted relative">
                <img
                  src={resourcePerson.image || "/placeholder.svg"}
                  alt={resourcePerson.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              </div>
              <CardContent className="pt-6">
                <div className="inline-block px-3 py-1 bg-gradient-to-r from-accent/20 to-accent/10 text-accent text-xs font-bold rounded-full mb-3 border border-accent/30">
                  Resource Person
                </div>
                <h3 className="font-bold text-lg mb-1">{resourcePerson.name}</h3>
                <p className="text-sm text-muted-foreground font-light">{resourcePerson.role}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Volunteers Section */}
        <div>
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Our Volunteers
            </h2>
            <p className="text-lg text-muted-foreground font-light">Meet the minds behind the Workshop</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteers.map((volunteer, index) => (
              <Card
                key={index}
                className="overflow-hidden border-secondary/20 hover:border-secondary/50 transition-smooth hover:shadow-xl hover:shadow-secondary/10 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden bg-muted relative">
                  <img
                    src={volunteer.image || "/placeholder.svg"}
                    alt={volunteer.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                </div>
                <CardContent className="pt-6">
                  <h3 className="font-bold text-lg mb-1">{volunteer.name}</h3>
                  <p className="text-sm text-muted-foreground font-light">{volunteer.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
