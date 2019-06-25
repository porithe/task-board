import React from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Board from './components/Board/Board';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';

const store = createStore(reducer);

const AppBlock = styled.div`
  width: 100%;
  min-height: 100vh;
`;

const App = () => {

  return (
    <Provider store={store}>
      <AppBlock>
        <Header />
        <Input />
        <Board />
      </AppBlock>
    </Provider>
  )
}

export default App;
