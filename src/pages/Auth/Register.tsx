import React from 'react'
import { AuthBtn, AuthDiv, AuthTitle, BackButton } from '../../assets/style/Auth.style'
import { Flex } from '../../assets/style/Flex.style'
import Input from '../../components/Auth/AuthInput';

function Register() {
  return (
    <AuthDiv>
      <Flex direction="column">
        <AuthTitle>Register</AuthTitle>
        <Input input="Email" type="email"/>
        <Input input="Password" type="password"/>
        <Input input="Name" type="text"/>
        <Input input="Surname" type="text"/>
        <Input input="Birthday" type="date"/>
        <Input input="Phone" type="phone"/>
        <AuthBtn to="/">Register</AuthBtn>
        <BackButton to="/login">Back to Login</BackButton>
      </Flex>
    </AuthDiv>
  )
}

export default Register;