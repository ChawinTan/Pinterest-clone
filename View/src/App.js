import React, { useEffect } from 'react';

import Navbar from "./Container/NavBarContainer";
import GetPhoto from "./Container/GetPhotoContainer";
import UserBoard from "./Container/UserBoardContainer";

import './App.css';

function App(props) {
  const { loginState, checkLogin, addUser, storePhotos } = props;

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
        addUser(json[0]);
        checkLogin(true);
      }
      return json;
    }).then(user => {
      const url = `https://localhost:8081/photo/get/${user[0].secret}`;

        fetch(url, {
            method: 'get',
            headers: { 
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(json => { 
            storePhotos(json);
        })
    })
  })

  return (
    <div className="App">
      <Navbar />
      {loginState ? <GetPhoto /> : null}
      {loginState ? <UserBoard /> : <div>No user yet</div>}
    </div>
  );
}

export default App;
