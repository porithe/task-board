import React from 'react';
import styled from 'styled-components';
import { colors } from '../../template/colors.js';

const BoardBlock = styled.div`
  padding: 30px 0 30px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 50px 0 50px 0;
  }
`;
const ItemBlock = styled.div`
  width: 300px;
  min-height: 350px;
  border: 2px solid ${props => props.theme};
  @media (min-width: 481px) and (max-width: 767px) {
    width: 400px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 250px;
    margin: 10px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 300px;
    margin: 0;
  }
  @media (min-width: 1281px) and (max-width: 1490px) {
    width: 350px;
    min-height: 400px;
    margin: 0;
  }
  @media (min-width: 1491px) {
    width: 450px;
    min-height: 450px;
    margin: 0;
  }
`;
const ItemHeader = styled.div`
  height: 60px;
  width: 100%;
  background-color: ${props => props.theme};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 481px) and (max-width: 767px) {
    height: 70px;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    height: 75px;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    height: 80px;
  }
  @media (min-width: 1281px) {
    height: 85px;
  }
`;
const ItemTitle = styled.div`
  color: ${colors.white};
  font-size: 2.2rem;
  font-weight: 300;
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 2.6rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 2.3rem;
  }
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1281px){
    font-size: 2.8rem;
  }
`;
const theme = {
  blue: colors.blue,
  yellow: colors.yellow,
  green: colors.green,
}


const Board = () => {

  const items = [
    {
      title: 'TO DO',
      color: theme.blue,
    },
    {
      title: 'IN PROGRESS',
      color: theme.yellow,
    },
    {
      title: 'DONE',
      color: theme.green,
    }
  ];

  return (
    <BoardBlock>

      {
        items.map( item => (
          <ItemBlock theme={item.color}>
            <ItemHeader theme={item.color}>
              <ItemTitle>
                {item.title}
              </ItemTitle>
            </ItemHeader>
          </ItemBlock>
        ))
      }


    </BoardBlock>
  )
}

export default Board;