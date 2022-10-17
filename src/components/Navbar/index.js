import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements";
import { FaBars } from "react-icons/fa";
import { ReactComponent as MyLogo } from "../../images/logo.svg";

const Navbar = ({ toggleSidebar }) => {
  const [isActive, setIsActive] = useState(false);

  const activeNavbar = () => {
    if (window.scrollY >= 80) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  window.addEventListener("scroll", activeNavbar);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav isActive={isActive}>
        <NavbarContainer>
          <NavLogo to="/" onClick={() => toggleHome()}>
            Franco Juarez
          </NavLogo>
          {/* <div>
            <MyLogo fill="white" transform="scale(0.5)" onClick={() => toggleHome()}/>
          </div> */}
          <MobileIcon isActive={isActive} onClick={() => toggleSidebar()}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Projects
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                About me
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
              >
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
