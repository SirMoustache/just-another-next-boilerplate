/**
 * Absolute imports
 */
import React from 'react';

/**
 * Components
 */
import { Container } from '../UI/Container';

/**
 * Styles
 */
import { Root, Header, Actions, Body } from './styles';

const HomeHero = () => {
  return (
    <Root>
      <Container>
        <Header>Home page Hero</Header>
        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium,
          tempora culpa expedita facere rem quam nostrum assumenda voluptates
          veritatis ipsum molestiae.
        </Body>
        <Actions>
          <button>Obey!</button>
        </Actions>
      </Container>
    </Root>
  );
};

export default HomeHero;
