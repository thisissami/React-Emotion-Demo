/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';

const getColorSets = (primaryColor, secondaryColor) => ([
  {
    color: primaryColor,
    backgroundColor: secondaryColor,
    borderColor: primaryColor

  }, {
    color: secondaryColor,
    backgroundColor: primaryColor,
    borderColor: secondaryColor
  }
]);

export default ({word='word', primaryColor, secondaryColor}) => {
  const [primarysColor, secondarysColor] = Math.random() > 0.7
    ? ['purple', 'green']
    : ['white', 'black'];

  const [primarySet, secondarySet] = primaryColor
    ? getColorSets(primaryColor, secondaryColor)
    : getColorSets(primarysColor, secondarysColor);

  return (
    <div css={{
      display: 'inline-block',
      margin: 10,
      borderRadius: '50%',
      border: '3px solid',
      padding: 10,
      ...primarySet,
      ':hover': secondarySet
    }}>
      {word}
    </div>
  );
}