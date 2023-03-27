import React from 'react'
import { Nav, NavbarContainer, NavLogo, 
        NavItem, ResumeContainer,
        Resume, NavMenu, DownloadButton
       } from './NavbarResumeElements'
import ResumeImg from '../../images/resume.jpg'
import resumePDF from '../../images/resume.pdf'
import hvkLogo from '../../images/hvk3.white.svg'

const NavbarResume = () => {


  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <img src = {hvkLogo} width = '50' alt = 'HVK'/> </NavLogo>
          <NavMenu>
            <NavItem>
              <DownloadButton href = {resumePDF} target = "_blank">
                DOWNLOAD PDF
              </DownloadButton>  
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
      <ResumeContainer>
          <Resume src={ResumeImg} />
      </ResumeContainer>
    </>
  )
}

export default NavbarResume;
