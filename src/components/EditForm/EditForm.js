import React from 'react'
import styled, { keyframes } from "styled-components";
import { colors } from "../../template/colors.js";

import { connect } from "react-redux";


const AnimationOne = keyframes`
  0% {
    width: 0;
    height: 110px;
    opacity: 0;
  }
  100% {
    width: 320px;
    height: 110px;
    opacity: 1;
  }
`;
const AnimationTwo = keyframes`
  0% {
    width: 0;
    height: 170px;
    opacity: 0;
  }
  100% {
    width: 430px;
    height: 170px;
    opacity: 1;
  }
`;
const AnimationThree = keyframes`
  0% {
    width: 0;
    height: 180px;
    opacity: 0;
  }
  100% {
    width: 440px;
    height: 180px;
    opacity: 1;
  }
`;
const AnimationFour = keyframes`
  0% {
    width: 0;
    height: 200px;
    opacity: 0;
  }
  100% {
    width: 460px;
    height: 200px;
    opacity: 1;
  }
`;
const FormAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const EditBlock = styled.div`
  width: 320px;
  height: 110px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;
  background-color: ${colors.purple};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px;
  animation: ${AnimationOne} 1s 0.2s both;
  @media (min-width: 481px) and (max-width: 767px) {
    width: 430px;
    height: 170px;
    animation: ${AnimationTwo} 1s 0.2s both;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 440px;
    height: 180px;
    animation: ${AnimationThree} 1s 0.2s both;
  }
  @media (min-width: 1025px) {
    width: 460px;
    height: 200px;
    animation: ${AnimationFour} 1s 0.2s both;
  }
`;
const ExitButton = styled.button`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  ::before {
    width: 30px;
    height: 3px;
    content: '';
    position: absolute;
    top: 12px;
    left: 0;
    transform: rotate(45deg);
    background-color: ${colors.white};
  }
  ::after {
    width: 30px;
    height: 3px;
    content: '';
    position: absolute;
    top: 12px;
    right: 0;
    transform: rotate(135deg);
    background-color: ${colors.white};
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 40px;
    height: 40px;
    top: 15px;
    right: 15px;

    ::before {
    width: 40px;
    top: 18px;
    left: 0;
    }
    ::after {
      width: 40px;
      top: 18px;
      right: 0;
    }
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 40px;
    height: 40px;
    top: 15px;
    right: 15px;
    ::before {
    width: 40px;
    top: 18px;
    left: 0;
    }
    ::after {
      width: 40px;
      top: 18px;
      right: 0;
    }
  }
  @media (min-width: 1025px) {
    width: 40px;
    height: 40px;
    top: 15px;
    right: 15px;
    ::before {
    width: 40px;
    top: 18px;
    left: 0;
    }
    ::after {
      width: 40px;
      top: 18px;
      right: 0;
    }
  }
`;
const EditInput = styled.input`
  width: 170px;
  height: 45px;
  background-color: transparent;
  color: ${colors.white};
  border: 2px solid ${colors.white};
  border-radius: 50px 50px;
  padding: 0 20px 0 20px;
  margin-top: 15px;
  text-align: center;
  font-size: 1.3rem;
  animation: ${FormAnimation} 0.5s 1.2s both;
  @media (min-width: 481px) and (max-width: 767px) {
    width: 220px;
    height: 50px;
    font-size: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 240px;
    height: 50px;
    font-size: 1.6rem;
  }
  @media (min-width: 1025px) {
    width: 260px;
    height: 55px;
    font-size: 1.7rem;
  }
`;
const EditButton = styled.button`
  width: 75px;
  height: 45px;
  background-color: transparent;
  color: ${colors.white};
  border: 2px solid ${colors.white};
  border-radius: 20px 20px;
  margin-left: 15px;
  margin-top: 15px;
  font-size: 1.3rem;
  cursor: pointer;
  animation: ${FormAnimation} 0.5s 1.2s both;
  @media (min-width: 481px) and (max-width: 767px) {
    width: 95px;
    height: 50px;
    font-size: 1.5rem;
    border-radius: 25px 25px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100px;
    height: 50px;
    font-size: 1.6rem;
  }
  @media (min-width: 1025px) {
    width: 110px;
    height: 55px;
    font-size: 1.7rem;
  }
`;


const EditForm = (props) => {

  const hideEditBlock = () => {
    props.dispatch({
      type: 'HIDE',
    })
  }

  return (
    <EditBlock>
      <ExitButton onClick={() => hideEditBlock()}></ExitButton>
      <EditInput />
      <EditButton>EDIT</EditButton>
    </EditBlock>
  )
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(EditForm);
