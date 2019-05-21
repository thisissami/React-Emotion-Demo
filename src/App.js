/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
// import { feelings } from './emotionalConsts';
// what will this^ be used for?

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

const App = () => {
  return (
    <main css={containerCSS}>
      <h1 css={{fontSize: 50}}>
        Let's get <strong><u>EMOTIONAL</u></strong>!!!1!1!!one!
      </h1>

      <section>
        {/* buttons go here */}
        <button>
          Create a cool word DIV
        </button>
      </section>

      <section>
        {/* cool word divs go here */}
      </section>
    </main>
  );
}

export default App;







// import Slider from 'react-input-slider';

// const rotation = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;

// const [{x, y}, setXY] = useState({x:1,y:0});

// <Slider
//   css={{marginTop: 20}}
//   axis="xy"
//   x={x}
//   y={y}
//   xmax={8}
//   ystep={0.2}
//   ymax={12}
//   xstep={0.1}
//   onChange={newPos => setXY(newPos)}
// />

// {divs.map(i => <WordDiv key={i} css={{
//   fontSize: 20*x,
//   animation: `${rotation} infinite ${y}s linear`
// }}/>)}
