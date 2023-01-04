import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage1 from "./containers/UserPage1";
import UserPage2 from "./containers/UserPage2";
import Header from "./containers/Header";
import "./App.css";
import UserDetails from "./containers/UserDetails";
import Button from "./containers/Button";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element = {<Button/>}></Route>
          <Route path="/users/" exact element = {<UserPage1 />} />
          <Route path="/users?page=2" exact element = {<UserPage2 />} />
          <Route path="/users/:userId" exact element = {<UserDetails />} />
          <Route>404 Not Found!</Route>
        </Routes> 
      </Router>
    </div>
    
  );
}

export default App;
