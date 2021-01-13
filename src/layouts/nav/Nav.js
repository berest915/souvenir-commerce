import React from 'react'
import { Wrapper } from './NavStyle'
import logo from "../../img/main-logo.png"

const Nav = () => {
  return (
    <Wrapper>
      <img className='logo' src={logo} />
    </Wrapper>
  )
}

export default Nav
