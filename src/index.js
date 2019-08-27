import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';
import App from './App';
import AppWithTrulyCoolWordDivs from './AppWithTrulyCoolWordDivs';

ReactDOM.render(
  (
    <>
      <Global styles={{
        body: {
          margin: 0,
        },
        '*': {
          fontFamily: "'Yellowtail', cursive"
        },
        button: {
          fontFamily: 'Roboto'
        }
      }} />
      <AppWithTrulyCoolWordDivs />
    </>
  ),
  document.getElementById('root')
);
