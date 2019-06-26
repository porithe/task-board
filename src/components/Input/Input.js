import React from 'react';
import styled from 'styled-components';
import { colors } from '../../template/colors.js';
import { connect } from 'react-redux';

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
  -webkit-appearance: none;
  padding: 0 20px 0 20px;
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
    box-shadow: 0 0 5px 0 ${colors.purple};
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

const theme = {
  purple: colors.purple,
  red: colors.red,
}

const Input = (props) => {

  const serachIdInProps = () => {
    let itemsLength = props.todos.items.length;

    if(itemsLength > 0) {
      return props.todos.items[itemsLength-1].id + 1
    }
    else {
      return 0;
    }
  }

  const [idTodos, setId] = React.useState(serachIdInProps());
  const [taskValue, setTask] = React.useState('');


  const sendTask = (e) => {
    setId( idTodos + 1);

    const itemObject = {
      id: idTodos,
      task: taskValue,
    }

    if (taskValue !== '') {
      props.dispatch({
        type: 'ADD_TODO',
        item: itemObject
      });
    }
    
    setTask(e.target.value = '');
  }
  

  return (
    <InputBlock>
      <Inp theme={theme} value={taskValue} onChange={e => setTask(e.target.value)} placeholder="Start a new project..." />
      <Button onClick={sendTask}>ADD TASK</Button>
    </InputBlock>
  )
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps)(Input);