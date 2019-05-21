/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

const containerCSS = {
  backgroundColor: '#FFC0CB',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  textAlign: 'center',
};


function App() {
  return (
    <main css={containerCSS}>
      <h1 css={{fontSize: 50}}>
        Let's get <strong><u>EMOTIONAL</u></strong>!!!1!1!!one!
      </h1>

      <section>
        {/* buttons go here */}
        <button>
          Create a cool DIV
        </button>
      </section>

      <section>
        {/* cool divs go here */}
      </section>
    </main>
  );
}

export default App;
