import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  let maxWidthValue = displayedValue.length/16*100+90;
  return (
    <Wrapper><Dropdown value={value} onChange={onChange}>
    {children} 
  </Dropdown><Presentational><p>{displayedValue}</p><Icon id = "chevron-down" size = {24} style = {{paddingLeft: '10px'}}></Icon></Presentational></Wrapper>
  );
};


const Wrapper = styled.div`
  position: relative;
  width: max-content;
  
  
`
const Dropdown = styled.select`
  position: absolute;
  opacity:0;
  
  width: 100%;
  height: 100%;
  appearance:none;
 
 
`
const Presentational = styled.div`
display: flex;
justify-content: space-between;
border-radius: 8px;
align-items: center;
padding: 12px 16px;
padding-right: 10px;
font-size: 1rem;
background-color: ${COLORS.transparentGray15};
color: ${COLORS.gray700};

${Dropdown}:hover + & {
  color: black;
}
${Dropdown}:focus + & {
  outline: 1px dotted #212121;
  outline: 5px auto -webkit-focus-ring-color;
}
`
export default Select;
