import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"
import styled from "styled-components";

const StyledSection = styled.section`
  display:flex;
  align-items: center;
  flex-direction:column
`;

const ContentSection = styled.section`
  display:flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([])
  const [query, setQuery] = useState("")

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    axios.get("https://rickandmortyapi.com/api/character")
    .then(response => {
      console.log(response.data.results)
      
      const data = response.data.results.filter(character => 
        character.name
        .toLowerCase()
        .includes(query.toLowerCase()) 
      )
     
    
      setCharacters(data)
    
    

      
    })
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, [query]);

  return (
    
    <StyledSection className="character-list">
      <div>
        <SearchForm query={query} setQuery={setQuery}/>
      </div>
      
      <h2>Characters</h2>
      <ContentSection>
        {characters.map(character=> {
          return <CharacterCard key={character.id} character={character}/>
        })}
      </ContentSection>
      
    </StyledSection>
  );
}
