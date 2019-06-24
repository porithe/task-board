import React from 'react';
import styled from 'styled-components';
import { colors } from '../../template/colors.js';

const InputBlock = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;
const Inp = styled.input`
  width: 200px;
  height: 40px;
  background-color: transparent;
  color: ${colors.purple};
  border: 1px solid ${colors.purple};
  border-radius: 50px 50px;
  text-align: center;
  font-weight: 300;
  font-size: 1.1rem;
  transition: box-shadow .3s;
  ::placeholder {
    color: ${colors.purple};
    opacity: 0.7;
  }
  :hover {
    box-shadow: 0 0 5px 0 ${colors.purple};
  }
  :focus {
    box-shadow: 0 0 5px 0 ${colors.purple};
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 240px;
    height: 50px;
    font-size: 1.3rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 280px;
    height: 55px;
    font-size: 1.6rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 300px;
    height: 55px;
    font-size: 1.6rem;
  }
  @media (min-width: 1281px) {
    width: 320px;
    height: 60px;
    font-size: 1.8rem;
  }
`;
const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: transparent;
  color: ${colors.purple};
  border: 1px solid ${colors.purple};
  border-radius: 25px 25px;
  text-align: center;
  margin-left: 20px;
  font-weight: 400;
  font-size: 0.9rem;
  transition: .4s;
  cursor: pointer;
  position: relative;
  transition: .3s;
  z-index: 1;
  :hover {
    color: ${colors.white};
  }
  ::after {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    
    transition: .3s;
    z-index: -1;
  }
  :hover::after {
    border-radius: 25px 25px;
    width: 100%;
    background-color: ${colors.purple};
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 120px;
    height: 50px;
    font-size: 1.1rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 135px;
    height: 55px;
    font-size: 1.2rem;
    border-radius: 50px 50px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 145px;
    height: 55px;
    font-size: 1.3rem;
    border-radius: 50px 50px;
  }
  @media (min-width: 1281px) {
    width: 155px;
    height: 60px;
    font-size: 1.4rem;
    border-radius: 50px 50px;
  }
`;

const Input = () => {

  return (
    <InputBlock>
      <Inp placeholder="Start a new project..." />
      <Button>ADD TASK</Button>
    </InputBlock>
  )
}

export default Input;