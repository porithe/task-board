import React from 'react';
import styled from 'styled-components';

import Header from './components/Header/Header';
import Input from './components/Input/Input';
import Board from './components/Board/Board';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers/index';
import { loadState, saveState } from './storage/localStorage';
import { throttle } from 'lodash';

const persistedState = loadState();
const store = createStore(
  reducer,
  persistedState
);
store.subscribe(throttle(() => {
  saveState({
    todos: store.getState().todos,
    inprog: store.getState().inprog,
    done: store.getState().done,
  });
}, 1000));

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
