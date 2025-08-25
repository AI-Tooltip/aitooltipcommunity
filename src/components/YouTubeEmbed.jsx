import React from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

const YouTubeEmbed = ({ id, title }) => {
  return (
    <div className="relative aspect-video w-full rounded-lg overflow-hidden">
      <LiteYouTubeEmbed
        id={id}
        title={title}
        wrapperClass="yt-lite rounded-lg"
      />
    </div>
  )
}

export default YouTubeEmbed