import React from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';
import Input from './components/Input/Input';

const AppBlock = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App = () => {

  return (
    <AppBlock>
      <Header />
      <Input />
    </AppBlock>
  )
}

export default App;
