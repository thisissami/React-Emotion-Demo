/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import Div from './Div';
import { feelingRGBs } from './emotionalConsts';

const getColorsFromEmotion = (emotion) => {
  const rgb = feelingRGBs[emotion];
  const [r, g, b] = rgb;
  const flippedRgb = [255-r, 255-g, 255-b];
  const cssRgb = `rgb(${rgb})`
  const cssFlipped = `rgb(${flippedRgb})`
  return [cssRgb, cssFlipped];
}


export default ({emotion}) => {

  // based off emotion, determine color set
  const [primaryColor, secondaryColor] = getColorsFromEmotion(emotion);

  return (
    <Div word={emotion} primaryColor={primaryColor} secondaryColor={secondaryColor} />
  );
}