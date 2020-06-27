import React, { useState, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import {
  Title,
  Button,
  SubTitle,
  CardContainer,
  ImageCard,
  Description,
  DescriptionText,
} from "./styles";

function Card({ imageUrl, title, subtitle, description }) {
  // const { scrollYProgress } = useViewportScroll();

  const variants = {
    enter: () => {
      return {
        opacity: 0,
      };
    },
    center: () => {
      return {
        opacity: 1,
      };
    },
    exit: () => {
      return {
        opacity: 0,
      };
    },
  };

  const [showDescription, setshowDescription] = useState(false);
  // const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  // useEffect(() => {
  //   yRange.onChange((v) => {
  //     console.log(v);
  //   });
  // }, [yRange]);

  return (
    <CardContainer
      imageUrl={imageUrl}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setshowDescription(true)}
      onHoverEnd={() => setshowDescription(false)}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        opacity: { duration: 2 },
      }}
    >
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
      <Description
        initial={{ opacity: 0 }}
        animate={{ opacity: showDescription ? 1 : 0 }}
      >
        <DescriptionText>{description}</DescriptionText>
        <Button>See more</Button>
      </Description>
    </CardContainer>
  );
}

export default Card;
