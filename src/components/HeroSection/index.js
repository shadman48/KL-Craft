import React from "react"
import { Button } from "../ButtonElements"
// import "./HeroSection.css"k
import styled from "styled-components"
import bgImage from "../../assets/images/background.jpg"
// import Video from "../../assets/videos/castleMain.mp4"

function HeroSection() {
  return (
    <HeroContainer>
      <HeroBg>
        {/* <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline /> */}
        <VideoBg />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>KL Crafts</HeroH1>
          <HeroP>Choose your bookshelf</HeroP>
          <Button>Search</Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
    // <div className="hero-container">
    //   <video src="/src/Res/videos/castle.mp4" autoPlay loop muted />
    //   {/* <video src="videos/video-1.mp4" autoPlay loop muted /> */}
    //   <h1>Travel More</h1>
    //   <p>Plan your next trip today.</p>
    //   <div className="hero-btns">
    //     <Button fontBig big primary>
    //       Get Started!
    //     </Button>
    //   </div>
    // </div>
  )
}

export default HeroSection

const HeroContainer = styled.div`
  /* background: #0c0c0c; */
  background: url(${bgImage}) center center/cover no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  /* height: 100%; */
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;
`
const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`
const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`
const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  margin-bottom: -30rem;
`
const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  padding: 0;
  color: white;
  line-height: 1.1;
  font-weight: bold;
`
const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 9vw, 4rem);
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  padding: 0 1rem;
`
const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  margin-bottom: 2rem;
`
