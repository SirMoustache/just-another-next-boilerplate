/**
 * Absolute imports
 */
import styled from 'styled-components';
import { motion } from 'framer-motion';

/**
 * Utils
 */
import { getMinMedia } from '../../../utils/styleUtils';

let easing = [0.6, -0.05, 0.01, 0.99];

const slideLeftToRight = {
  animate: { x: 0, opacity: 1 },
  initial: { x: -200, opacity: 0 },
  exit: { opacity: 0 },
  transition: { delay: 0.2 },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const fadeIn = {
  animate: { opacity: 1 },
  initial: { opacity: 0 },
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const Root = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  ${getMinMedia('md')} {
    flex-direction: row;
    margin-left: 10%;
  }

  ${getMinMedia('lg')} {
    margin-left: 20%;
  }
`;

export const Media = styled(motion.div).attrs(() => ({
  variants: slideLeftToRight,
}))`
  position: relative;
  align-self: center;
  flex-shrink: 0;
  overflow: hidden;
  /* top: 32px;
  left: 0; */
  /* transform: translateX(-50%); */
  /* transform: scale(0.9); */
  width: 100%;

  background-color: #8cccd7;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  ${getMinMedia('md')} {
    margin: 32px;
    width: 40%;
  }
`;

export const MediaImg = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  image-rendering: -webkit-optimize-contrast;
`;

export const Inner = styled(motion.div).attrs({ variants: stagger })`
  background-color: white;
  min-height: 60vh;
  padding: 32px;

  ${getMinMedia('md')} {
    padding-left: 25%;
    /* padding-left: calc(25% + 32px); */
    /* flex-basis: 50%; */
    margin-left: -25%;
  }
`;

export const Title = styled(motion.h2).attrs({ variants: fadeInUp })`
  font-size: 48px;
  margin: 0 0 0.5em;
`;

export const Description = styled(motion.div).attrs({
  variants: fadeInUp,
})`
  font-size: 18px;
`;

export const Actions = styled(motion.div).attrs({ variants: fadeInUp })`
  margin-top: 32px;
`;

export const Price = styled(motion.div).attrs({ variants: fadeInUp })`
  font-size: 22px;
  margin-bottom: 32px;
`;
