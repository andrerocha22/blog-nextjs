import React, { useState, useEffect } from "react";
import Head from "next/head";
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import {
  BackgroundPhotos,
  ContainerCards,
  TitleContainer,
  WelcomeTitle,
  SwipeCTA,
  SwipeIcon,
  SwipePageContainer,
} from "./styles";
import Card from "../components/Card";
import { imagesNewYork } from "../data/imageNewYork";
import { imagesToronto } from "../data/imageToronto";
import { wrap } from "@popmotion/popcorn";

const variants = {
  enter: () => {
    return {
      opacity: 0.8,
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

export default function Home() {
  const welcomeTexts = [
    "Bem-Vindo!",
    "Welcome!",
    "Bienvenido!",
    "Bienvenue!",
    "ようこそ!",
    "Benvenuto!",
  ];

  // const welcomeString = Array.from("Bem-Vindo!");
  const [[page, direction], setPage] = useState([0, 0]);

  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);

  useEffect(() => yRange.onChange((v) => console.log(v)), [yRange]);

  const imageIndexNewYork = wrap(0, imagesNewYork.length, page);
  // const imageIndexToronto = wrap(0, imagesToronto.length, page);

  const paginate = (newDirection) => {
    if (page + newDirection < imagesNewYork.length) {
      setPage([page + newDirection, newDirection]);
    } else {
      setPage([0, newDirection]);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      paginate(1);
    }, 5000);
  }, [page]);

  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        {/* <Container>
          <BackgroundPhotos
            key={page}
            imageUrl={imagesNewYork[imageIndexNewYork]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 5 },
            }}
          >
            <TitleContainer>
              {Array.from(
                welcomeTexts[page] ? welcomeTexts[page] : "Welcome!"
              ).map((char, index) => (
                <WelcomeTitle
                  key={index}
                  initial={{ y: 200, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    type: "spring",
                    damping: 16,
                    stiffness: 100,
                    delay: 0.2 * index,
                  }}
                >
                  {char}
                </WelcomeTitle>
              ))}
            </TitleContainer>
            <SwipePageContainer>
              <SwipeIcon src="/down-arrow.svg" />
            </SwipePageContainer>
          </BackgroundPhotos>
        </Container> */}
        <ContainerCards>
          <Card
            title="Pizza"
            subtitle="5 melhores pizzas em NYC"
            description="Onde encontrar as melhores pizzarias em uma das cidades mais famosas do mundo. Contarei sobre minha..."
            imageUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <Card
            title="Pizza"
            subtitle="5 melhores pizzas em NYC"
            description="Onde encontrar as melhores pizzarias em uma das cidades mais famosas do mundo. Contarei sobre minha..."
            imageUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <Card
            title="Pizza"
            subtitle="5 melhores pizzas em NYC"
            description="Onde encontrar as melhores pizzarias em uma das cidades mais famosas do mundo. Contarei sobre minha..."
            imageUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <Card
            title="Pizza"
            subtitle="5 melhores pizzas em NYC"
            description="Onde encontrar as melhores pizzarias em uma das cidades mais famosas do mundo. Contarei sobre minha..."
            imageUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <Card
            title="Pizza"
            subtitle="5 melhores pizzas em NYC"
            description="Onde encontrar as melhores pizzarias em uma das cidades mais famosas do mundo. Contarei sobre minha..."
            imageUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <Card
            title="Pizza"
            subtitle="5 melhores pizzas em NYC"
            description="Onde encontrar as melhores pizzarias em uma das cidades mais famosas do mundo. Contarei sobre minha..."
            imageUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <Card
            title="Pizza"
            subtitle="5 melhores pizzas em NYC"
            description="Onde encontrar as melhores pizzarias em uma das cidades mais famosas do mundo. Contarei sobre minha..."
            imageUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <Card
            title="Pizza"
            subtitle="5 melhores pizzas em NYC"
            description="Onde encontrar as melhores pizzarias em uma das cidades mais famosas do mundo. Contarei sobre minha..."
            imageUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <Card
            title="Pizza"
            subtitle="5 melhores pizzas em NYC"
            description="Onde encontrar as melhores pizzarias em uma das cidades mais famosas do mundo. Contarei sobre minha..."
            imageUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
          <Card
            title="Pizza"
            subtitle="5 melhores pizzas em NYC"
            description="Onde encontrar as melhores pizzarias em uma das cidades mais famosas do mundo. Contarei sobre minha..."
            imageUrl="https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          />
        </ContainerCards>
      </main>
    </div>
  );
}
