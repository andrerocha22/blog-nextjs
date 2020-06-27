import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const CardContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 400px;
  border-radius: 1.2rem;
  padding: 1rem;
  background-image: url(${(props) => props.imageUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Button = styled.button`
  color: #2b2b2b;
  font-weight: 700;
  background-color: #f9f9f9;
  padding: 5px 8px;
  border: none;
  border-radius: 8px;
  width: fit-content;
  margin-top: 8px;
  margin-left: auto;
`;

export const Description = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 50%;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  padding: 1rem;
  justify-content: center;
  align-content: center;
  background-color: #777777ee;
  border-radius: 0 0 1.2rem 1.2rem;
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
`;

export const SubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
`;

export const Title = styled.h4`
  font-weight: 400;
  color: #ffffff;
`;

export const ImageCard = styled.img`
  width: 300px;
`;
