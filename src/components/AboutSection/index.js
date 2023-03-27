import React, { useState } from 'react'
import { AboutContainer, AboutWrapper, 
         AboutRow, Title, Blurb, 
         Column1, Column2, 
         TextWrapper, ImageWrapper, 
         Image, CatPics, //CCWebsite,
         Fade
        } from './AboutElements'
import Profile from '../../images/profile.jpg'
import Katz from '../../images/katz.jpg'
//import CCLogo from '../../images/CCLogo.png'
const AboutSection = () => {

  const [hover, setHover] = useState(false); 
  const [hoverImg, setHoverImg] = useState(); 


  const onHoverCat = (e) => {
    e.preventDefault();
    setHover(true); 
    setHoverImg(Katz)
  };

  // const onHoverCC = (e) => {
  //   e.preventDefault();
  //   setHover(true); 
  //   setHoverImg(CCLogo)
  // };

  const onHoverOver = (e) => {
    e.preventDefault(); 
    setHover(false); 
  };

  // <CCWebsite 
  //   onMouseEnter={(e) => onHoverCC(e)}
  //   onMouseLeave={(e) => onHoverOver(e)}
  //   href = "https://www.thecottagecats.com/"
  //   > (like this one)
  // </CCWebsite>


  return (
    <>
      <AboutContainer id = "about">
        <AboutWrapper>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <Title>Hey! I'm Hannah.</Title>
                <Blurb> 
                My goal is to help people understand their data better. 
                I love the process of taking a dataset from a pile of 
                information to useful insight. I graduated in May of 2022
                with my BS in Statistics & Computer Science and have spent 
                my time since freelancing and working on various projects 
                - check some of them out below! I also enjoy website 
                building, tutoring computer science students, and hanging out with my cats 
                  <CatPics 
                    onMouseEnter={(e) => onHoverCat(e)}
                    onMouseLeave={(e) => onHoverOver(e)}
                    > Ollie and Finn. 
                  </CatPics>
                </Blurb>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImageWrapper>
              {hover && <Fade>
                <Image 
                src = {hoverImg}
                />
              </Fade>}
              {!hover && <Fade>
                <Image 
                src = {Profile}
                />
              </Fade>}
              </ImageWrapper>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  )
}

export default AboutSection;