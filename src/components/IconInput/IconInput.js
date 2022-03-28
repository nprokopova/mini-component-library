import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const SIZES = {
  small:{
    size: 16,
    border: 1 + 'px',
    fontSize: 14/16 + 'rem',
    paddingLeft: 24 + 'px'
  },
  large:{
    size: 24,
    border: 2 + 'px',
    fontSize: 18/16 + 'rem',
    paddingLeft: 36 + 'px'
  
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  
  return <Wrapper style = {{width: `${width}px`}} size = {SIZES[size].border}><VisuallyHidden>{label}</VisuallyHidden><Input placeholder={placeholder} style = {{fontSize: SIZES[size].fontSize, paddingLeft: SIZES[size].paddingLeft}} ></Input><StyledIcon id = {icon} size = {`${SIZES[size].size}`}></StyledIcon></Wrapper>;
};


const Wrapper = styled.div`

font-family: 'Roboto', sans-seriff;
position: relative;
border-bottom: ${props=>props.size} solid #000000;

}

`
const StyledIcon = styled(Icon)`
position: absolute;
color: ${COLORS.gray700};
bottom: 2px;
pointer-events: none;


`
const Input = styled.input`

 padding-left: 20px;
 border: none;
 line-height: 16px;
 width: 100%;
 color: ${COLORS.gray700};
 font-weight: 700;

&:hover{
  color:black;
  + ${StyledIcon} {
    color: black;
  }
}
&:focus {
  outline-offset: 5px;
  
}
  &::-webkit-input-placeholder { 
  color: ${COLORS.gray500};
  font-weight: 400;
 }
 &:-ms-input-placeholder {
  color: ${COLORS.gray500};
  font-weight: 400;
 }

`


export default IconInput;
