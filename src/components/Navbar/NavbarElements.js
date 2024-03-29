import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.div`
  margin-top: -80px;
  height: ${({isActive}) => (isActive? '60px': '80px')}};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: rem;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({isActive}) => (isActive? 'rgba(0, 0, 0, 0.2)': 'transparent')}};
  box-shadow: ${({isActive}) => (isActive? '0 0 10px rgba(0,0,0,0.1)': '')}};
  transition: 0.8s all ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkS)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: ${({isActive}) => (isActive? '1.35rem': '1.8rem')}};
    cursor: pointer;
    color: white;
    transition: 0.8s all ease;
  };
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  };
`

export const NavItem = styled.li`
  height: 60px;
`

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active{
    border-bottom: 3px solid #00d8ff;
  };
`

