import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  HeaderContainer,
  Container,
  LogoName,
  ContainerLogo,
  // NavBar,
  // NavItem,
  // Item,
} from "./styles";
import { useViewportScroll, useTransform } from "framer-motion";

function Navbar() {
  const [bgColor, setBgColor] = useState("rgb(0,0,0,0.3)");
  const [scrollStarted, setScrollStarted] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  useEffect(
    () =>
      yRange.onChange((v) => {
        console.log(v);
        if (v > 0.3) {
          setScrollStarted(true);
          setBgColor(`rgb(0, 0, 0, ${v})`);
        } else if (v <= 0) {
          setScrollStarted(false);
          setBgColor("rgb(0, 0, 0, 0.3)");
        }
        console.log(bgColor);
      }),
    [yRange]
  );

  return (
    <HeaderContainer
      initial={{ backgroundColor: bgColor }}
      animate={{ backgroundColor: bgColor }}
    >
      <Container>
        <ContainerLogo>
          <Link href="/">
            <LogoName
              initial={{ scale: 1 }}
              animate={{ scale: scrollStarted ? 0.8 : 1 }}
            >
              MyVision
            </LogoName>
          </Link>
        </ContainerLogo>
        {/* <NavBar>
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
        </NavBar> */}
      </Container>
    </HeaderContainer>
  );
}

export default Navbar;
