import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          alt="AI and technology background" 
          src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1b27d1f0-e0df-4313-8a07-539dc8587da2/ae2cccc4db7b22e9dbce4ba49ad34500.png"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      </div>
      <div className="container mx-auto px-4 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white glow-effect">
            Join the AI Revolution<br />in UI/UX Design
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Unlock the potential of AI in building products.<br />
            Become a member of a vibrant community of designers, developers and entrepreneurs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.open("https://www.aitooltip.community/checkout/founding-member", "_blank")}
            >
              Join the Community
            </Button>
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => window.open("https://login.circle.so/sign_in?request_host=www.aitooltip.community#email", "_blank")}
            >
              Community Login
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero