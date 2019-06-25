import React from 'react';
import styled from 'styled-components';
import { colors } from '../../template/colors.js';

import { connect } from 'react-redux';

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
  margin: 20px;
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
  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 2.5rem;
  }
  @media (min-width: 1281px){
    font-size: 2.8rem;
  }
`;
const TasksBlock = styled.div`
  width: 100%;
  height: auto;
  padding: 25px;
`;
const Task = styled.div`
  width: 100%;
  min-height: 50px;
  background-color: ${colors.gray};
  box-shadow: 0 0 5px 0 rgba(117,117,117 ,0.6);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20px 0 20px 0;
  ::after {
    content: '';
    position: absolute;
    left: -3px;
    top: 0;
    height: 100%;
    width: 5px;
    background-color: ${props => props.theme};
    box-shadow: -1px 0 5px 0 rgba(117,117,117 ,0.6);
  }
  @media (min-width: 1281px) {
    min-height: 60px;
  }
`;
const TaskContent = styled.h1`
  font-weight: 300;
  font-size: 1.5rem;
  color: ${colors.black};
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.65rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.17rem;
  }
  @media (min-width: 1491px) {
    font-size: 1.8rem;
  }
`;

const theme = {
  blue: colors.blue,
  yellow: colors.yellow,
  green: colors.green,
}


const Board = (props) => {


  return (
    <BoardBlock>

          <ItemBlock theme={theme.blue}>
            <ItemHeader theme={theme.blue}>
              <ItemTitle>
                TO DO
              </ItemTitle>
            </ItemHeader>
            <TasksBlock>
              {props.todos.items.map( item => (
                <Task key={item.id} theme={theme.blue}>
                  <TaskContent>{item.task}</TaskContent>
                </Task>
              ))}
            </TasksBlock>
          </ItemBlock>

          <ItemBlock theme={theme.yellow}>
            <ItemHeader theme={theme.yellow}>
              <ItemTitle>
                IN PROGRESS
              </ItemTitle>
            </ItemHeader>
            <TasksBlock>
              <Task theme={theme.yellow} />
            </TasksBlock>
          </ItemBlock>

          <ItemBlock theme={theme.green}>
            <ItemHeader theme={theme.green}>
              <ItemTitle>
                DONE
              </ItemTitle>
            </ItemHeader>
            <TasksBlock>
              <Task theme={theme.green} />
            </TasksBlock>
          </ItemBlock>


    </BoardBlock>
  )
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    inprog: state.inprog,
    done: state.done,
  }
}

export default connect(mapStateToProps)(Board);