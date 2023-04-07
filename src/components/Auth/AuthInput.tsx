import React from 'react'
import { AuthInput } from '../../assets/style/Auth.style';
import { inputProps } from '../../models/inputProps';

function Input({input, type}: inputProps) {
  return (
    <AuthInput required placeholder={input} type={type}/>
  )
}

export default Input;