/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

const getColorSets = (color1, color2) => ([
  {
    backgroundColor: color1,
    color: color2,
    borderColor: color2
  },
  {
    backgroundColor: color2,
    color: color1,
    borderColor: color1
  }
]);

export default ({ word='word' }) => {
  const [normalColors, hoverColors] = Math.random() > 0.3
    ? getColorSets('white', 'black')
    : getColorSets('purple', 'green');

  return (
    <div css={{
      borderRadius: '50%',
      border: '3px solid',
      fontSize: 20,
      padding: 10,
      display: 'inline-block',
      margin: 10,
      ...normalColors,
      ':hover': hoverColors
    }}>
      {word}
    </div>
  )
};
