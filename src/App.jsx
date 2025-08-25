import React, { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"
import emailjs from 'emailjs-com'
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import YouTubeSection from "@/components/YouTubeSection"
import Pricing from "@/components/Pricing"
import About from "@/components/About"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

function App() {
  const { toast } = useToast()
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    role: "",
    message: ""
  })

  const [newsletterEmail, setNewsletterEmail] = useState("")

  const handleContactSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const templateParams = {
        name: contactForm.name,
        time: new Date().toLocaleString(),
        role: contactForm.role,
        email: contactForm.email,
        message: contactForm.message
      }

      await emailjs.send(
        'service_xml0bv9',
        'template_0ka2cpp',
        templateParams,
        'idPEfw4oasX9IRrze'
      )

      toast({
        title: "Message sent!",
        description: "Thank you for getting in touch. Jad will get back to you shortly.",
      })
      setContactForm({ name: "", email: "", role: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive"
      })
    }
  }

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault()
    
    try {
      await emailjs.send(
        'service_xml0bv9',
        'template_1ljyrsu',
        { email: newsletterEmail },
        'idPEfw4oasX9IRrze'
      )

      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      })
      setNewsletterEmail("")
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again later.",
        variant: "destructive"
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <YouTubeSection />
      <Pricing />
      <Contact 
        contactForm={contactForm}
        setContactForm={setContactForm}
        onSubmit={handleContactSubmit}
      />
      <Footer 
        newsletterEmail={newsletterEmail}
        setNewsletterEmail={setNewsletterEmail}
        onNewsletterSubmit={handleNewsletterSubmit}
      />
    </div>
  )
}

export default App