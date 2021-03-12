import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/FooterControls/Footer';
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import New from "./components/New/New";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login";
import Register from './components/Register';
import Stats from "./components/Stats";


function App(props) {
  

  return (
    
      <div style={{
      fontFamily: "'Architects Daughter', cursive"}}>
      <Router>
      <Nav/>    
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>  
      <Route exact path="/" component={Home}/>
      <Route exact path="/new" component={New}/>
      <Route exact path="/stats" component={Stats}/>
      <Route exact path="/profile" component={Profile}/>
      <Footer/>
      </Router>
      </div> 
    
    
  );
}

export default App;
