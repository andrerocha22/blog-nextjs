import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";

import { motion } from "framer-motion";

import {
  ContainerHero,
  BackgroundPhotos,
  ContainerCards,
  CardsList,
  TitleContainer,
  WelcomeTitle,
  SwipeCTA,
  SwipeIcon,
  SwipePageContainer,
  ArticlesTitle,
} from "../styles/homeStyles";
import Card from "../components/Card";
import { imagesNewYork } from "../data/imageNewYork";
import { imagesToronto } from "../data/imageToronto";
import { wrap } from "@popmotion/popcorn";

const variants = {
  enter: () => {
    return {
      opacity: 0.5,
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

function Home({ posts }) {
  const welcomeTexts = [
    "Bem-Vindo!",
    "Welcome!",
    "Bienvenido!",
    "Bienvenue!",
    "ようこそ!",
    "Benvenuto!",
  ];

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndexNewYork = wrap(0, imagesNewYork.length, page);
  const imageIndexToronto = wrap(0, imagesToronto.length, page);

  const paginate = (newDirection) => {
    if (page + newDirection < imagesNewYork.length) {
      setPage([page + newDirection, newDirection]);
    } else {
      setPage([0, newDirection]);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      paginate(1);
    }, 5000);
  }, [page]);

  const handleScrollPage = () => {
    document.querySelector("#cards").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
    >
      <Head>
        <title>MyVision</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <ContainerHero>
          <BackgroundPhotos
            key={page}
            imageUrl={imagesNewYork[imageIndexNewYork]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 1 },
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
            <SwipePageContainer whileHover={{ backgroundColor: "#3b3b3b" }} v>
              <SwipeIcon
                src="/down-arrow.svg"
                onClick={() => handleScrollPage()}
              />
            </SwipePageContainer>
          </BackgroundPhotos>
        </ContainerHero>

        <ContainerCards id="cards">
          <ArticlesTitle
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            PUBLICAÇÕES
          </ArticlesTitle>
          <CardsList>
            {posts.map((post) => (
              <Card
                key={post.id}
                id={post.id}
                title={post.title}
                subtitle="5 melhores pizzas em NYC"
                description={post.description}
                imageUrl={post.imageUrl}
              />
            ))}
          </CardsList>
        </ContainerCards>
      </main>
    </motion.div>
  );
}

export async function getStaticProps() {
  const posts = await getSortedPostsData();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
