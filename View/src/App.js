import React, { useEffect } from 'react';

import Navbar from "./Components/Navbar/navbar";

import './App.css';

function App(props) {
  const { loginState, checkLogin } = props;

  useEffect(() => {
    const url = 'https://localhost:8081/user/user';
    
    fetch(url, {
      method: 'get',
      headers: { 
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(json => {
      if (json.length === 0) {
        checkLogin(false);
      } else {
        console.log(json)
        checkLogin(true)
      }
    });
  })

  return (
    <div className="App">
      <Navbar />
     {loginState ? <div>User exist</div>: <div>No user yet</div>}
    </div>
  );
}

export default App;
