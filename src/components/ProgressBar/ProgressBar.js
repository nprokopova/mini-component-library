/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + "px",
    '--border-radius': 4 + 'px'
  },
  medium: {
    '--height': 12 + "px",
    '--border-radius': 4 + 'px'
  },
  large: {
    '--height': 24 + "px",
    '--border-radius': 8 + 'px',
    '--padding': 4 + 'px'
  }
}

const ProgressBar = ({ value, size }) => {
  let borderRadiusRight = 0 + 'px';
  let borderRadiusValue;
  size === 'small' || size === 'medium'? borderRadiusValue = 4: borderRadiusValue = 8;
  value>=99.5? borderRadiusRight =borderRadiusValue/2 + 'px': value>99.8? borderRadiusRight = borderRadiusValue + 'px': borderRadiusRight = borderRadiusRight;
  let styles = SIZES[size];
  
  return (
  <Wrapper style = {styles} role = "progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
    <Progress value = {value} style = {styles}  borderRadiusRight = {borderRadiusRight}>
      </Progress>
      <VisuallyHidden>{value}</VisuallyHidden>
      </Wrapper>)
};
const Wrapper = styled.div`
  width: 370px;
  height: 100%;
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray15};
  padding: var(--padding);
  border-radius: var(--border-radius);
  overflow: hidden;
  
`
const Progress = styled.div `
  width:${props=>props.value}%;
  max-width: 100%;
  height: var(--height);
  background-color: ${COLORS.primary};
  border-radius:  var(--border-radius) ${props=>props.borderRadiusRight} ${props=>props.borderRadiusRight} var(--border-radius);

`

export default ProgressBar;
