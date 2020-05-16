/**
 * Absolute imports
 */
import React, { useState } from 'react';
import { AnimatePresence, PanInfo } from 'framer-motion';

/**
 * Materila UI
 */
import { Button } from '@material-ui/core';

/**
 * Components
 */
import { Slider } from '../../UI/Slider';

/**
 * Styles
 */
import {
  Root,
  Media,
  MediaImg,
  Inner,
  Title,
  Price,
  Description,
  Actions,
} from './ShopItemDetails.styles';

export type ShopItemDetailsProps = {
  title: React.ReactNode;
  imageSrc: string;
  images: string[];
  price?: string;
  description?: React.ReactNode;
};

const circulate = (min: number, max: number, value: number) => {
  const rangeSize = max - min;
  return ((((value - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

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

const ShopItemDetails = ({
  title,
  description,
  price,
  imageSrc,
  images,
}: ShopItemDetailsProps) => {
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
    <Root>
      <Media>
        <AnimatePresence initial={false} custom={direction}>
          {images.map((image) => {
            return (
              <MediaImg
                drag="x"
                src={image}
                key={image}
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
            );
          })}
          {/* <MediaImg
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
          /> */}
        </AnimatePresence>
      </Media>
      <Inner>
        <Title>{title}</Title>

        <Price>{price}</Price>

        <Description>{description}</Description>

        <Actions>
          <Button variant="contained" color="primary">
            Add to cart
          </Button>
        </Actions>
      </Inner>
    </Root>
  );
};

export default ShopItemDetails;
