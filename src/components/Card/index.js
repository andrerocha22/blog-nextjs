import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Title,
  Button,
  SubTitle,
  CardContainer,
  Description,
  DescriptionText,
  BlackBackground,
} from "./styles";

function Card({ imageUrl, title, subtitle, description, id }) {
  const [showDescription, setshowDescription] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    initial: { scale: 0.96, y: 30, opacity: 0 },
    visible: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.5 * Math.random(),
        duration: 0.5,
        ease: [0.48, 0.15, 0.25, 0.96],
      },
    },
    hidden: {
      opacity: 0,
    },
    exit: {
      scale: 0.6,
      y: 100,
      opacity: 0,
      delay: 0.5 * Math.random(),
      transition: { duration: 0.5, ease: [0.48, 0.15, 0.25, 0.96] },
    },
  };

  return (
    <CardContainer
      ref={ref}
      initial="initial"
      animate={controls}
      exit="exit"
      variants={variants}
      imageUrl={imageUrl}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setshowDescription(true)}
      onHoverEnd={() => setshowDescription(false)}
    >
      <BlackBackground>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </BlackBackground>

      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: showDescription ? 1 : 0 }}
      >
        <DescriptionText>{description}</DescriptionText>
        <Link scroll={false} href={"/posts/[id]"} as={`/posts/${id}`}>
          <Button whileHover={{ backgroundColor: "#34C4F2", scale: 1.1 }}>
            Ver mais
          </Button>
        </Link>
      </Description>
    </CardContainer>
  );
}

export default Card;
