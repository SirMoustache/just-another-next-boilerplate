/**
 * Absolute imports
 */
import styled from 'styled-components';

export const Root = styled.section``;

export const ShopItem = styled.div`
  position: relative;
  padding-left: 30%;
`;

export const ShopItemMedia = styled.div`
  position: absolute;
  width: 300px;
  height: 500px;
  background-color: #8cccd7;
  top: 32px;
  transform: translateX(-50%);
`;

export const ShopItemDetails = styled.div`
  background-color: white;
  min-height: 60vh;
  padding: 32px;
  padding-left: calc(300px / 2 + 32px);
`;

export const ShopItemTitle = styled.h2`
  font-size: 48px;
  margin: 0 0 0.5em;
`;

export const ShopItemDescription = styled.div`
  font-size: 18px;
`;

export const ShopItemActions = styled.div``;

export const ShopItemPrice = styled.div`
  font-size: 22px;
  margin-bottom: 32px;
`;

export const ErrorCode = styled.h1`
  text-align: center;
  font-size: 100px;
  margin: 0 0 16px;
  font-weight: 700;
`;

export const ErrorDescription = styled.h2`
  text-align: center;
  font-size: 32px;
  margin: 0 0 16px;
  font-weight: 400;
`;
