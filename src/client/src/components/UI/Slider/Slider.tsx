/**
 * Absolute imports
 */
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';

/**
 * Styles
 */
import { Root } from './Slider.styles';

const imageVariants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const circulate = (min: number, max: number, value: number) => {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export type SliderProps = {
  chilldren?: React.ReactNode;
  onSlide?: (direction: -1 | 1) => void;
  src?: string;
  images: string[];
};

const Slider = ({ chilldren, src, images }: SliderProps) => {
  const [slide, setSlide] = useState(0);
  const [direction, seDirection] = useState(0);

  const paginate = (newDirection: number) => {
    //setPage([page + newDirection, newDirection]);
    seDirection(newDirection);
    setSlide((val) => val + newDirection);
  };

  const handleDragEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo,
  ) => {
    //const swipe = swipePower(offset.x, velocity.x);
    const swipe = offset.x;
    const swipeThreshold = 100;

    if (swipe < -swipeThreshold) {
      paginate(1);
    } else if (swipe > swipeThreshold) {
      paginate(-1);
    }
  };

  const index = circulate(0, images.length, slide);

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          drag="x"
          src={images[index]}
          key={slide}
          custom={direction}
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 200 },
            opacity: { duration: 0.2 },
          }}
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
        />
      </AnimatePresence>
    </>
  );
};

export default Slider;

// https://codesandbox.io/s/framer-motion-path-drawing-drag-and-usetransform-623uf?file=/src/Example.tsx
// https://codesandbox.io/s/framer-motion-image-gallery-pqvx3?file=/src/Example.tsx
// https://codesandbox.io/s/framer-motion-carousel-m2g62
// https://www.framer.com/api/motion/motionvalue/
// https://github.com/framer/motion/issues/421
