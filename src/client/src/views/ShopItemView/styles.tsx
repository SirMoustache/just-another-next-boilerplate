/**
 * Absolute imports
 */
import styled from 'styled-components';

export const Root = styled.section`
  padding-top: 32px;
`;

export const ShopItem = styled.div`
  position: relative;
  display: flex;
  margin-left: 20%;
`;

export const ShopItemMedia = styled.div`
  position: relative;
  align-self: center;
  flex-shrink: 0;
  /* top: 32px;
  left: 0; */
  /* transform: translateX(-50%); */
  /* transform: scale(0.9); */
  margin: 32px;
  width: 40%;
  background-color: #8cccd7;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }
`;

export const ShopItemImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  image-rendering: -webkit-optimize-contrast;
`;

export const ShopItemDetails = styled.div`
  background-color: white;
  min-height: 60vh;
  padding: 32px;
  padding-left: 25%;
  /* padding-left: calc(25% + 32px); */
  /* flex-basis: 50%; */
  margin-left: -25%;
`;

export const ShopItemTitle = styled.h2`
  font-size: 48px;
  margin: 0 0 0.5em;
`;

export const ShopItemDescription = styled.div`
  font-size: 18px;
`;

export const ShopItemActions = styled.div`
  margin-top: 32px;
`;

export const ShopItemPrice = styled.div`
  font-size: 22px;
  margin-bottom: 32px;
`;
