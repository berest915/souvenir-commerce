import React from "react";
import { Wrapper } from "./NavStyle";
import logo from "../../img/main-logo.png";

const Nav = () => {
  return (
    <Wrapper>
      <img className="logo" src={logo} />
      <li className='li'>
        <ul>men's</ul>
        <ul>women's</ul>
        <ul>kid's</ul>
        <ul>accessories</ul>
        <ul>about</ul>
      </li>
    </Wrapper>
  );
};

export default Nav;
