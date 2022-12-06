import React from "react";
import NavBar from "./components/NavBar"; 
import MainComponent from "./components/Main";
import './assets/App.css';


export default function App() {
  return(
    <div className="container">
      <NavBar />
      <MainComponent />
    </div>
  )
}
