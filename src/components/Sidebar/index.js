import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <Icon onClick={() => toggleSidebar()}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="projects" onClick={() => toggleSidebar()}>
              Projects
            </SidebarLink>
            <SidebarLink to="about" onClick={() => toggleSidebar()}>
              About me
            </SidebarLink>
            <SidebarLink to="contact" onClick={() => toggleSidebar()}>
              Contact
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
