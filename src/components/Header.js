import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const NavBar = styled.nav`
  display: flex;
  justify-content: space-around;
  margin-bottom:30px;
`;

const StyledLink = styled(Link)`
  text-decoration:none;
`;
export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/characters">Characters</StyledLink>

        
      </NavBar>
    </header>
  );
}
