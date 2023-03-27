import React from 'react'
import { HeroContainer, HeroBackground, 
         VideoBackground,
         HeroContent, HeroH1, HeroP } from './HeroElements'

import Video from '../../videos/video.mp4'

const HeroElements = () => {
  return (
    <HeroContainer id = "home">
        <HeroBackground>
            <VideoBackground autoPlay loop muted src = {Video} type = 'video/mp4' />
        </HeroBackground>
        <HeroContent>
            <HeroH1> HANNAH V KIRBY </HeroH1>
            <HeroP> using data to better the world </HeroP>
        </HeroContent>

    </HeroContainer>
  )
}

export default HeroElements;