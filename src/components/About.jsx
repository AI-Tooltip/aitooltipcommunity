import React from "react"
import { motion } from "framer-motion"

const About = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 gradient-text">
            About AI Tooltip
          </h2>
          <div className="glass-effect p-8 rounded-lg">
            <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
              <div className="w-full md:w-1/2">
                <img 
                  src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1b27d1f0-e0df-4313-8a07-539dc8587da2/eaa52ffa462e92e1358af74737bdddd6.jpg"
                  alt="Jad in his studio"
                  className="rounded-lg w-full h-auto shadow-xl"
                />
              </div>
              <div className="w-full md:w-1/2">
                <p className="text-xl text-gray-300 mb-6">
                  Empowering Designers To Implement AI In UI/UX
                </p>
                <p className="text-gray-400">
                  My passion for psychology and technology led me down the path of UI/UX design. With a decade of experience and drive for efficiency, I'm dedicated to transforming the industry through AI while preserving human creativity.
                </p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-xl font-bold mb-4">Vision</h3>
                <p className="text-gray-400">
                  Transform the UI/UX Industry through the power of Artificial Intelligence.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Mission</h3>
                <p className="text-gray-400">
                  Create the first-ever community that empowers designers, developers and entrepreneurs to deliver quality products through efficient and innovative AI workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About