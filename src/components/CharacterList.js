import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard"
import SearchForm from "./SearchForm"

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
    
    <section className="character-list">
      <SearchForm query={query} setQuery={setQuery}/>
      <h2>Characters</h2>
      {characters.map(character=> {
        return <CharacterCard key={character.id} character={character}/>
      })}
    </section>
  );
}
