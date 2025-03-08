import React, { useState } from "react";
import "./../styles/App.css";

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

const App = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState(fruits); // Show all fruits initially

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSuggestions(fruits); // Reset to all fruits when input is empty
      return;
    }

    const filtered = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  return (
    <div>
      <h1>Search item</h1>
      <input 
        type="text" 
        value={query} 
        onChange={handleChange} 
        placeholder="Type to search..." 
      />
      <ul>
        {suggestions.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
