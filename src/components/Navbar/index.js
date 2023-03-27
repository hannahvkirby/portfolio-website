import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo ,
         MobileIcon, NavLinks, 
         NavMenu, NavItem,
         NavBtn, NavBtnLink} from './NavbarElements'
import hvkLogo from '../../images/hvk3.white.svg'

const Navbar = ({toggle}) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick = {toggleHome}>
            <img src = {hvkLogo} width = '50' alt = 'HVK'/>
          </NavLogo>
          <MobileIcon onClick = {toggle}>
            <FaBars/>
          </MobileIcon>
          <NavMenu>
          <NavItem>
              <NavLinks to="about"
              smooth={true} duration = {600} spy={true} exact = 'true' offset = {-80}>
                ABOUT ME
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="projects"
              smooth={true} duration = {800} spy={true} exact = 'true' offset = {-80}>
                PROJECTS
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact"
              smooth={true} duration = {800} spy={true} exact = 'true' offset = {-80}>
                CONTACT
              </NavLinks>
            </NavItem>
            <NavBtn>
            <NavBtnLink to='resume'>
              RESUME
            </NavBtnLink>
          </NavBtn>
          </NavMenu>
          
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;