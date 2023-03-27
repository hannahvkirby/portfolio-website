import React from 'react'
import { SidebarContainer, Icon, CloseIcon,
         SidebarMenu, SidebarLink, SidebarRoute,
         SidebarWrapper }from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
        <Icon onClick = {toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to = "about" onClick = {toggle}> ABOUT </SidebarLink>
                <SidebarLink to = "projects" onClick = {toggle}> PROJECTS </SidebarLink>
                <SidebarLink to = "contact" onClick = {toggle}> CONTACT </SidebarLink>
                <SidebarRoute to = "/resume"> RESUME </SidebarRoute>
            </SidebarMenu>
        </SidebarWrapper>

    </SidebarContainer>
  )
}

export default Sidebar;