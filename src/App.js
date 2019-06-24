import React from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Board from './components/Board/Board';

const AppBlock = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App = () => {

  return (
    <AppBlock>
      <Header />
      <Input />
      <Board />
    </AppBlock>
  )
}

export default App;
