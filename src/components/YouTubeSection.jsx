import React from "react"
import { motion } from "framer-motion"
import YouTubeEmbed from "@/components/YouTubeEmbed"
import { Button } from "@/components/ui/button"
import { Youtube } from "lucide-react"

const YouTubeSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text">
              AI Tooltip On Youtube
            </h2>
            <p className="text-xl text-gray-300">
              Our YouTube channel offers a wealth of resources tailored for AI enthusiasts in UI/UX design. From tutorials to expert insights, you'll find content that enhances your skills and keeps you inspired.
            </p>
            <Button
              variant="secondary"
              className="mt-4"
              onClick={() => window.open("https://www.youtube.com/channel/UCPGTzfelYXnX_IRDItRWLeg?sub_confirmation=1", "_blank")}
            >
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe On Youtube
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="gradient-border"
          >
            <div className="relative glass-effect p-2 rounded-lg z-10">
              <YouTubeEmbed
                id="JVc7hvRtwyk"
                title="AI Tooltip YouTube Video"
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto mt-16 space-y-8"
        >
          {[
            {
              author: "@ilan117",
              avatar: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1b27d1f0-e0df-4313-8a07-539dc8587da2/08019123eed305c78b619b90d035db47.jpg",
              comment: "Jad you are modest and lovely and awesome. What can I say only few of you are left here in YouTube. Now that I have subscribed I'll follow your previous and the upcoming ones. Thank you so very much ❤️"
            },
            {
              author: "@RyanStephenAlldridge",
              avatar: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1b27d1f0-e0df-4313-8a07-539dc8587da2/7b0df18110eb4feb2d8a946a34ae9d53.jpg",
              comment: "Jad you're my new favorite channel man! You are really clear and tactical, it's fantastic. I'll be sharing among my friends!"
            },
            {
              author: "@marwane144",
              avatar: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1b27d1f0-e0df-4313-8a07-539dc8587da2/5ad862fee61da0f5d69a76451560654d.jpg",
              comment: "Watching this video has me smiling from ear to ear. Who would've thought that something that took months to build could one day be done in just an evening after your 9-to-5? Truly amazing! Thank you for sharing such priceless and valuable tips honestly, if you ever decide to make a 5-hour video, count me in without hesitation! Haha."
            },
            {
              author: "@adititimbadia3352",
              avatar: "https://storage.googleapis.com/hostinger-horizons-assets-prod/1b27d1f0-e0df-4313-8a07-539dc8587da2/6e4e718c7442beb0e43e6a55447ce835.jpg",
              comment: "Fantastic video, Jad! Your tips and tricks are incredibly insightful and so valuable for designers. It's truly inspiring to see how seamlessly a concept can be translated into wireframes and interactive prototypes for quick testing. Thank you for sharing your expertise—this will undoubtedly enhance my workflow!"
            }
          ].map((comment, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-lg"
            >
              <div className="flex items-start gap-4">
                <img
                  src={comment.avatar}
                  alt={`${comment.author}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="font-medium text-gray-300 mb-2">{comment.author}</div>
                  <p className="text-gray-400">{comment.comment}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default YouTubeSection