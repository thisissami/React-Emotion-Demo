/** @jsx jsx */
import React, { useState } from 'react';
import { jsx } from '@emotion/core';
import Slider from 'react-input-slider';
import WordDiv from './WordDiv';
import EmotionDiv from './EmotionDiv';
import { feelings } from '../emotionalConsts';

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
  const [wordDivs, setWordDivs] = useState([]);
  const [inputWords, setInputWords] = useState([]);
  const [inputValue, setInputValue] = useState(undefined);
  const [x, setX] = useState(1);

  return (
    <main css={containerCSS}>
      <h1 css={{fontSize: 50}}>
        Let's get <strong><u>EMOTIONAL</u></strong>!!!1!1!!one!
      </h1>

      <section css={{
        button: {
          margin: 5
        }
      }}>
        <button onClick={() => setWordDivs([...wordDivs, <WordDiv key={wordDivs.length}/>])}>
          Create a cool DIV
        </button>
        <input
          placeholder="Word you wanna display..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={() => {
          setInputWords([...inputWords, inputValue])
        }}>
          Create a cool WORD DIV
        </button>
      </section>

      <section>
        {wordDivs}
      </section>

      <section>
        {inputWords.map(word => {
          const isWordEmotion = feelings.find(feeling => feeling === word);
          const component = isWordEmotion
            ? <EmotionDiv key={`w${inputWords.length}`} feeling={word} xFactor={x}/>
            : <WordDiv key={`w${inputWords.length}`} word={word}/>;
          return component;
        })}
      </section>

      <Slider
        css={{marginTop: 20}}
        axis="x"
        x={x}
        xmax={8}
        xstep={0.1}
        onChange={newPos => { setX(newPos.x); console.log(newPos.x); }}
      />
    </main>
  )
};

// <img src={logo} css={css`
// animation: ${rotation} infinite 0.25s linear;
// height: 40vmin;
// pointer-events: none;
// `} alt="logo" />

// const rotation = keyframes`
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// `;


export default App;
