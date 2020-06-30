import React from "react";
import {
  Container,
  Banner,
  Title,
  Footer,
  Body,
  BackLink,
} from "../../styles/postStyles";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

let easing = [0.175, 0.85, 0.42, 0.96];

const imageVariants = {
  exit: { y: 150, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
};

const textVariants = {
  exit: { y: 100, opacity: 0, transition: { duration: 0.5, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, ease: easing },
  },
};

const backVariants = {
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: easing,
    },
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: easing,
    },
  },
};

function Posts({ postsData }) {
  return (
    <Container initial="exit" animate="enter" exit="exit">
      <Head>
        <title>{postsData.title}</title>
      </Head>
      <Link href="/">
        <BackLink>
          <AiOutlineArrowLeft />
          Voltar
        </BackLink>
      </Link>
      <Banner src={postsData.imageUrl} variants={imageVariants} />
      <Title variants={textVariants}>{postsData.title}</Title>
      <Body
        variants={textVariants}
        dangerouslySetInnerHTML={{ __html: postsData.contentHtml }}
      />
      <Footer variants={backVariants}>Autor: Andre Felipe Rocha</Footer>
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postsData = await getPostData(params.id);
  return {
    props: {
      postsData,
    },
  };
}

export default Posts;
