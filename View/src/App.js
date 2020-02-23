import React, { useEffect } from 'react';

import Navbar from "./Components/Navbar/navbar";

import './App.css';

function App() {

  useEffect(() => {
    const url = 'https://localhost:8081/user/user';
    
    fetch(url, {
      method: 'get',
      headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(json => console.log(json));
  })

  return (
    <div className="App">
      <Navbar />
     Hello testing
    </div>
  );
}

export default App;
