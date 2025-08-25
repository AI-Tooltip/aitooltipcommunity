import React from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="https://storage.googleapis.com/hostinger-horizons-assets-prod/1b27d1f0-e0df-4313-8a07-539dc8587da2/39163ff55f1900abff48ad718d92b4c7.png"
            alt="AI Tooltip Logo"
            className="h-12"
          />
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar