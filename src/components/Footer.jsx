import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Youtube, Instagram, Check } from "lucide-react"

const Footer = ({ newsletterEmail, setNewsletterEmail, onNewsletterSubmit }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    await onNewsletterSubmit(e)
    setIsSubmitted(true)
    
    // Reset the button state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const TikTokIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )

  const XIcon = () => (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )

  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">AI Tooltip Newsletter</h3>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit" variant="secondary" disabled={isSubmitted}>
                {isSubmitted ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Awesome!
                  </>
                ) : (
                  "Subscribe"
                )}
              </Button>
            </form>
          </div>
          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://www.youtube.com/@AI.Tooltip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/aitooltip/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/ai_tooltip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <XIcon />
            </a>
            <a
              href="https://www.tiktok.com/@ai.tooltip"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>
        <div className="text-center border-t border-gray-800 pt-8">
          <p className="text-gray-400">© {new Date().getFullYear()} AI Tooltip Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer