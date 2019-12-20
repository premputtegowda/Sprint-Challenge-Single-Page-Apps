import React from "react";
import { tsPropertySignature } from "@babel/types";

export default function SearchForm(props) {
 
 const {query} = props;
 const {setQuery} = props;
 const handleInputchange = (event)=> {
  console.log("search term: ",event.target.value) 
  setQuery(event.target.value);
   
  }
  // useEffect(()=>{
  //   const result = characters.filter(character => {
  //     return character.name.toLowerCase().includes(query.toLowerCase()) 
  //   })
  //   console.log(result);
  //   if (result){
  //     setCharacters(result)
  //   }
    
  // },[query])
  
 
 
 
  return (
    <section className="search-form">
   
     <form className="search">
       <input type="text"
       name="name"
       placeholder="search character"
       onChange={handleInputchange}
       value={query}/>
     </form>

    </section>
  );
}
