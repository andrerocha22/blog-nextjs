import styled from "styled-components";
import { motion } from "framer-motion";

export const ContainerCards = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;
  width: 100vw;
  margin: 0 auto;
  max-width: 1200px;
  padding: 100px 50px;
  transition: background-position 1s ease-in-out;
`;

export const BackgroundPhotos = styled(motion.div)`
  text-align: right;
  position: relative;
  height: 100vh;
  width: 100vw;
  display: flex;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  overflow: hidden;
  background-image: url(${(props) => props.imageUrl});
`;

export const WelcomeTitle = styled(motion.h1)`
  color: white;
  font-weight: bold;
  font-size: 80px;
  width: auto;
  z-index: 2;
  text-align: center;
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.7); /* Black w/opacity/see-through */
  border: 10px solid #f1f1f1;
  padding: 1rem 1.5rem;
`;

export const SwipePageContainer = styled.div`
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translate(-50%, 0);

  display: flex;
  flex-direction: column;
  border-radius: 100%;
  padding: 1rem;
  background-color: #f9f9f955;
`;

export const SwipeIcon = styled.img`
  width: 2rem;
  color: #000;
`;

export const SwipeCTA = styled.h3`
  color: #000;
`;
