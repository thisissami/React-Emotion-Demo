import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/core';
import App from './App';

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
      }} />
      <App />
    </>
  ),
  document.getElementById('root')
);
