import React from 'react'
import { AuthBtn } from '../../assets/style/Auth.style';
import { btnProps } from '../../models/btnProps';

function AuthButton({path, button}: btnProps ) {
  return (
    <AuthBtn to={path}>{button}</AuthBtn>
  )
}

export default AuthButton;