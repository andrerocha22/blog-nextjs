import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.header`
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  display: flex;
  position: fixed;
  align-items: center;
  box-sizing: content-box;
  background: rgb(0, 212, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 212, 255, 1) 0%,
    rgba(189, 13, 161, 1) 51%,
    rgba(190, 0, 246, 1) 100%,
    rgba(190, 0, 246, 1) 100%
  );
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
  }
`;

export const LogoName = styled.h1`
  text-align: center;
  align-self: center;
  color: #f9f9f9;
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
