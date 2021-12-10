import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavDiv = styled.div
`
float:right;
padding: 2% 5% 0 0;
`

const NavLi = styled.li
`
list-style-type:none;
font-weight: bold;
font-size: 1.5em;
`
// These styled components seem like a terrible way to do things...

const LINKS = [
  { to: '/', text: 'Home'},
  { to: '/settings', text: 'Settings'},
]

const Nav = () => {
  return (
    <NavDiv>
      <ul>
        {
          LINKS.map(item => (
            <NavLi key={item.to}><Link to={item.to}>{item.text}</Link>
            </NavLi>
          ))}
      </ul>
    </NavDiv>
  )
}

export default Nav;