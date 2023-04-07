import React from 'react'
import { AuthBtn, AuthDiv, AuthTitle, BackButton } from '../../assets/style/Auth.style'
import { Flex } from '../../assets/style/Flex.style'
import Input from '../../components/Auth/AuthInput';

function Login() {
  return (
    <AuthDiv>
      <Flex direction="column">
        <AuthTitle>Login</AuthTitle>
        <Input input="Email" type="email"></Input>
        <Input input="Password" type="password"></Input>
        <AuthBtn to="/">Login</AuthBtn>
        <BackButton to="/register">Back to Register</BackButton>
      </Flex>
    </AuthDiv>
  )
}

export default Login;