import React from "react";
import Link from "next/link";
import {
  HeaderContainer,
  Container,
  LogoName,
  ContainerLogo,
  NavBar,
  NavItem,
  Item,
} from "./styles";

function Navbar() {
  return (
    <HeaderContainer>
      <Container>
        <ContainerLogo>
          <LogoName>MyVision</LogoName>
        </ContainerLogo>
        <NavBar>
          <NavItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Link href="/city/amparo">
              <Item>Sobre</Item>
            </Link>
          </NavItem>
          <NavItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Link href="/">
              <Item>Projetos</Item>
            </Link>
          </NavItem>
          <NavItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <Link href="/">
              <Item>Contato</Item>
            </Link>
          </NavItem>
        </NavBar>
      </Container>
    </HeaderContainer>
  );
}

export default Navbar;
