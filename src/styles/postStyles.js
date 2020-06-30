import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;

export const Banner = styled(motion.img)`
  height: 500px;
  object-fit: cover;
`;

export const Title = styled(motion.h1)`
  font-size: 2rem;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #2b2b2b;
`;

export const Body = styled(motion.p)`
  font-size: 1.2rem;
  text-align: justify;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #2b2b2b;
`;

export const BackLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #2b2b2b;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 1rem;
  width: fit-content; 
`;

export const Footer = styled(motion.div)`
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #2b2b2b;
`;
