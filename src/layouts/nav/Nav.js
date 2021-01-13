import React from "react";
import { Wrapper } from "./NavStyle";
import logo from "../../img/main-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Wrapper>
      <img className="logo" src={logo} />
      <li className="li">
        <Link to="/products" className='link'>
          <ul>men's</ul>
        </Link>
        <Link to="/products" className='link'>
          <ul>women's</ul>
        </Link>
        <Link to="/products" className='link'>
          <ul>kid's</ul>
        </Link>
        <Link to="/products" className='link'>
          <ul>accessories</ul>
        </Link>
        <Link to="/about" className='link'>
          <ul>about</ul>
        </Link>
      </li>
    </Wrapper>
  );
};

export default Nav;
