// import logo from './logo.svg';
//import './App.css';

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
       //<h1> working</h1>
     // </header>
    //</div>
//  );
//}

//export default App; 

import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
