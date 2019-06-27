import React from "react";
import styled from "styled-components";
import { colors } from "../../template/colors.js";

import { connect } from "react-redux";

import EditForm from '../EditForm/EditForm';


const BoardBlock = styled.div`
  width: 100%;
  padding: 30px 0 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    padding: 50px 0 50px 0;
    align-items: flex-start;
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
  @media (min-width: 1281px) {
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
  box-shadow: 0 0 5px 0 rgba(117, 117, 117, 0.6);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 20px 0 20px 0;
  ::after {
    content: "";
    position: absolute;
    left: -3px;
    top: 0;
    height: 100%;
    width: 5px;
    background-color: ${props => props.theme};
    box-shadow: -1px 0 5px 0 rgba(117, 117, 117, 0.6);
  }
  @media (min-width: 1281px) {
    min-height: 60px;
  }
`;
const TaskContent = styled.h1`
  font-weight: 300;
  font-size: 1.5rem;
  color: ${colors.black};
  padding-right: 35px;
  padding-left: 35px;
  word-break: break-all;
  @media (min-width: 481px) and (max-width: 767px) {
    font-size: 1.65rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 1.17rem;
  }
  @media (min-width: 1491px) {
    font-size: 1.8rem;
    padding-right: 45px;
    padding-left: 45px;
  }
`;
const AcceptButton = styled.button`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 2px solid ${props => props.theme};
  cursor: pointer;
  @media (min-width: 1491px) {
    width: 40px;
    height: 40px;
  }
  ::after {
    content: "\f00c";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    font-weight: 700;
    font-size: 1.2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.theme};
    @media (min-width: 1491px) {
      font-size: 1.5rem;
    }
  }
`;
const EditButton = styled.button`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: 2px solid ${props => props.theme};
  cursor: pointer;
  @media (min-width: 1491px) {
    width: 40px;
    height: 40px;
  }
  ::after {
    content: "\f11c";
    font-family: "Font Awesome 5 Free";
    position: absolute;
    font-weight: 700;
    font-size: 1.2rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${props => props.theme};
    @media (min-width: 1491px) {
      font-size: 1.5rem;
    }
  }
`;
const InprogTaskContent = styled(TaskContent)`
  padding-left: 0;
  @media (min-width: 1491px) {
    padding-left: 0;
  }
`;
const DoneTask = styled(Task)`
  @media (min-width: 768px) {
    transition: opacity 0.2s;
    cursor: pointer;
    :hover {
      opacity: 0.6;
    }
  }
`;
const DoneTaskContent = styled(TaskContent)`
  padding-right: 0;
  padding-left: 0;
  @media (min-width: 1491px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const theme = {
  blue: colors.blue,
  yellow: colors.yellow,
  green: colors.green
};

const Board = props => {



  const addToProg = item => {
    props.dispatch({
      type: "ADD_INPROG",
      item: item
    });
    props.dispatch({
      type: "DEL_TODO",
      item: item,
      id: item.id
    });
  };
  const addToDone = item => {
    props.dispatch({
      type: "ADD_DONE",
      item: item
    });
    props.dispatch({
      type: "DEL_INPROG",
      item: item,
      id: item.id
    });
  };
  const delFromDone = item => {
    props.dispatch({
      type: "DEL_DONE",
      item: item,
      id: item.id
    });
  };

  const showEditBlock = (item) => {
    props.dispatch({
      type: 'SHOW',
      item: item,
    })
  }

  return (
    <BoardBlock>
      <ItemBlock theme={theme.blue}>
        <ItemHeader theme={theme.blue}>
          <ItemTitle>TO DO</ItemTitle>
        </ItemHeader>
        <TasksBlock>
          {props.todos.items.map(item => (
            <Task key={item.id} theme={theme.blue}>
              <TaskContent>{item.task}</TaskContent>
              <EditButton theme={theme.blue} onClick={() => showEditBlock(item)} />
              <AcceptButton
                theme={theme.blue}
                onClick={() => addToProg(item)}
              />
            </Task>
          ))}
        </TasksBlock>
      </ItemBlock>

      <ItemBlock theme={theme.yellow}>
        <ItemHeader theme={theme.yellow}>
          <ItemTitle>IN PROGRESS</ItemTitle>
        </ItemHeader>
        <TasksBlock>
          {props.inprog.items.map(item => (
            <Task key={item.id} theme={theme.yellow}>
              <InprogTaskContent>{item.task}</InprogTaskContent>
              <AcceptButton
                theme={theme.yellow}
                onClick={() => addToDone(item)}
              />
            </Task>
          ))}
        </TasksBlock>
      </ItemBlock>

      <ItemBlock theme={theme.green}>
        <ItemHeader theme={theme.green}>
          <ItemTitle>DONE</ItemTitle>
        </ItemHeader>
        <TasksBlock>
          {props.done.items.map(item => (
            <DoneTask
              key={item.id}
              theme={theme.green}
              onClick={() => delFromDone(item)}
            >
              <DoneTaskContent>{item.task}</DoneTaskContent>
            </DoneTask>
          ))}
        </TasksBlock>
      </ItemBlock>

      { props.editBlock.show === true ? <EditForm /> : null }
    </BoardBlock>
  );
};

function mapStateToProps(state) {
  return {
    todos: state.todos,
    inprog: state.inprog,
    done: state.done,
    editBlock: state.editBlock,
  };
}

export default connect(mapStateToProps)(Board);
