import React from "react"
import { Button } from "../ButtonElements"
import "./HeroSection.css"

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="Res/videos/castle.mp4" autoPlay loop muted />
      {/* <video src="videos/video-1.mp4" autoPlay loop muted /> */}
      <h1>Travel More</h1>
      <p>Plan your next trip today.</p>
      <div className="hero-btns">
        <Button fontBig big primary>
          Get Started!
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
