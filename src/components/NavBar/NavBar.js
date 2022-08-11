import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    background-color: black;
    
    li {
      a {
        color: white;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/images">Images</Link></li>
        <li><Link to="/sheets">Sheets</Link></li>
      </ul>
    </NavBarContainer>
  )
};

export default NavBar;
