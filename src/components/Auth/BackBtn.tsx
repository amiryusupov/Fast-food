import React from 'react'
import { BackButton } from '../../assets/style/Auth.style';
import { btnProps } from '../../models/btnProps';

function BackBtn({path, button}: btnProps) {
  return (
    <BackButton to={path}>{button}</BackButton>
  )
}

export default BackBtn;