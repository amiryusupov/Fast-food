import React from 'react'
import {NavbarDiv, NavbarText} from '../../assets/style/Navbar.style'
import { Flex } from '../../assets/style/Flex.style'
function Navbar() {
  return (
    <NavbarDiv>
      <Flex>
        <NavbarText to="/login">Faveo</NavbarText>
      </Flex>
    </NavbarDiv>
  )
}

export default Navbar