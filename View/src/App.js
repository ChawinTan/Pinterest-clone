import React, { useEffect } from 'react';
import { Switch, Route } from "react-router-dom";

import Navbar from "./Container/NavBarContainer";
import GetPhoto from "./Container/GetPhotoContainer";
import UserBoard from "./Container/UserBoardContainer";
import LandingPage from "./Container/landingPageContainer";
import Search from "./Container/searchContainer";

import './App.css';

function App(props) {
  const { loginState, checkLogin, addUser, storePhotos, searchState, getMapDetails } = props;

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
      if (user.length > 0) {
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
        }
        return user;
    }).then(user => {
      if (user.length) {
        const url = `https://localhost:8081/photo/map_details/${user[0].secret}`;

        fetch(url, {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }).then(res => res.json())
        .then(json => {
          getMapDetails(json);
        })
      }
    })
  })

  return (
    <div className="App">
      <Navbar />
      {
        loginState && searchState ? <Search /> : 
        loginState && !searchState ? <GetPhoto /> : null
      }
      {
        loginState && searchState ? null :
        loginState && !searchState ?  <UserBoard /> : <LandingPage />
      }
    </div>
  );
}

export default App;
