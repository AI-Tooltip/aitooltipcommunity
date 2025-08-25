import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const Pricing = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Join Our Community
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="gradient-border h-full"
          >
            <div className="relative glass-effect p-8 rounded-lg z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">Full Community Access</h3>
              <div className="text-3xl font-bold mb-6">$360/year</div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Access to AI courses (With Updates)",
                  "Access to prompt libraries",
                  "Access to community spaces",
                  "Exclusive resources and content",
                  "Engage with Jad & the community"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-primary hover:bg-primary/90"
                onClick={() => window.open("https://www.aitooltip.community/checkout/founding-member", "_blank")}
              >
                Join Now
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="gradient-border h-full"
          >
            <div className="relative glass-effect p-8 rounded-lg z-10 flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">Courses Only</h3>
              <div className="text-3xl font-bold mb-6">$200</div>
              <ul className="space-y-3 mb-8 flex-grow">
                {[
                  "Access to the latest AI courses",
                  "Access to prompt library",
                  "One time payment"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <Check className="w-5 h-5 mr-2 text-secondary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className="w-full bg-secondary hover:bg-secondary/90"
                onClick={() => window.open("https://www.aitooltip.community/checkout/ai-tooltip-courses", "_blank")}
              >
                Purchase Now
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing