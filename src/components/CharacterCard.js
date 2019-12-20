import React from "react";
import styled from "styled-components"

const Character = styled.div`

  font-family: "Source Sans Pro", sans-serif;
  background: #263650;
  color: white;
  padding: 10px;
  margin: 2px;
  border-radius: 4px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);

`;

export default function CharacterCard({character}) {
  return (
    <Character>
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
    </Character>
  );
}
