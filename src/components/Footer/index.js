import React from 'react'
import {FooterContainer, FooterWrapper, 
        FooterLinksContainer, FooterLink,
        FooterLinksWrapper, FooterTitle,
        MadeWithWrapper, MadeWithText,
        IconWrapper
       } from './FooterElements'
import { AiFillGithub , AiFillLinkedin, 
         AiOutlineMail } from 'react-icons/ai'
import { FaReact } from 'react-icons/fa'


function Footer() {



  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
  
    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };

  return (
    <>
      <FooterContainer id = "contact">
        <FooterWrapper>
          <FooterLinksContainer>
            <FooterTitle>
              CONTACT ME
            </FooterTitle>
            <FooterLinksWrapper>
              <FooterLink>
                  <Mailto email="hvk@kirbys.org" subject="" body="">
                    <AiOutlineMail color = 'white'/>
                  </Mailto>
              </FooterLink>
              <FooterLink>
                <a href='https://github.com/hannahvkirby' target="_blank" rel="noreferrer">
                  <AiFillGithub color = 'white'/>
                </a>
              </FooterLink>
              <FooterLink>
                <a href = 'https://www.linkedin.com/in/hannah-kirby-072b60163/' target="_blank" rel="noreferrer">
                  <AiFillLinkedin color = 'white'/>
                </a>
              </FooterLink>
            </FooterLinksWrapper>
          </FooterLinksContainer>
        </FooterWrapper>
        <MadeWithWrapper>
          <MadeWithText>
            made  with 
          </MadeWithText>
          <IconWrapper>
            <a href='https://reactjs.org/' target="_blank" rel="noreferrer">
              <FaReact color = '#61DBFB'/>
            </a>
          </IconWrapper>
        </MadeWithWrapper>
      </FooterContainer>
    </>
  )
}

export default Footer;