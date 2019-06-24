import React from 'react'
import styled from 'styled-components';
import { colors } from '../../template/colors.js';

const HeaderBlock = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0 10px 0;
  @media (min-width: 1025px) {
    padding: 50px 0 20px 0;
  }
`;
const HeaderText = styled.h1`
  font-weight: 300;
  color: ${colors.purple};
  font-size: 2.8rem;
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 4rem;    
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 4.6rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 5rem;
  }
  @media (min-width: 1281px) {
    font-size: 5.8rem;
  }
`;

const Header = () => {

  return (
    <HeaderBlock>
      <HeaderText>TASK BOARD</HeaderText>
    </HeaderBlock>
  )
}

export default Header;