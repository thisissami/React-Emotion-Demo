/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import { feelingRGBs } from '../emotionalConsts';

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

const getColorSetFromEmotion = (feeling) => {
  const rgb = feelingRGBs[feeling];
  const [r, g, b] = rgb;
  const flippedRgb = [255-r, 255-g, 255-b];
  return getColorSets(`rgb(${rgb})`, `rgb(${flippedRgb})`);
}

export default ({ feeling, xFactor }) => {
  const [normalColors, hoverColors] = getColorSetFromEmotion(feeling);

  return (
    <div css={{
      borderRadius: '50%',
      border: '3px solid',
      fontSize: 20*xFactor,
      padding: 10,
      display: 'inline-block',
      margin: 10,
      ...normalColors,
      ':hover': hoverColors
    }}>
      {feeling}
    </div>
  )
};
