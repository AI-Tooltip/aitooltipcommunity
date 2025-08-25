import React from "react"
import { motion } from "framer-motion"
import { Youtube, BookOpen, Users } from "lucide-react"

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
            What's In The Community?
          </h2>
          <p className="text-xl text-gray-300">
            Our private community is the first of its kind! Designed for AI enthusiasts in UI/UX. With a yearly membership, you can access exclusive content tailored to your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Youtube className="w-8 h-8 text-secondary" />,
              title: "Exclusive Content",
              description: "Get access to longer videos and personal engagement with Jad.",
              image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1b27d1f0-e0df-4313-8a07-539dc8587da2/88b0452a0421fa64f2bbb5db9ae43b4a.png"
            },
            {
              icon: <BookOpen className="w-8 h-8 text-primary" />,
              title: "AI Courses & Prompts",
              description: "Access our library of AI courses and prompts.",
              image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1b27d1f0-e0df-4313-8a07-539dc8587da2/56c07ca3150c236c5019acddd23dec28.png"
            },
            {
              icon: <Users className="w-8 h-8 text-secondary" />,
              title: "Community Access",
              description: "Engage with fellow innovators and get feedback on your work.",
              image: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1b27d1f0-e0df-4313-8a07-539dc8587da2/d924b3865d587c6ee1f8e5a612c8b316.png"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="gradient-border"
            >
              <div className="relative glass-effect p-6 h-full rounded-lg z-10">
                <div className="-mx-6 -mt-6 mb-6">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-56 object-cover rounded-t-lg"
                  />
                </div>
                {feature.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features