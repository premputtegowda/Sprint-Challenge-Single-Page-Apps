import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin:0% 60px;
`;


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <StyledHeader>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </StyledHeader>
    </section>
  );
}
