"use client"

import { useState, useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Schedule from "@/components/schedule"
import Speakers from "@/components/speakers"
import Prizes from "@/components/prizes"
import PreviousWorkshops from "@/components/previous-workshops"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import FAQ from "@/components/faq"
import Register from "@/components/register"
// import Footer from "@/components/footer"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation isScrolled={isScrolled} />
      <Hero />
      <About />
      <Schedule />
      <Speakers />
      <Prizes />
      <PreviousWorkshops />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Register />
      {/* <Footer /> */}
    </main>
  )
}
