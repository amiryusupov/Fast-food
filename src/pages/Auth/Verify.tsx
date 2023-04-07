import React from 'react'
import { AuthBtn, AuthDiv, AuthTitle, BackButton } from '../../assets/style/Auth.style'
import { Flex } from '../../assets/style/Flex.style'
import Input from '../../components/Auth/AuthInput';

function Verify() {
  return (
    <AuthDiv>
      <Flex direction='column'>
        <AuthTitle>Verify email</AuthTitle>
        <Input input="Code" type="password"/>
        <AuthBtn to="/">Confirm</AuthBtn>
        <BackButton to="/resend">Resend code</BackButton>
      </Flex>
    </AuthDiv>
  )
}

export default Verify;