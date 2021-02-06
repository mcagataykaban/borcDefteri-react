import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";
import "./App.css";
import LoginRegister from "./LoginRegister.js";
import HomePage from './pages/HomePage'

const App = () => {
  useEffect(() => {
    
    getAccessToken()
    const girisKontrol =()=> {
      
      var accessToken = getAccessToken();
      if (!accessToken) {
        return;
      }
      trackPromise(
        axios({
          method: "get",
          url: apiUrl + "api/Account/UserInfo",
          headers: { Authorization: "Bearer " + getAccessToken() },
        })
          .then((response) => {
            setuserName(response.data.Email);
            console.log('oldu');
            setisAuth(true);
          })
          .catch((error) => {
            setisAuth(false);
            console.log('olmadı');
          })
      );
    }
    girisKontrol();
  }, []);
  const getAccessToken = ()=> {
    var accessToken = sessionStorage['loginBorc_ck'] || localStorage['loginBorc_ck'];
    if (accessToken) {
      accessToken = accessToken.substring(1, accessToken.length - 1);
    }
    if (!accessToken) {
      return null;
    }
    return accessToken;
  }
  const [isAuth, setisAuth] = useState(false);
  const [userName, setuserName] = useState("")
  const apiUrl = "https://borc.cagataykaban.com/";
  return (
    <div className="App">
      <Router>
        <Switch>
        {isAuth === false ? (
          <Route>
            <LoginRegister apiUrl={apiUrl} />
          </Route>
        ) : (
          <Route>
            <HomePage userName={userName} token={getAccessToken()} />
          </Route>
        )}
      </Switch>
      </Router>
    </div>
  );
};

export default App;
