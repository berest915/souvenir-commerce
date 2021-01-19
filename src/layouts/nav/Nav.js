import React from "react";
import { Wrapper } from "./NavStyle";
import logo from "../../img/main-logo.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Wrapper>
      <img className="logo" src={logo} />
      <li className="li">
        <Link to="/" className='link'>
          <ul>all</ul>
        </Link>
        <Link to="/products/tee" className='link'>
          <ul>tee</ul>
        </Link>
        <Link to="/products/mug" className='link'>
          <ul>mug</ul>
        </Link>
        <Link to="/about" className='link'>
          <ul>about</ul>
        </Link>
      </li>
    </Wrapper>
  );
};

export default Nav;
