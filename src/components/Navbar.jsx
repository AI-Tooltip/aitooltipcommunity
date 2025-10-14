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
            src="/logo.png"
            alt="AI Tooltip Logo"
            className="h-20 mb-8"
          />
        </motion.div>
      </div>
    </nav>
  )
}

export default Navbar