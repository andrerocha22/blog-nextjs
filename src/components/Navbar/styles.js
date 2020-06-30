import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled(motion.header)`
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  position: fixed;
  align-items: center;
  box-sizing: content-box;
  background: #000;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 72px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding-left: 1.2rem;
    padding-right: 1rem;
    align-items: center;
    justify-content: center;
  }
`;

export const LogoName = styled(motion.h1)`
  text-align: center;
  align-self: center;
  color: #f9f9f9;
  cursor: pointer;
`;

export const ContainerLogo = styled.div`
  display: flex;
`;

export const NavBar = styled.ul`
  display: flex;
`;

export const NavItem = styled(motion.li)`
  align-self: center;
  list-style: none;
  margin: 0 1rem;
  font-size: 1.3rem;
`;

export const Item = styled.a`
  color: #f9f9f9;
  text-decoration: none;
`;
