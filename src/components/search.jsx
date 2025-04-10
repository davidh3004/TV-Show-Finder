import React from "react";
import { useState } from "react";


export function Search({ setSearch }) {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
            .then((response) => response.json())
            .then((json) => {
               const results = json.filter((item) => {
                    return (
                        value && 
                        item && 
                        item.show.name.toLowerCase().includes(value.toLowerCase()));
                });
                setSearch(results);
               })
            .catch((error) => console.error("Error fetching data:", error));
        }

    const handleSubmit = (value) => {
        setInput(value);
        fetchData(input);
    }
    
  return (
    <div className="search">
      <form onSubmit={(e => e.preventDefault())}>
        <input
            type="text"
            placeholder="Search for a TV Show..."
            value={input}
            onChange={(e) => handleSubmit(e.target.value)}
            onSubmit={(e) => e.preventDefault()}        
        />
      </form>
    </div>
  );
}