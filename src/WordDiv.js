/** @jsx jsx */
import React, { useState } from 'react';
import { jsx, css } from '@emotion/core';
import styled from '@emotion/styled';

const Div = styled('div')({
  backgroundColor: 'purple',
  border: '20px solid'
})

const getColorSet = (primary, secondary) => ({
  color: primary,
  borderColor: primary,
  backgroundColor: secondary
});

const getColorSetPair = (primary, secondary) => ([
  getColorSet(primary, secondary),
  getColorSet(secondary, primary)
])

export default ({ className }) => {

  const [primaryColorSet, secondaryColorSet] = Math.random() < 0.7
    ? getColorSetPair('black', 'white')
    : getColorSetPair('magenta', 'lightgreen')

  return (
    <>
      <Div > word 2 </Div>
      <div className={className} css={{
        display: 'inline-block',
        border: '3px solid',
        borderRadius: '50%',
        margin: 10,
        padding: 10,
        ...primaryColorSet,
        ':hover': secondaryColorSet
      }}>
        word
      </div>
    </>
  )
};

